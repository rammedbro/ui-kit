/*
* Мега костыль! Проблема в том, что ts-node (чтобы выполнять тс на лету) не обрабатывает код из node_modules
* https://github.com/TypeStrong/ts-node/issues/617
* А пакет @fe/icons предоставляет index.ts, а не js
* Поэтому пришлось переписать скрипт по генерации дочернего пайплайна для e2e тестов
* */

const fs = require('fs');
const path = require('path');
const { pathToDist } = require('../../../build/constants/paths.js');

const componentsPath = path.join(process.cwd(), 'tests/e2e/app/scenarios/index.ts');
const components = fs.readFileSync(componentsPath, { encoding: 'utf-8' });

const REG = /import Oz(.*?) from '\.(.*?)'/g;
const componentsNames = components.match(REG).map(component => [component.match(/Oz(.*?) /)[0], component.match(/'\.(.*?)'/)[1]]);

const browsers = {
  on_success: [
    { name: 'chrome', value: 'chrome' },
    { name: 'firefox', value: 'firefox' },
    { name: 'safari', value: 'safari' },
  ],
  manual: [
    { name: 'edge', value: 'microsoftedge' },
    { name: 'opera', value: 'opera' },
  ]
};

function makeJob(browser, component, when) {
  if (!component) return;

  return `${component.slice(0, -1)}:test:screenshot:${browser.name}:
  <<: *test-screenshot
  stage: test:screenshot:${browser.name}
  when: ${when}
  variables:
    E2E_SUITE: screenshot
    E2E_BROWSER_SERVICE: moon
    E2E_BROWSER_NAME: ${browser.value}
    E2E_COMPONENT: ${component}`;
}

(async () => {
  const configPath = path.join(process.cwd(), '.gitlab-ci.e2e.yml');
  let config = fs.readFileSync(configPath, { encoding: 'utf-8' });

  Object.entries(browsers).forEach(([when, items]) =>
    items.forEach(browser => {
      componentsNames.forEach(([component, paths]) => {
        const scenariosPath = path.join(process.cwd(), `tests/e2e/app/scenarios${paths}.ts`);
        const scenarios = fs.readFileSync(scenariosPath, { encoding: 'utf-8' });

        const hasScreenshotsScenarios = !scenarios.includes('suites: [\'ssr\']');

        if (!hasScreenshotsScenarios) return;

        config += '\n\n' + makeJob(browser, component, when);
      });
    }));

  const outputPath = path.join(pathToDist, 'e2e-child-pipeline-config.yml');
  fs.mkdirSync(pathToDist, { recursive: true });
  fs.writeFileSync(outputPath, config, { encoding: 'utf-8' });
})();
