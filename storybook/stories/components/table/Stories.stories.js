import OzTable from '@/table';
import { SIZES } from '~/constants/sizes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzTable/Stories',
  component: OzTable,
  args: {
    fields: [
      { key: 'name' },
      { key: 'sex' },
      { key: 'age' }
    ],
    items: [
      { name: 'John Doe', sex: 'Male', age: 42 },
      { name: 'Jane Doe', sex: 'Female', age: 36 },
      { name: 'Rubin Kincade', sex: 'Male', age: 73 },
      { name: 'John Doe', sex: 'Male', age: 42 }
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
  components: { OzTable },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-table v-bind="$props"
              v-on="argsGrouped.events" />
  `,
});

export const HideHeader = Default.bind({});
HideHeader.args = {
  hideHeader: true,
};

export const StickyHeader = Default.bind({});
StickyHeader.args = {
  stickyHeader: true,
};

export const HoverHorizontal = Default.bind({});
HoverHorizontal.args = {
  hoverHorizontal: true,
};

export const HoverVertical = Default.bind({});
HoverVertical.args = {
  hoverVertical: true,
};

export const Fill = Default.bind({});
Fill.args = {
  fill: true,
};

export const SizeM = Default.bind({});
export const SizeL = Default.bind({});

sbFillStories(
  [null, null, SizeM, SizeL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const SlotHead = (args, { parameters }) => ({
  components: { OzTable },
  props: Object.keys(parameters.args),
  template: `
    <oz-table v-bind="$props">
    <template v-slot:head(sex)>
      Head slot changed
    </template>
    </oz-table>
  `,
});

export const SlotCell = (args, { parameters }) => ({
  components: { OzTable },
  props: Object.keys(parameters.args),
  template: `
    <oz-table v-bind="$props">
    <template v-slot:cell(name)>
      Cell slot changed
    </template>
    </oz-table>
  `,
});
