import axios from 'axios';
import { AllureReporter } from '@bx-fe/e2e-runner-app';
import { CustomRequestError } from 'webdriver/build/utils';
import type { IE2ERunnerConfig } from '@bx-fe/e2e-runner-types';

import { createServer, IServer } from '~e2e/utils/server';

const SESSION_RELOAD_ENABLED = true;
const SESSION_RELOAD_COUNT_LIMIT = 5;
const getCurrentTime = () => new Date().toLocaleTimeString('ru');

const wdioConfigExtend: IE2ERunnerConfig['wdioConfigExtend'] = config => {
  let server: IServer;
  let sessionReloadCount: number = 0;

  config.beforeSession.push(
    () => console.log(`[INFO]: Session started at ${getCurrentTime()}`)
  );

  config.beforeSuite.push(
    // Run server
    async () => {
      server = await createServer();
      browser.overwriteCommand('url', async (origFn, path) => {
        const url = new URL(path, browser.config.baseUrl);
        return origFn(server.url + url.pathname);
      });
    }
  );

  config.beforeTest.push(
    // Check server listening
    async () => {
      let status;

      AllureReporter.startStep(`Checking server is listening on ${server.url}`);
      try {
        await axios.head('/__tests__/', { baseURL: server.url });
      } catch (e) {
        status = 'failed';
        AllureReporter.addAttachment('Error', JSON.stringify(e, null, 2), 'text/json');
      } finally {
        AllureReporter.endStep(status);
      }
    }
  );

  config.afterTest.push(
    // Close last allure step
    (test, ctx, result) => {
      if (!result.passed) {
        AllureReporter.endStep('failed');
      }
    },
    // Take default screenshot
    async () => {
      let status;
      try {
        AllureReporter.startStep('Taking default screenshot');
        const screenshot = await browser.takeScreenshot();
        const buffer = Buffer.from(screenshot, 'base64');
        AllureReporter.addAttachment('Screenshot: Default', buffer, 'image/png');
      } catch (e) {
        AllureReporter.addAttachment('Error', e.message, 'text/plain');
        status = 'failed';
      } finally {
        AllureReporter.endStep(status);
      }
    },
    // Log test status
    (test, ctx, result) => {
      const status = result.passed ? 'passed' : 'failed';
      console.log(`[${status.toUpperCase()}]: ${test.title}`);
    },
    // Reload session after connection errors
    async function (test, ctx, result) {
      if (!SESSION_RELOAD_ENABLED) return;

      if (!(result.error instanceof CustomRequestError)) return;

      if (sessionReloadCount === SESSION_RELOAD_COUNT_LIMIT) {
        console.log(`[ERROR]: Session reload limit (${SESSION_RELOAD_COUNT_LIMIT}) exceeded`);
        return;
      }

      await browser.reloadSession();
      ctx._runnable.retries(1);
      sessionReloadCount++;
      console.log(`[INFO]: Session reloaded due to error - ${result.error.message}`);
    }
  );

  config.afterSession.push(
    // Shutdown server
    async () => {
      if (server) {
        await server.terminate();
        console.log('[INFO]: Server terminated');
      }
    },
    () => console.log(`[INFO]: Session ended at ${getCurrentTime()}`)
  );

  config.onReload.push(
    () => console.log(`[INFO]: Session reloaded at ${getCurrentTime()}`)
  );
};

export { wdioConfigExtend };
