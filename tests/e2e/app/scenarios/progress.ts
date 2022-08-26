import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';

const defaultOptions = {
  vueData: {
    props: {
      percent: 45,
      height: 30,
    }
  }
};

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('percent', 100, {
      vueData: {
        props: {
          height: 30,
        }
      }
    }),
    createScenarioForSingleValueProp('height', 50, {
      vueData: {
        props: {
          percent: 100,
        }
      }
    }),
    createScenarioForSingleValueProp('width', 200, defaultOptions),
    createScenarioForSingleValueProp('color', 'ozAccentAlert', {
      ...defaultOptions,
      description: 'name color'
    }),
    createScenarioForSingleValueProp('color', '#f91155', {
      ...defaultOptions,
      description: 'hex'
    }),
    createScenarioForSingleValueProp('backgroundColor', 'ozAccentAlert', {
      ...defaultOptions,
      description: 'name color'
    }),
    createScenarioForSingleValueProp('backgroundColor', '#f91155', {
      ...defaultOptions,
      description: 'hex'
    }),
    createScenarioForSingleValueProp('time', 10, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('bezier', 'ease-out', {
      ...defaultOptions,
      suites: ['ssr'],
    }),
  ]
} as IComponent;
