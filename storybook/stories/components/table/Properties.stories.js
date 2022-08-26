import OzTable from '@/table';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzTable/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzTable),
    fields: Component.args.fields,
    items: Component.args.items
  },
  parameters: {
    viewMode: 'docs',
    controls: {
      disable: true,
    },
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

export const Properties = (args, { argsGrouped }) => ({
  components: { OzTable },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-table v-bind="$props" />
  `,
});
