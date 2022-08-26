import OzLoader from '@/loader';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzLoader/Properties',
  args: sbGetComponentDefaultValues(OzLoader),
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
  components: { OzLoader },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-loader v-bind="$props" />
  `,
});
