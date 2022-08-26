import OzPrice from '@/price';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzPrice/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzPrice),
    price: '2500$',
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
  components: { OzPrice },
  props: Object.keys(argsGrouped.props),
  template: '<oz-price v-bind="$props" />',
});
