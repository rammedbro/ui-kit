import 'tsconfig-paths/register';
import type {
  IE2ERunnerConfig,
  TCapabilityBrowsers,
  TCapabilityServices
} from '@bx-fe/e2e-runner-types';

import { wdioConfigExtend } from '~e2e/utils/wdio-extend';

const {
  CI,
  CI_JOB_URL,
  E2E_BROWSER_NAME,
  E2E_BROWSER_SERVICE,
  E2E_SUITE,
  E2E_COMPONENT,
  S3_ACCESS_KEY,
  S3_SECRET_KEY,
  GITLAB_API_PRIVATE_TOKEN,
} = process.env;

const isCI = CI === 'true';

const config: IE2ERunnerConfig = {
  outputDir: 'dist/wdio',
  browser: {
    name: E2E_BROWSER_NAME as TCapabilityBrowsers,
    service: E2E_BROWSER_SERVICE as TCapabilityServices,
    platform: 'desktop',
  },
  suite: E2E_SUITE,
  suites: {
    ssr: {
      specs: ['./tests/e2e/specs/ssr.test.ts']
    },
    screenshot: {
      specs: ['./tests/e2e/specs/screenshot.test.ts']
    },
  },
  allure: {
    projectId: '50',
    options: {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }
  },
  screenshots: {
    suites: [/screenshot/],
    ciJobs: [/test:screenshot/],
    gitlab: {
      projectId: '4228',
      token: GITLAB_API_PRIVATE_TOKEN,
    },
    s3: {
      bucket: 'screenshots',
      accessKey: S3_ACCESS_KEY,
      secretKey: S3_SECRET_KEY,
    },
    comparison: {
      screenshotPath: 'screenshots',
      formatSuiteDirName: `${E2E_COMPONENT}-{service}-{browser}-{platform}`,
      formatImageName: '{tag}-{width}x{height}',
      savePerInstance: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
    }
  },
  typescript: true,
  wdioConfigExtend,
};

if (isCI) {
  config.launchName = `${CI_JOB_URL}?suite=${E2E_SUITE}`;
}

export default config;
