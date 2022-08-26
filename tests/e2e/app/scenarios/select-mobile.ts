import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { SIZES } from '~/constants/sizes';

const SIZES_SELECT_MOBILE = Object.values(SIZES).filter((item) => item !== 'xs' && item !== 's');

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

const filterBy = (option, label, search) => {
  return (label || '').toUpperCase().indexOf(search.toUpperCase()) > -1;
};

const defaultOptions = {
  vueData: {
    props: {
      options: OPTIONS,
    }
  }
};

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('options', OPTIONS),
    createScenarioForMultipleValueProp('size', SIZES_SELECT_MOBILE, defaultOptions),
    createScenarioForSingleValueProp('loading', true, defaultOptions),
    createScenarioForSingleValueProp('value', OPTIONS[0].value, defaultOptions),
    createScenarioForSingleValueProp('disabled', true, defaultOptions),
    createScenarioForSingleValueProp('placeholder', 'Placeholder', defaultOptions),
    createScenarioForSingleValueProp('filterable', false, {
      ...defaultOptions,
    }),
    createScenarioForSingleValueProp('labelKey', 'value', defaultOptions),
    createScenarioForSingleValueProp('indexKey', 'label', defaultOptions),
    createScenarioForSingleValueProp('filterBy', filterBy, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
  ],
} as IComponent;
