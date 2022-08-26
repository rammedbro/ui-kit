import OzProgress from '@/progress';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzProgress/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzProgress),
    percent: 100,
    height: 30,
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
  components: { OzProgress },
  props: Object.keys(argsGrouped.props),
  template: '<oz-progress v-bind="$props" />',
});
