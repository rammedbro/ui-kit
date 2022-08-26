import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';

const TODAY = new Date(2021, 8, 8).getTime();
const DAY_FROM = new Date(2021, 8, 5).getTime();
const DAY_TO = new Date(2021, 8, 20).getTime();

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('value', TODAY),
    createScenarioForSingleValueProp('from', DAY_FROM, {
      vueData: {
        props: {
          value: TODAY,
        }
      }
    }),
    createScenarioForSingleValueProp('to', DAY_TO, {
      vueData: {
        props: {
          value: TODAY,
        }
      }
    })
  ]
} as IComponent;
