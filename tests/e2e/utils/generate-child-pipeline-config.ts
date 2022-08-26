import * as fs from 'fs';
import * as path from 'path';
import components from '~e2e/app/scenarios';
import { pathToDist } from '~build/constants/paths';

interface IBrowser {
  name: string;
  value: string;
}

const browsers: Record<string, IBrowser[]> = {
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

const configPath = path.join(process.cwd(), '.gitlab-ci.e2e.yml');
let config = fs.readFileSync(configPath, { encoding: 'utf-8' });

Object.entries(browsers).forEach(([when, items]) =>
  items.forEach(browser => {
    Object.entries(components).forEach(([component, { scenarios }]) => {
      const hasScreenshotsScenarios = scenarios.find(item => !item.suites || item.suites.includes('screenshot'));

      if (!hasScreenshotsScenarios) return;

      config += '\n\n' + makeJob(browser, component, when);
    });
  }));

const outputPath = path.join(pathToDist, 'e2e-child-pipeline-config.yml');
fs.mkdirSync(pathToDist, { recursive: true });
fs.writeFileSync(outputPath, config, { encoding: 'utf-8' });

function makeJob(browser: IBrowser, component: string, when: string): string {
  return `${component}:test:screenshot:${browser.name}:
  <<: *test-screenshot
  stage: test:screenshot:${browser.name}
  when: ${when}
  variables:
    E2E_SUITE: screenshot
    E2E_BROWSER_SERVICE: moon
    E2E_BROWSER_NAME: ${browser.value}
    E2E_COMPONENT: ${component}`;
}
