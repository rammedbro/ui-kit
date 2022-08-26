import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForMultipleValueProp, createScenarioForScopedSlot,
  createScenarioForSingleValueProp
} from '~e2e/app/scenarios/utils';
import { SIZES } from '~/constants/sizes';

const items = [
  { name: 'John Doe', sex: 'Male', age: 42 },
  { name: 'Jane Doe', sex: 'Female', age: 36 },
  { name: 'Rubin Kincade', sex: 'Male', age: 73 },
  { name: 'John Doe', sex: 'Male', age: 42 }
];
const fields = [
  { key: 'name' },
  { key: 'sex' },
  { key: 'age' }
];
const defaultOptions = {
  vueData: {
    props: {
      items,
      fields,
    }
  }
};

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('items', items, defaultOptions),
    createScenarioForSingleValueProp('fields', fields, defaultOptions),
    createScenarioForSingleValueProp('hideHeader', true, defaultOptions),
    createScenarioForSingleValueProp('stickyHeader', true, defaultOptions),
    createScenarioForSingleValueProp('hoverHorizontal', true, defaultOptions),
    createScenarioForSingleValueProp('hoverVertical', true, defaultOptions),
    createScenarioForSingleValueProp('fill', true, defaultOptions),
    createScenarioForMultipleValueProp('size', SIZES, defaultOptions),
    createScenarioForScopedSlot('head(name)', () => 'Head slot for name column', defaultOptions),
    createScenarioForScopedSlot('cell(name)', () => 'Cell slot for sex column', defaultOptions)
  ]
} as IComponent;
