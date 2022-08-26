import OzRadioGroup from '@/radio-group';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzRadioGroup/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzRadioGroup),
    options: Component.args.options,
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
  components: { OzRadioGroup },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-radio-group v-bind="$props"/>
  `,
});
