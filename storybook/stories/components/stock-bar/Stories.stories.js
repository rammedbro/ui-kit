import OzStockBar from '@/stock-bar';
import { THEMES } from '@/stock-bar/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzStockBar/Stories',
  component: OzStockBar,
  args: {
    text: 'Осталось 25 шт.',
    percent: 80,
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    docs: {
      page: DocsTemplate,
    },
  },
};

export const Default = (args, { parameters, argsGrouped }) => ({
  components: { OzStockBar },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-stock-bar v-bind="$props"
                  v-on="argsGrouped.events" />
  `,
});

export const ThemeS = Default.bind({});
export const ThemeM = Default.bind({});

sbFillStories(
  [ThemeS, ThemeM],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme }))
  }
);

export const FewProduct = Default.bind({});
FewProduct.args = {
  percent: 20,
  text: 'Осталось 20 шт.',
  textColor: 'ozAccentAlert'
};

export const NoProduct = Default.bind({});
NoProduct.args = {
  percent: 0,
  text: 'Закончились по скидке',
  textColor: 'ozTextSecondary'
};

export const IsFullWidth = Default.bind({});
IsFullWidth.args = {
  percent: 50,
  text: 'Осталось 25 шт.',
  isFullWidth: true,
};

export const BarColors = Default.bind({});
BarColors.args = {
  percent: 25,
  text: 'Осталось 25 шт.',
  stockBarColor: '#798BF9',
  stockBarBackgroundColor: '#798BF9',
  stockBarBackgroundAlpha: 0.4,
};
