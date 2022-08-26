import OzDatePicker from '@/date-picker';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzDatePicker/Properties',
  args: sbGetComponentDefaultValues(OzDatePicker),
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
  components: { OzDatePicker },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-date-picker v-bind="$props" />
  `,
});
