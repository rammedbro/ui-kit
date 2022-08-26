import OzCheckbox from '@/checkbox';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzCheckbox/Properties',
  args: sbGetComponentDefaultValues(OzCheckbox),
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
  components: { OzCheckbox },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: `
    <oz-checkbox v-bind="$props">
    {{ argsGrouped.slots.default }}
    </oz-checkbox>`,
});
