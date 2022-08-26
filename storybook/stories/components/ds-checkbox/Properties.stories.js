import DsCheckbox from '@/ds-checkbox';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/DsCheckbox/Properties',
  args: sbGetComponentDefaultValues(DsCheckbox),
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
  components: { DsCheckbox },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    argsGrouped,
    sbChecked: args.checked || false
  }),
  template: `
    <ds-checkbox v-model="sbChecked"
                 v-bind="$props">
    </ds-checkbox>`,
});
