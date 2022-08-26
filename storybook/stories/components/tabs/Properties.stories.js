import OzTabs from '@/tabs';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzTabs/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzTabs),
    tabs: Component.args.tabs
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
  components: { OzTabs },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-tabs v-bind="$props"/>
  `,
});
