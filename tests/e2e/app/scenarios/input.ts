import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForMultipleValueProp,
  createScenarioForSingleValueProp,
} from '~e2e/app/scenarios/utils';
import { TYPE } from '@/input/constants';
import { SIZES } from '~/constants/sizes';
import { TestMIcon } from '../icons';

const SIZES_INPUT = Object.values(SIZES).filter((item) => (item !== 'xs'));

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('mask', '+7 (###) ###-##-##', {
      vueData: {
        props: {
          value: '79009009090',
        }
      },
    }),
    createScenarioForMultipleValueProp('type', TYPE),
    createScenarioForMultipleValueProp('value', [
      '', 'Текст', '0', 0, -1, 1234567890,
    ]),
    createScenarioForMultipleValueProp('value', [
      '', 'Текст', '0', 0, -1, 1234567890,
    ], {
      description: 'type: \'text\' + placeholder',
      vueData: {
        props: {
          placeholder: 'text placeholder'
        }
      },
    }),
    createScenarioForMultipleValueProp('value', [
      '', 'Текст', '0', 0, -1, 1234567890,
    ], {
      description: 'type: \'number\' + placeholder',
      vueData: {
        props: {
          type: 'number',
          placeholder: 'number placeholder'
        }
      },
    }),
    createScenarioForSingleValueProp('name', 'Input', {
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('autofocus', true, {
      vueData: {
        props: {
          value: '1234567890',
        }
      }
    }),
    createScenarioForSingleValueProp('maxLength', '8', {
      vueData: {
        props: {
          value: '1234567890',
        }
      },
    }),
    createScenarioForSingleValueProp('insideLabel', 'label'),
    createScenarioForSingleValueProp('placeholder', 'placeholder'),
    createScenarioForMultipleValueProp('size', SIZES_INPUT, {
      vueData: {
        props: {
          value: '1234567890',
        }
      },
    }),
    createScenarioForMultipleValueProp('size', SIZES_INPUT, {
      description: 'with value and icon',
      vueData: {
        props: {
          icon: TestMIcon,
          value: '1234567890'
        }
      },
    }),
    createScenarioForMultipleValueProp('size', SIZES_INPUT, {
      description: 'with value and icon auto-fill',
      vueData: {
        props: {
          icon: TestMIcon,
          value: '1234567890',
          autoIconSize: true,
        }
      },
    }),
    createScenarioForMultipleValueProp('size', SIZES_INPUT, {
      description: 'with placeholder',
      vueData: {
        props: {
          placeholder: 'placeholder'
        }
      },
    }),
    createScenarioForMultipleValueProp('size', SIZES_INPUT, {
      description: 'with value and placeholder',
      vueData: {
        props: {
          placeholder: 'placeholder',
          value: '1234567890'
        }
      },
    }),
    createScenarioForSingleValueProp('loading', true, {
      vueData: {
        props: {
          value: '1234567890',
        }
      },
    }),
    createScenarioForSingleValueProp('icon', TestMIcon, {
      vueData: {
        props: {
          value: '1234567890',
        }
      },
    }),
  ]
} as IComponent;
