import { IComponent } from '~e2e/app/scenarios/types';
import { SIZES } from '~/constants/sizes';
import { createCustomScenario, createScenarioForMultipleValueProp } from '~e2e/app/scenarios/utils';

const SIZES_SELECT = Object.values(SIZES).filter((item) => item !== 'xs' && item !== 's');

const OPTIONS = [
  {
    label: '256915, Челябинская область, город Серпухов, проезд Ладыгина, 82',
    value: '256915',
  },
  {
    label: '799509, Тверская область, город Сергиев Посад, спуск Бухарестская, 26',
    value: '799509',
  },
  {
    label: '223079, Томская область, город Наро-Фоминск, бульвар Косиора, 46',
    value: '223079',
  },
];

const renderFn = (props) => (h, component, components) => h(
  'div',
  {
    style: {
      width: '400px',
    }
  },
  [
    h(
      components['OzSelect'],
      { props }
    )
  ]
);

const filterBy = (option, label, search) => {
  return (label || '').toUpperCase().indexOf(search.toUpperCase()) > -1;
};

const defaultProps = {
  options: OPTIONS,
  autofocus: true
};

export default {
  critical: true,
  scenarios: [
    createCustomScenario('prop', 'options', renderFn(defaultProps)),
    createCustomScenario('prop', 'loading', renderFn({
      ...defaultProps,
      loading: true
    })),
    createCustomScenario('prop', 'disabled', renderFn({
      ...defaultProps,
      disabled: true
    })),
    createCustomScenario('prop', 'filterable', renderFn({
      ...defaultProps,
      filterable: false
    })),
    createCustomScenario('prop', 'labelKey', renderFn({
      ...defaultProps,
      labelKey: 'value'
    })),
    createCustomScenario('prop', 'indexKey', renderFn({
      ...defaultProps,
      indexKey: 'label'
    })),
    createCustomScenario('prop', 'filterBy', renderFn({
      ...defaultProps,
      filterBy,
      suites: ['ssr']
    })),
    createScenarioForMultipleValueProp('size', SIZES_SELECT, {
      vueData: {
        props: {
          ...defaultProps,
          placeholder: 'Placeholder'
        }
      },
      description: 'with placeholder'
    }),
    createScenarioForMultipleValueProp('size', SIZES_SELECT, {
      vueData: {
        props: defaultProps
      },
      description: 'without placeholder'
    })
  ]
} as IComponent;
