import OzSelect from '@/select';
import { SIZES } from '~/constants/sizes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzSelect/Stories',
  component: OzSelect,
  args: {
    options: [
      { value: 'AU', label: 'Australia' },
      { value: 'CA', label: 'Canada' },
      { value: 'CN', label: 'China' },
      { value: 'DE', label: 'Germany' },
      { value: 'JP', label: 'Japan' },
      { value: 'MX', label: 'Mexico' },
      { value: 'CH', label: 'Switzerland' },
      { value: 'US', label: 'United States' },
      { value: 'VR', label: 'Very very very very very very long string' },
    ],
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    docs: {
      page: DocsTemplate,
    },
  },
};

export const Default = (args, { parameters, argsGrouped }) => ({
  components: { OzSelect },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbValue: null,
  }),
  template: `
    <oz-select v-model="sbValue"
               v-bind="$props"
               v-on="argsGrouped.events" />
  `,
});

export const SizeM = Default.bind({});
export const SizeL = Default.bind({});
export const SizeXL = Default.bind({});
export const SizeXXL = Default.bind({});

sbFillStories(
  [null, null, SizeM, SizeL, SizeXL, SizeXXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const Errors = Default.bind({});
export const Loading = Default.bind({});
export const DropdownWith = Default.bind({});
export const DropdownMaxHeight = Default.bind({});
export const Disabled = Default.bind({});
export const MultilineText = Default.bind({});
export const OnlySearchResults = Default.bind({});
export const EmptyMessage = Default.bind({});
export const NoDrop = Default.bind({});
export const Placeholder = Default.bind({});
export const PlaceholderXL = Default.bind({});

sbFillStories(
  [
    Errors, Loading, DropdownWith, DropdownMaxHeight,
    Disabled, MultilineText, OnlySearchResults,
    EmptyMessage, NoDrop, Placeholder, PlaceholderXL
  ],
  {
    arStoryArgs: [
      { errors: ['Ошибка 1', 'Ошибка 2'] },
      { loading: true },
      { dropdownWidth: '250px' },
      { dropdownMaxHeight: '150px' },
      { disabled: true },
      { multilineText: true, dropdownWidth: '250px' },
      { onlySearchResults: true },
      { noEmptyMessage: false },
      { noDrop: true },
      { placeholder: 'Placeholder' },
      { placeholder: 'Placeholder', size: 'xl' }
    ]
  }
);

export const Multiple = (args, { parameters }) => ({
  components: { OzSelect },
  props: Object.keys(parameters.args),
  data: () => ({
    sbValue: [],
  }),
  template: `
    <oz-select v-model="sbValue"
               v-bind="$props" />
  `,
});

Multiple.args = {
  multiple: true,
  toggleOption: true,
  closeOnSelect: false,
  placeholder: 'Placeholder'
};

export const MultipleXL = (args, { parameters }) => ({
  components: { OzSelect },
  props: Object.keys(parameters.args),
  data: () => ({
    sbValue: [],
  }),
  template: `
    <oz-select v-model="sbValue"
               v-bind="$props" />
  `,
});

MultipleXL.args = {
  multiple: true,
  toggleOption: true,
  closeOnSelect: false,
  size: 'xl',
  placeholder: 'Placeholder'
};

export const MultipleWithConfirm = Multiple.bind({});
export const MultipleWithClean = Multiple.bind({});
export const MultipleClearValuesOnDelete = Multiple.bind({});

sbFillStories(
  [MultipleWithConfirm, MultipleWithClean, MultipleClearValuesOnDelete],
  {
    arStoryArgs: [
      { withConfirm: true },
      { withClean: true },
      { clearMultipleValuesOnDelete: true },
    ],
    commonArgs: {
      ...Multiple.args
    }
  }
);

export const Taggable = (args, { parameters }) => ({
  components: { OzSelect },
  props: Object.keys(parameters.args),
  data: () => ({
    sbValue: [],
    sbOptions: [
      { value: 'AU', label: 'Australia' },
      { value: 'CA', label: 'Canada' },
      { value: 'CN', label: 'China' },
      { value: 'DE', label: 'Germany' },
    ]
  }),
  template: `
    <oz-select v-model="sbValue"
               v-bind="$props"
               :options="sbOptions"
               @option:created="sbOptions.push($event)" />
  `,
});

Taggable.args = {
  taggable: true,
};
