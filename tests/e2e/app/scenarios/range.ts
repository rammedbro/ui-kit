import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { SIZES } from '~/constants/sizes';

const defaultOptions = {
  vueData: {
    props: {
      min: 1,
      max: 100,
    }
  },
};

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('min', 1, {
      vueData: {
        props: {
          max: 100,
        }
      },
    }),
    createScenarioForSingleValueProp('max', 100),
    createScenarioForSingleValueProp('value', 60, {
      ...defaultOptions,
      description: 'single value',
    }),
    createScenarioForSingleValueProp('value', [30, 60], {
      ...defaultOptions,
      description: 'range of value ',
    }),
    createScenarioForSingleValueProp('disabled', true, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: 60,
        }
      },
      description: 'single value',
    }),
    createScenarioForSingleValueProp('disabled', true, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: [30, 60],
        }
      },
      description: 'range of value',
    }),
    createScenarioForSingleValueProp('disabled', true, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: [30, 60],
          onlyInputs: true,
        }
      },
      description: 'range of value + onlyInputs',
    }),
    createScenarioForSingleValueProp('disabled', true, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: [30, 60],
          hideInputs: true,
        }
      },
      description: 'range of value + hideInputs',
    }),
    createScenarioForSingleValueProp('onlyInputs', true, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: [30, 60],
        }
      },
    }),
    createScenarioForSingleValueProp('hideInputs', true, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: [30, 60],
        }
      },
    }),
    createScenarioForSingleValueProp('step', 0.001, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          min: 0.2,
          value: [0.2, 60],
        }
      },
      description: 'with fractional step',
    }),
    createScenarioForMultipleValueProp('inputsSize', SIZES, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: [30, 60],
        }
      },
    }),
    createScenarioForMultipleValueProp('inputsSize', SIZES, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: [30, 60],
          onlyInputs: true,
        }
      },
      description: 'with onlyInputs',
    }),
    createScenarioForMultipleValueProp('inputsSize', SIZES, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: [30, 60],
          hideInputs: true,
        }
      },
      description: 'with hideInputs',
    }),
  ]
} as IComponent;
