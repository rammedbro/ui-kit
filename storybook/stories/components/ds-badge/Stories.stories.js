import DsBadge from '@/ds-badge';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { ic_s_status_points_compact as icSStatusPointsCompact } from '@fe-icons';
import { sbFillStories } from '~storybook/utils';
import { THEMES, SIZES } from '@/ds-badge/constants';

export default {
  title: 'Components/DsBadge/Stories',
  component: DsBadge,
  args: {
    label: 'Badge',
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

export const Default = (args, { argsGrouped, parameters }) => ({
  components: { DsBadge },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <ds-badge v-bind="$props"
              v-on="argsGrouped.events" />
  `,
});

export const Size400 = Default.bind({});
export const Size500 = Default.bind({});
export const Size600 = Default.bind({});

sbFillStories(
  [Size400, Size500, Size600],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size })),
  }
);

export const leftGraphic = Default.bind({});
leftGraphic.args = {
  leftGraphic: icSStatusPointsCompact,
};

const ForLongLabel = (args, { argsGrouped, parameters }) => ({
  components: { DsBadge },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbWrapperStyle: {
      width: '120px'
    }
  }),
  template: `
    <div :style="sbWrapperStyle">
      <ds-badge v-bind="$props"
                v-on="argsGrouped.events" />
    </div>
  `,
});

export const LongLabel = ForLongLabel.bind({});
LongLabel.args = {
  label: 'BADGEBADGE',
  leftGraphic: icSStatusPointsCompact,
  theme: THEMES.PROMO_PRIMARY,
  isClickable: true
};

export const ThemeNeutral = Default.bind({});
export const ThemePromoPrimary = Default.bind({});
export const ThemePromoSecondary = Default.bind({});
export const ThemeDiscountPrimary = Default.bind({});
export const ThemeDiscountSecondary = Default.bind({});
export const ThemeNewPrimary = Default.bind({});
export const ThemeNewSecondary = Default.bind({});
export const ThemePremiumPrimary = Default.bind({});
export const ThemePremiumSecondary = Default.bind({});
export const ThemeCreditPrimary = Default.bind({});
export const ThemeCreditSecondary = Default.bind({});
export const ThemeRating = Default.bind({});
// export const ThemeSuperPromo = Default.bind({});

sbFillStories(
  [ThemeNeutral, ThemePromoPrimary, ThemePromoSecondary, ThemeDiscountPrimary, ThemeDiscountSecondary, ThemeNewPrimary, ThemeNewSecondary, ThemePremiumPrimary, ThemePremiumSecondary, ThemeCreditPrimary, ThemeCreditSecondary, ThemeRating],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme })),
    commonArgs: {
      leftGraphic: icSStatusPointsCompact,
      isClickable: true
    }
  }
);

export const Size400Neutral = Default.bind({});
export const Size400PromoPrimary = Default.bind({});
export const Size400PromoSecondary = Default.bind({});
export const Size400DiscountPrimary = Default.bind({});
export const Size400DiscountSecondary = Default.bind({});
export const Size400NewPrimary = Default.bind({});
export const Size400NewSecondary = Default.bind({});
export const Size400PremiumPrimary = Default.bind({});
export const Size400PremiumSecondary = Default.bind({});
export const Size400CreditPrimary = Default.bind({});
export const Size400CreditSecondary = Default.bind({});
export const Size400Rating = Default.bind({});
// export const Size400SuperPromo = Default.bind({});

sbFillStories(
  [Size400Neutral, Size400PromoPrimary, Size400PromoSecondary, Size400DiscountPrimary, Size400DiscountSecondary, Size400NewPrimary, Size400NewSecondary, Size400PremiumPrimary, Size400PremiumSecondary, Size400CreditPrimary, Size400CreditSecondary, Size400Rating],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme })),
    commonArgs: {
      leftGraphic: icSStatusPointsCompact,
      isClickable: true,
      size: SIZES['400']
    }
  }
);

export const Size600Neutral = Default.bind({});
export const Size600PromoPrimary = Default.bind({});
export const Size600PromoSecondary = Default.bind({});
export const Size600DiscountPrimary = Default.bind({});
export const Size600DiscountSecondary = Default.bind({});
export const Size600NewPrimary = Default.bind({});
export const Size600NewSecondary = Default.bind({});
export const Size600PremiumPrimary = Default.bind({});
export const Size600PremiumSecondary = Default.bind({});
export const Size600CreditPrimary = Default.bind({});
export const Size600CreditSecondary = Default.bind({});
export const Size600Rating = Default.bind({});
// export const Siz600SuperPromo = Default.bind({});

sbFillStories(
  [Size600Neutral, Size600PromoPrimary, Size600PromoSecondary, Size600DiscountPrimary, Size600DiscountSecondary, Size600NewPrimary, Size600NewSecondary, Size600PremiumPrimary, Size600PremiumSecondary, Size600CreditPrimary, Size600CreditSecondary, Size600Rating],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme })),
    commonArgs: {
      leftGraphic: icSStatusPointsCompact,
      isClickable: true,
      size: SIZES['600']
    }
  }
);
