import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('label', 'Label text'),
    createScenarioForSingleValueProp('errors', ['Error 1', 'Error 2'], {
      vueData: {
        props: {
          label: 'Label text',
        }
      },
    }),
    createScenarioForSingleValueProp('attrFor', 'button', {
      vueData: {
        props: {
          label: 'Label text',
        }
      },
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('preventDefaultClick', true, {
      vueData: {
        props: {
          label: 'Label text',
        }
      },
      suites: ['ssr'],
    }),
  ]
} as IComponent;
