import OzDisclosure from '@/disclosure';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzDisclosure/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzDisclosure),
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
  components: { OzDisclosure },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: '<oz-disclosure v-bind="$props"/>',
});
