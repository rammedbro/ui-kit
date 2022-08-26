import DsLoader from '@/ds-loader';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/DsLoader/Properties',
  args: sbGetComponentDefaultValues(DsLoader),
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
  components: { DsLoader },
  props: Object.keys(argsGrouped.props),
  template: `
    <ds-loader v-bind="$props" />
  `,
});
