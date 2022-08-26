import fs from 'fs';
import { resolve } from 'path';
import components from '~e2e/app/scenarios';
import { AllureReporter } from '@bx-fe/e2e-runner-app';

describe('screenshot', function () {
  const componentName = process.env.E2E_COMPONENT;
  const component = components[componentName];

  if (!component) {
    throw new Error(`Component ${component} isn't found`);
  }

  component.scenarios.forEach((scenario) => {
    if (scenario.suites && !scenario.suites.includes(this.title)) return;

    const tag = `${componentName}-${scenario.label}`;

    it(`should compare successful with a baseline for ${tag}`, async function () {
      const label = encodeURI(scenario.label);
      const path = `/__tests__/${componentName}/${label}/`;
      AllureReporter.startStep(`Going to scenario url ${path}`);
      await browser.url(path);
      AllureReporter.endStep();

      AllureReporter.startStep('Checking app exists in DOM');
      const app = await $('#app');
      expect(app).toExist();
      AllureReporter.endStep();

      AllureReporter.startStep('Waiting for all resources are downloaded');
      const isDocumentReady = await browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
          timeout: 10 * 1000,
          timeoutMsg: 'Resource downloading timeout is exceeded'
        });
      expect(isDocumentReady).toEqual(true);
      AllureReporter.endStep();

      AllureReporter.startStep('Getting elements for hiding (e.g. with animation)');
      const elementsToHide = await app.$$('svg[class^=loader]');
      AllureReporter.endStep();

      AllureReporter.startStep('Taking an actual screenshot');
      const saveOptions = {
        disableCSSAnimation: true,
        hideElements: elementsToHide,
        // There is an issue wih hideScrollBar with mobile emulation (e.g. chromeMobile)
        // https://github.com/wswebcreation/webdriver-image-comparison/issues/92
        hideScrollBars: true
      };
      const screenshot = await browser.saveFullPageScreen(tag, saveOptions);
      const screenshotPath = resolve(<string>screenshot.path, <string>screenshot.fileName);
      const file = fs.readFileSync(screenshotPath);
      AllureReporter.addAttachment('Screenshot: Actual', file, 'image/png');
      AllureReporter.endStep();

      AllureReporter.startStep('Comparing an actual screenshot with a baseline');
      const ALLOWED_SCREENSHOT_MISMATCH = 0.01;
      const checkOptions = {
        ...saveOptions,
        returnAllCompareData: true,
      };
      // @ts-ignore
      const { misMatchPercentage, folders } = await browser.checkFullPageScreen(tag, checkOptions);
      Object.entries(folders).forEach(([key, value]) => {
        const kind = key.charAt(0).toUpperCase() + key.slice(1);
        const file = fs.readFileSync(<string>value);
        AllureReporter.addAttachment(`Screenshot: ${kind}`, file, 'image/png');
      });
      expect(misMatchPercentage).toBeLessThanOrEqual(ALLOWED_SCREENSHOT_MISMATCH);
      AllureReporter.endStep();
    });
  });
});
