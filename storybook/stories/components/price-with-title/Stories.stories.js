import OzPriceWithTitle from '@/price-with-title';
import { THEMES } from '@/price-with-title/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzPriceWithTitle/Stories',
  component: OzPriceWithTitle,
  args: {
    price: '2500$',
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
  components: { OzPriceWithTitle },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: '<oz-price-with-title v-bind="$props" v-on="argsGrouped.events"/>'
});

export const WithTitle = Default.bind({});
WithTitle.args = {
  title: '× 24 мес'
};

export const Color = Default.bind({});
Color.args = {
  title: '× 24 мес',
  priceColor: 'ozTextSecondary',
  titleColor: 'ozTextPrimary',
};

export const GradientBg = Default.bind({});
GradientBg.args = {
  title: '× 24 мес',
  gradientBackgroundColor: {
    startColor: '#FFB74B',
    endColor: '#FF2F6D'
  }
};

export const StrikethroughColor = Default.bind({});
StrikethroughColor.args = {
  title: '12000',
  strikethroughColor: 'ozAccentAlert'
};

export const ThemeL = Default.bind({});
export const ThemeML = Default.bind({});
export const ThemeM = Default.bind({});
export const ThemeS = Default.bind({});
export const ThemeXS = Default.bind({});

sbFillStories(
  [ThemeL, ThemeML, ThemeM, ThemeS, ThemeXS],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme }))
  }
);

export const WithTitleThemeL = Default.bind({});
export const WithTitleThemeML = Default.bind({});
export const WithTitleThemeM = Default.bind({});
export const WithTitleThemeS = Default.bind({});
export const WithTitleThemeXS = Default.bind({});

sbFillStories(
  [WithTitleThemeL, WithTitleThemeML, WithTitleThemeM, WithTitleThemeS, WithTitleThemeXS],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme, title: '× 24 мес' }))
  }
);
