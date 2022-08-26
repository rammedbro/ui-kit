import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp } from '~e2e/app/scenarios/utils';
import { THEMES } from '@/disclosure/constants';

export default {
  critical: false,
  scenarios: [
    createScenarioForMultipleValueProp('theme', [THEMES.DEFAULT, THEMES.FRESH]),
    createScenarioForMultipleValueProp('theme', [THEMES.DEFAULT, THEMES.FRESH], {
      description: 'With text display',
      vueData: {
        props: {
          text: '123'
        }
      }
    })
  ]
} as IComponent;
