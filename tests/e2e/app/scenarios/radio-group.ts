import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { LAYOUT, CONTROL_POSITION, RADIO_THEMES } from '@/radio-group/constants';

const options = [
  { label: 'Быть', value: '1' },
  { label: 'Или не быть', value: '-1' },
  { label: 'Не хочу решать', value: '0' },
];

const buttonOptions = [
  { text: 'Начислить', primaryText: '10 ₽', subtext: '10 ₽', value: '1' },
  { text: 'Списать', primaryText: '10 ₽', subtext: '10 ₽', value: '-1' },
  { text: 'Начислить', primaryText: '10 ₽', subtext: 'disabled', value: '0', disabled: true }
];

const defaultOptions = {
  vueData: {
    props: {
      options: options,
      value: options[0].value
    }
  },
};

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('options', options),
    createScenarioForMultipleValueProp('layout', LAYOUT, (item, index) => ({
      vueData: {
        props: {
          options: options,
          value: options[0].value,
          name: `radio-group-${index}`
        }
      },
    })),
    createScenarioForMultipleValueProp('controlPosition', CONTROL_POSITION, (item, index) => ({
      vueData: {
        props: {
          options: options,
          value: options[0].value,
          name: `radio-group-${index}`
        }
      },
    })),
    createScenarioForSingleValueProp('fill', true, {
      vueData: {
        props: {
          options: options,
          layout: 'vertical',
          value: options[0].value
        }
      },
      description: 'controlPosition = left',
    }),
    createScenarioForSingleValueProp('fill', true, {
      vueData: {
        props: {
          options: options,
          layout: 'vertical',
          controlPosition: CONTROL_POSITION.RIGHT,
          value: options[0].value
        }
      },
      description: 'controlPosition = right',
    }),
    createScenarioForSingleValueProp('value', options[0].value, {
      vueData: {
        props: {
          options: options,
        }
      },
    }),
    createScenarioForSingleValueProp('name', 'radio-group-1', {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForMultipleValueProp('theme', [RADIO_THEMES.BUTTON, RADIO_THEMES.PRIMARY_BUTTON], {
      ...defaultOptions,
      description: 'buttonThemes',
      vueData: {
        props: {
          options: buttonOptions,
          value: buttonOptions[0].value
        }
      },
      suites: ['ssr'],
    }),
  ]
} as IComponent;
