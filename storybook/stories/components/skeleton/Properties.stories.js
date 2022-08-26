import OzSkeleton from '@/skeleton';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzSkeleton/Properties',
  args: sbGetComponentDefaultValues(OzSkeleton),
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
  components: { OzSkeleton },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-skeleton v-bind="$props" />
  `,
});
