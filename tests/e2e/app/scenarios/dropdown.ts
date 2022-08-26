import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp, createCustomScenario } from '~e2e/app/scenarios/utils';
import { SIZES } from '~/constants/sizes';
import { THEMES } from '@/dropdown/constants';

const SIZES_DROPDOWN = Object.values(SIZES).filter((item) => (item === 'm' || item === 'l' || item === 'xl' || item === 'xxl'));
const SIZES_PUDDING_DROPDOWN = Object.values(SIZES).filter((item) => (item === 'm' || item === 'l'));

const options = [
  { value: 'AU', label: 'Australia' },
  { value: 'CA', label: 'Canada' },
  { value: 'CN', label: 'China' },
  { value: 'DE', label: 'Germany' },
  { value: 'JP', label: 'Japan' },
  { value: 'MX', label: 'Mexico' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'US', label: 'United States' },
  { value: 'SO', label: 'Some very very very very very long string' },
];

const defaultOptions = {
  vueData: {
    props: {
      options: options,
    }
  }
};

const renderFn = (props) => (h, component, components) => h(
  components['OzDropDown'],
  {
    props,
    style: {
      border: '1px solid #ff00ff',
    }
  }
);

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('options', options),
    createScenarioForSingleValueProp('highlightIndex', 3, defaultOptions),
    createScenarioForSingleValueProp('selectedIndex', 3, defaultOptions),

    createScenarioForSingleValueProp('selectedValues', ['JP', 'AU'], {
      vueData: {
        props: {
          options: options,
          multiple: true,
        }
      }
    }),
    createScenarioForSingleValueProp('multiple', true, {
      vueData: {
        props: {
          options: options,
          selectedValues: ['JP', 'AU'],
        }
      }
    }),
    createScenarioForSingleValueProp('multilineText', true, {
      vueData: {
        props: {
          options: options,
          dropdownWidth: '150px'
        }
      }
    }),
    createScenarioForSingleValueProp('withConfirm', true, defaultOptions),
    createScenarioForSingleValueProp('withConfirm', true, {
      vueData: {
        props: {
          options: options,
          multiple: true,
          selectedValues: ['JP', 'AU'],
        }
      },
      description: 'with selectedValues',
    }),
    createScenarioForSingleValueProp('withClean', true, defaultOptions),
    createScenarioForSingleValueProp('withClean', true, {
      vueData: {
        props: {
          options: options,
          multiple: true,
          selectedValues: ['JP', 'AU'],
        }
      },
      description: 'with selectedValues',
    }),
    createScenarioForMultipleValueProp('size', SIZES_DROPDOWN, defaultOptions),
    createScenarioForSingleValueProp('showEmptyState', true),
    createScenarioForSingleValueProp('labelKey', 'value', defaultOptions),
    createScenarioForMultipleValueProp('paddingSize', SIZES_PUDDING_DROPDOWN, defaultOptions),
    createScenarioForMultipleValueProp('theme', THEMES, defaultOptions),
    createScenarioForSingleValueProp('dropdownWidth', '250px', defaultOptions),
    createScenarioForSingleValueProp('maxHeight', '150px', defaultOptions),
    createScenarioForSingleValueProp('optionFieldKey', 'key', {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('wrap', true, {
      vueData: {
        props: {
          options: options,
          dropdownWidth: '150px'
        }
      }
    }),
    createCustomScenario('prop', 'borderRadius', renderFn({ options, borderRadius: true })),
  ]
} as IComponent;
