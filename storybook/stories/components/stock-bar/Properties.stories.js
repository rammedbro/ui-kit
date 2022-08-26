import OzStockBar from '@/stock-bar';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzStockBar/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzStockBar),
    text: 'Осталось 25 шт.',
    percent: 80,
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
  components: { OzStockBar },
  props: Object.keys(argsGrouped.props),
  template: '<oz-stock-bar v-bind="$props" />',
});
