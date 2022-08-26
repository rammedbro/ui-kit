import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp, createScenarioForSlot } from '~e2e/app/scenarios/utils';
import { SIZES } from '~/constants/sizes';
import { STYLE_INPUT } from '@/text-field-wrapper/constants.js';
import { TestMIcon } from '../icons';

const SIZES_TEXT_FIELD_WRAPPER = Object.values(SIZES).filter((item) => (item !== 'xs'));

const defaultOptions = {
  slots: (h) => ({
    default: h(
      'input',
      {
        style: {
          'box-sizing': 'border-box',
          'vertical-align': 'top',
          width: '100%',
          padding: '10px 10px',
          border: '0',
          outline: 'none',
        }
      },
      'Слот по умолчанию'
    )
  })
};

export default {
  critical: false,
  scenarios: [
    createScenarioForSlot('default', (h) => h(
      'input',
      {
        style: {
          'box-sizing': 'border-box',
          'vertical-align': 'top',
          width: '100%',
          padding: '10px 10px',
          border: '0',
          outline: 'none',
        }
      },
      'Слот по умолчанию'
    )),
    createScenarioForSingleValueProp('hasValue', true, {
      ...defaultOptions,
      vueData: {
        props: {
          size: SIZES.XL,
          focused: true,
        }
      },
    }),
    createScenarioForSingleValueProp('hasError', true, defaultOptions),
    createScenarioForSingleValueProp('placeholder', 'Placeholder', defaultOptions),
    createScenarioForMultipleValueProp('size', SIZES_TEXT_FIELD_WRAPPER, (size) => {
      return {
        slots: (h) => ({
          default: h(
            'input',
            {
              style: {
                ...STYLE_INPUT[size],
                'box-sizing': 'border-box',
                'vertical-align': 'top',
                width: '100%',
                border: '0',
                outline: 'none',
              }
            },
            'Слот по умолчанию'
          )
        })
      };
    }),
    createScenarioForMultipleValueProp('size', SIZES_TEXT_FIELD_WRAPPER, (size) => {
      return {
        vueData: {
          props: {
            placeholder: 'placeholder',
          }
        },
        slots: (h) => ({
          default: h(
            'input',
            {
              style: {
                ...STYLE_INPUT[size],
                'box-sizing': 'border-box',
                'vertical-align': 'top',
                width: '100%',
                border: '0',
                outline: 'none',
              }
            },
            'Слот по умолчанию'
          )
        }),
      };
    }, {
      description: 'with placeholder',
    }),
    createScenarioForMultipleValueProp('size', SIZES_TEXT_FIELD_WRAPPER, (size) => {
      return {
        vueData: {
          props: {
            disabled: true
          }
        },
        slots: (h) => ({
          default: h(
            'input',
            {
              style: {
                ...STYLE_INPUT[size],
                'box-sizing': 'border-box',
                'vertical-align': 'top',
                width: '100%',
                border: '0',
                outline: 'none',
              }
            },
            'Слот по умолчанию'
          )
        }),
      };
    }, {
      description: 'with disabled',
    }),
    createScenarioForMultipleValueProp('size', SIZES_TEXT_FIELD_WRAPPER, (size) => {
      return {
        vueData: {
          props: {
            loading: true
          }
        },
        slots: (h) => ({
          default: h(
            'input',
            {
              style: {
                ...STYLE_INPUT[size],
                'box-sizing': 'border-box',
                'vertical-align': 'top',
                width: '100%',
                border: '0',
                outline: 'none',
              }
            },
            'Слот по умолчанию'
          )
        }),
      };
    }, {
      description: 'with loading',
    }),
    createScenarioForMultipleValueProp('size', SIZES_TEXT_FIELD_WRAPPER, (size) => {
      return {
        vueData: {
          props: {
            icon: TestMIcon
          }
        },
        slots: (h) => ({
          default: h(
            'input',
            {
              style: {
                ...STYLE_INPUT[size],
                'box-sizing': 'border-box',
                'vertical-align': 'top',
                width: '100%',
                border: '0',
                outline: 'none',
              }
            },
            'Слот по умолчанию'
          )
        }),
      };
    }, {
      description: 'with icon',
    }),
    createScenarioForMultipleValueProp('size', SIZES_TEXT_FIELD_WRAPPER, (size) => {
      return {
        vueData: {
          props: {
            icon: TestMIcon,
            autoIconSize: true
          }
        },
        slots: (h) => ({
          default: h(
            'input',
            {
              style: {
                ...STYLE_INPUT[size],
                'box-sizing': 'border-box',
                'vertical-align': 'top',
                width: '100%',
                border: '0',
                outline: 'none',
              }
            },
            'Слот по умолчанию'
          )
        }),
      };
    }, {
      description: 'with icon and autoIconSize',
    }),
    createScenarioForSingleValueProp('disabled', true, defaultOptions),
    createScenarioForSingleValueProp('focused', true, defaultOptions),
    createScenarioForSingleValueProp('loading', true, defaultOptions),
    createScenarioForSingleValueProp('icon', TestMIcon, defaultOptions),
    createScenarioForSingleValueProp('iconColor', 'ozAccentAlert', {
      ...defaultOptions,
      vueData: {
        props: {
          icon: TestMIcon,
        }
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('autoIconSize', true, {
      ...defaultOptions,
      vueData: {
        props: {
          icon: TestMIcon,
        }
      },
    }),
    createScenarioForSingleValueProp('iconColor', '#f91155', {
      ...defaultOptions,
      vueData: {
        props: {
          icon: TestMIcon,
        }
      },
      description: 'hex'
    }),
    createScenarioForSingleValueProp('iconRotate', 50, {
      ...defaultOptions,
      vueData: {
        props: {
          icon: TestMIcon,
        }
      },
    }),
    createScenarioForSingleValueProp('loadingMargin', true, {
      ...defaultOptions,
      vueData: {
        props: {
          loading: true,
        }
      },
    }),
    createScenarioForSingleValueProp('insideLabel', 'inside label', defaultOptions),
  ]
} as IComponent;
