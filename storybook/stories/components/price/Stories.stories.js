import OzPrice from '@/price';
import { THEMES } from '@/price/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';
import { ic_m_status_points as icMStatusPoints } from '@fe-icons';

export default {
  title: 'Components/OzPrice/Stories',
  component: OzPrice,
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
  components: { OzPrice },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: '<oz-price v-bind="$props" v-on="argsGrouped.events"/>'
});

export const OriginalPrice = Default.bind({});
OriginalPrice.args = {
  originalPrice: '3500$'
};

export const Color = Default.bind({});
Color.args = {
  originalPrice: '3500$',
  priceColor: 'ozTextSecondary',
  originalPriceColor: 'ozTextSecondary',
};

export const Image = Default.bind({});
Image.args = {
  image: 'https://cdn1.ozone.ru/s3/cms/0c/ta4/wc300/672_672_1.jpg',
};

export const ImageTintColor = Default.bind({});
ImageTintColor.args = {
  image: icMStatusPoints,
  imageTintColor: 'ozAccentAlert'
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

export const OriginalPriceThemeL = Default.bind({});
export const OriginalPriceThemeML = Default.bind({});
export const OriginalPriceThemeM = Default.bind({});
export const OriginalPriceThemeS = Default.bind({});
export const OriginalPriceThemeXS = Default.bind({});

sbFillStories(
  [OriginalPriceThemeL, OriginalPriceThemeML, OriginalPriceThemeM, OriginalPriceThemeS, OriginalPriceThemeXS],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme, originalPrice: '3500$' }))
  }
);
