import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForMultipleValueProp,
  createScenarioForSingleValueProp,
  createScenarioForSlot
} from '~e2e/app/scenarios/utils';
import { CONTROL_POSITION, RADIO_THEMES } from '@/radio/constants';

const defaultOptions = {
  vueData: {
    props: {
      value: 'Значение',
    }
  },
  slots: (h) => ({
    default: h('span', 'Выбор одного из пунктов')
  })
};

export default {
  critical: true,
  scenarios: [
    createScenarioForSlot('default', () => 'Слот по умолчанию', {
      vueData: {
        props: {
          value: 'Значение',
        }
      },
    }),
    createScenarioForSingleValueProp('value', 'Значение', {
      slots: (h) => ({
        default: h('span', 'Выбор одного из пунктов')
      }),
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('name', 'favoriteLists', {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('model', 'favoriteLists', {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('disabled', true, defaultOptions),
    createScenarioForSingleValueProp('hasError', true, defaultOptions),
    createScenarioForSingleValueProp('fill', true, {
      ...defaultOptions,
      vueData: {
        props: {
          value: 'Значение',
          layout: 'vertical'
        }
      },
      description: 'controlPosition = left',
    }),
    createScenarioForSingleValueProp('fill', true, {
      ...defaultOptions,
      vueData: {
        props: {
          value: 'Значение',
          layout: 'vertical',
          controlPosition: CONTROL_POSITION.RIGHT
        }
      },
      description: 'controlPosition = right',
    }),
    createScenarioForMultipleValueProp('controlPosition', CONTROL_POSITION, defaultOptions),
    createScenarioForSingleValueProp('isMobileTheme', true, defaultOptions),
    createScenarioForMultipleValueProp('theme', [RADIO_THEMES.BUTTON, RADIO_THEMES.PRIMARY_BUTTON], {
      ...defaultOptions,
      description: 'buttonThemes',
      vueData: {
        props: {
          value: 'Значение',
          text: ' Списать',
          primaryText: '10',
          subtext: '10 ₽'
        }
      }
    }),
  ]
} as IComponent;
