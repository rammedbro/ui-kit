import DsToggle from '@/ds-toggle';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/DsToggle/Properties',
  args: sbGetComponentDefaultValues(DsToggle),
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
  components: { DsToggle },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    argsGrouped,
    sbChecked: args.checked || false
  }),
  template: `
    <ds-toggle v-model="sbChecked"
               v-bind="$props">
      {{ argsGrouped.slots.default }}
    </ds-toggle>`,
});
