import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForSlot, createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { SIZES } from '~/constants/sizes';
import { TestMIcon } from '../icons';

const SIZES_TEXTAREA = Object.values(SIZES).filter((item) => (item === 'm' || item === 'l' || item === 'xl' || item === 'xxl'));

export default {
  critical: true,
  scenarios: [
    createScenarioForSlot('default', 'Слот по умолчанию'),
    createScenarioForMultipleValueProp('size', SIZES_TEXTAREA, {
      vueData: {
        props: {
          value: 'Текстовое значение поля',
        }
      },
    }),
    createScenarioForMultipleValueProp('size', SIZES_TEXTAREA, {
      vueData: {
        props: {
          value: 'Текстовое значение поля',
          icon: TestMIcon,
        }
      },
      description: 'with icon',
    }),
    createScenarioForMultipleValueProp('size', SIZES_TEXTAREA, {
      vueData: {
        props: {
          value: 'Текстовое значение поля',
          loading: true,
        }
      },
      description: 'with loading',
    }),
    createScenarioForMultipleValueProp('size', SIZES_TEXTAREA, {
      vueData: {
        props: {
          placeholder: 'Placeholder text',
        }
      },
      description: 'with placeholder',
    }),
    createScenarioForMultipleValueProp('size', SIZES_TEXTAREA, {
      vueData: {
        props: {
          value: 'Текстовое значение поля',
          placeholder: 'Placeholder text',
        }
      },
      description: 'with placeholder and value',
    }),
    createScenarioForSingleValueProp('hasError', true),
    createScenarioForSingleValueProp('disabled', true),
    createScenarioForSingleValueProp('loading', true),
    createScenarioForSingleValueProp('icon', TestMIcon),
    createScenarioForSingleValueProp('iconColor', 'ozAccentAlert', {
      vueData: {
        props: {
          icon: TestMIcon,
        }
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('iconColor', '#f91155', {
      vueData: {
        props: {
          icon: TestMIcon,
        }
      },
      description: 'hex'
    }),
    createScenarioForSingleValueProp('iconRotate', 45, {
      vueData: {
        props: {
          icon: TestMIcon,
        }
      },
    }),
    createScenarioForSingleValueProp('loadingMargin', true, {
      vueData: {
        props: {
          loading: true,
        }
      },
    }),
    createScenarioForSingleValueProp('insideLabel', 'Inside label'),
    createScenarioForSingleValueProp('value', 'Текстовое значение поля'),
    createScenarioForSingleValueProp('height', '30px', {
      vueData: {
        props: {
          value: 'Текст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\n',
        }
      },
    }),
    createScenarioForSingleValueProp('maxLength', '7', {
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('maxHeight', '100px', {
      vueData: {
        props: {
          value: 'Текст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\n',
        }
      },
    }),
    createScenarioForSingleValueProp('autoHeightByRows', true, {
      vueData: {
        props: {
          value: 'Текст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\n',
        }
      },
    }),

  ]
} as IComponent;
