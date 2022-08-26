import DsCounter from '@/ds-counter';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/DsCounter/Properties',
  args: sbGetComponentDefaultValues(DsCounter),
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
  components: { DsCounter },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: '<ds-counter v-bind="$props"/>'
});
