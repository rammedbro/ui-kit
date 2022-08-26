import OzAspect from '@/aspect';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzAspect/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzAspect),
    title: 'Текст',
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
  components: { OzAspect },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: '<oz-aspect v-bind="$props"/>',
});
