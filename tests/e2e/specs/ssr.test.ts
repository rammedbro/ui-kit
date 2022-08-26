import components from '~e2e/app/scenarios';
import { AllureReporter } from '@bx-fe/e2e-runner-app';

describe('ssr', function () {
  Object.entries(components).forEach(([component, { scenarios }]) => {
    scenarios.forEach((scenario) => {
      if (scenario.suites && !scenario.suites.includes(this.title)) return;

      const tag = `${component}-${scenario.label}`;

      it(`should render ${tag} without errors and warnings`, async function () {
        const label = encodeURI(scenario.label);
        const path = `/__tests__/${component}/${label}/`;
        AllureReporter.startStep(`Going to scenario url ${path}`);
        await browser.url(path);
        AllureReporter.endStep();

        AllureReporter.startStep('Checking app exists in DOM');
        const app = await $('#app');
        expect(app).toExist();
        AllureReporter.endStep();

        // Disable retries after connection is ok
        this.retries(0);

        AllureReporter.startStep('Checking server errors');
        const serverErrors = [];
        await app.$$('#server-errors')
          .then(errors => errors.forEach(el =>
            el.getText().then(json => serverErrors.push(...JSON.parse(json)))
          ));
        AllureReporter.addAttachment('Errors', JSON.stringify(serverErrors, null, 2), 'text/json');
        expect(serverErrors.length).toEqual(0);
        AllureReporter.endStep();

        AllureReporter.startStep('Checking client errors');
        const clientErrors = [];
        await app.$$('#client-errors')
          .then(errors => errors.forEach(el =>
            el.getText().then(json => clientErrors.push(...JSON.parse(json)))
          ));
        AllureReporter.addAttachment('Errors', JSON.stringify(clientErrors, null, 2), 'text/json');
        expect(clientErrors.length).toEqual(0);
        AllureReporter.endStep();

        AllureReporter.startStep('Checking warnings');
        const warnings = [];
        await app.$$('#warnings')
          .then(errors => errors.forEach(el =>
            el.getText().then(json => warnings.push(...JSON.parse(json)))
          ));
        AllureReporter.addAttachment('Warnings', JSON.stringify(warnings, null, 2), 'text/json');
        expect(warnings.length).toEqual(0);
        AllureReporter.endStep();
      });
    });
  });
});
