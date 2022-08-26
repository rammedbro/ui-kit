import OzDropdown from '@/dropdown';
import { SIZES } from '~/constants/sizes';
import { THEMES } from '@/dropdown/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzDropdown/Stories',
  component: OzDropdown,
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
      { value: 'SO', label: 'Some very very very very very long string' },
    ]
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
  components: { OzDropdown },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbSelectedIndex: null,
  }),
  template: `
    <oz-dropdown v-bind="$props"
                 v-on="argsGrouped.events"
                 :selected-index="sbSelectedIndex"
                 @select="sbSelectedIndex = $event.index"
    />
  `,
});

export const HighlightIndex = Default.bind({});
export const SelectedIndex = Default.bind({});
export const DropdownWith = Default.bind({});
export const DropdownMaxHeight = Default.bind({});
export const MultilineText = Default.bind({});
export const ShowEmptyState = Default.bind({});

sbFillStories(
  [
    HighlightIndex, SelectedIndex, DropdownWith,
    DropdownMaxHeight, MultilineText, ShowEmptyState
  ],
  {
    arStoryArgs: [
      { highlightIndex: 0 },
      { selectedIndex: 0 },
      { dropdownWidth: '250px' },
      { maxHeight: '150px' },
      { dropdownWidth: '250px', multilineText: true },
      { showEmptyState: true }
    ]
  }
);

export const SizeM = Default.bind({});
export const SizeL = Default.bind({});

sbFillStories(
  [null, null, SizeM, SizeL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const PaddingSizeM = Default.bind({});
export const PaddingSizeL = Default.bind({});

sbFillStories(
  [null, null, PaddingSizeM, PaddingSizeL],
  {
    arStoryArgs: Object.values(SIZES).map(paddingSize => ({ paddingSize }))
  }
);

export const ThemeDefault = Default.bind({});
export const ThemeEmpty = Default.bind({});

sbFillStories(
  [ThemeDefault, ThemeEmpty],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme }))
  }
);

export const Multiple = (args, { parameters, argsGrouped }) => ({
  components: { OzDropdown },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbSelectedValues: [],
  }),
  template: `
    <oz-dropdown v-bind="$props"
                 v-on="argsGrouped.events"
                 :selected-values="sbSelectedValues"
                 @select="sbSelectedValues.push($event.option.value)"
    />
  `,
});

export const WithConfirm = Multiple.bind({});
export const WithClean = Multiple.bind({});

sbFillStories(
  [Multiple, WithConfirm, WithClean],
  {
    arStoryArgs: [
      { multiple: true },
      { multiple: true, withConfirm: true },
      { multiple: true, withClean: true },
    ]
  }
);
