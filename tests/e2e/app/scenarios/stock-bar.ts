import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { THEMES } from '@/stock-bar/constants';

const defaultOptions = {
  vueData: {
    props: {
      percent: 80,
    },
  }
};

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('percent', 30),
    createScenarioForSingleValueProp('percent', 130, {
      description: 'percent > 100'
    }),
    createScenarioForSingleValueProp('percent', -30, {
      description: 'percent < 0'
    }),
    createScenarioForSingleValueProp('text', 'Осталось 25 шт.', {
      ...defaultOptions,
    }),
    createScenarioForSingleValueProp('stockBarColor', 'ozAccentSecondary', {
      ...defaultOptions,
      description: 'name color'
    }),
    createScenarioForSingleValueProp('stockBarColor', '#10ad44', {
      ...defaultOptions,
      description: 'hex'
    }),
    createScenarioForSingleValueProp('stockBarBackgroundColor', 'ozCtrlMarketing', {
      ...defaultOptions,
      description: 'name color',
    }),
    createScenarioForSingleValueProp('stockBarBackgroundColor', '#5b51de', {
      ...defaultOptions,
      description: 'hex',
    }),
    createScenarioForSingleValueProp('stockBarBackgroundOpacity', 0.5, {
      ...defaultOptions,
    }),
    createScenarioForSingleValueProp('stockBarBackgroundAlpha', 0.5, {
      ...defaultOptions,
    }),
    createScenarioForSingleValueProp('textColor', 'ozAccentAlert', {
      vueData: {
        props: {
          percent: 80,
          text: 'Осталось 10 шт.'
        },
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('textColor', '#f91155', {
      vueData: {
        props: {
          percent: 80,
          text: 'Осталось 10 шт.'
        },
      },
      description: 'hex'
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      ...defaultOptions,
      description: 'without text',
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          percent: 80,
          text: 'Осталось 25 шт.',
        },
      },
      description: 'with text',
    }),
  ]
} as IComponent;
