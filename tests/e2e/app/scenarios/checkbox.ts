import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForMultipleValueProp,
  createScenarioForSingleValueProp,
} from '~e2e/app/scenarios/utils';
import { THEMES, CONTROL_POSITIONS, LABEL_VERTICAL_ALIGN } from '@/checkbox/constants';

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('checked', true),
    createScenarioForSingleValueProp('disabled', true),
    createScenarioForSingleValueProp('hasError', true),
    createScenarioForSingleValueProp('name', 'Some name', {
      suites: ['ssr']
    }),
    createScenarioForMultipleValueProp('theme', THEMES),
    createScenarioForMultipleValueProp('controlPosition', CONTROL_POSITIONS, {
      slots: () => ({
        default: 'Text'
      })
    }),
    createScenarioForMultipleValueProp('labelVerticalAlign', LABEL_VERTICAL_ALIGN, {
      slots: (h) => ({
        default: [
          h('span', 'Первая строка'),
          h('br'),
          h('span', 'Вторая строка')
        ],
      })
    }),
  ]
} as IComponent;
