import DsRadio from '@/ds-radio';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/DsRadio/Properties',
  args: sbGetComponentDefaultValues(DsRadio),
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
  components: { DsRadio },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    argsGrouped,
    sbChecked: args.checked || false
  }),
  template: `
    <ds-radio v-model="sbChecked"
              v-bind="$props">
    {{ argsGrouped.slots.default }}
    </ds-radio>`,
});
