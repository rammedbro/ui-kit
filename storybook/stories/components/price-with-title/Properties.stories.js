import OzPriceWithTitle from '@/price-with-title';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzPriceWithTitle/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzPriceWithTitle),
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
  components: { OzPriceWithTitle },
  props: Object.keys(argsGrouped.props),
  template: '<oz-price-with-title v-bind="$props" />',
});
