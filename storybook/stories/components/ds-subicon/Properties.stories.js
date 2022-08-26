import DsSubicon from '@/ds-subicon';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/DsSubicon/Properties',
  args: sbGetComponentDefaultValues(DsSubicon),
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
  components: { DsSubicon },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: `
    <ds-subicon v-bind="$props"/>
  `,
});
