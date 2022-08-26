import OzSelect from '@/select';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzSelect/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzSelect),
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
  components: { OzSelect },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    argsGrouped,
    sbValue: null,
  }),
  template: `
    <oz-select v-model="sbValue" v-bind="$props"/>
  `,
});
