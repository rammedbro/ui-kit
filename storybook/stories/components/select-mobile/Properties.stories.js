import OzSelectMobile from '@/select-mobile';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzSelectMobile/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzSelectMobile),
    options: Component.args.options
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
  components: { OzSelectMobile },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: `
    <oz-select-mobile v-bind="$props">{{ argsGrouped.slots.option }}</oz-select-mobile>
  `,
});
