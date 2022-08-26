import OzAvatar from '@/avatar';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzAvatar/Properties',
  args: sbGetComponentDefaultValues(OzAvatar),
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
  components: { OzAvatar },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-avatar v-bind="$props" />
  `,
});
