import DsButton from '@/ds-button';
import { SIZES, THEMES } from '@/ds-button/constants.js';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import {
  ic_s_home as icSHome,
  ic_m_home as icMHome,
  ic_m_home_and_garden as icMHomeAndGarden
} from '@fe-icons';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/DsButton/Stories',
  component: DsButton,
  args: {
    title: 'Button',
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
  components: { DsButton },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <ds-button v-bind="$props"
               v-on="argsGrouped.events" />
  `,
});

const DefaultWithBackground = (args, { parameters, argsGrouped }) => ({
  components: { DsButton },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbWrapperStyle: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100px',
      backgroundColor: '#7A7F85'
    }
  }),
  template: `
    <div :style="sbWrapperStyle">
      <ds-button v-bind="$props"
                 v-on="argsGrouped.events" />
    </div>
  `,
});

const DefaultWithBlackBackground = (args, { parameters, argsGrouped }) => ({
  components: { DsButton },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbWrapperStyle: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100px',
      backgroundColor: '#000000'
    }
  }),
  template: `
    <div :style="sbWrapperStyle">
      <ds-button v-bind="$props"
                 v-on="argsGrouped.events" />
    </div>
  `,
});

export const leftIcon = Default.bind({});
leftIcon.args = {
  leftIcon: icMHome,
};

export const rightIcon = Default.bind({});
rightIcon.args = {
  rightIcon: icMHomeAndGarden,
};

export const Subtitle = Default.bind({});
Subtitle.args = {
  rightIcon: icMHomeAndGarden,
  leftIcon: icMHome,
  subtitle: 'Subtitle'
};

export const Label = Default.bind({});
Label.args = {
  rightIcon: icMHomeAndGarden,
  leftIcon: icMHome,
  label: 'Label'
};

export const LabelWithBackground = Default.bind({});
LabelWithBackground.args = {
  rightIcon: icMHomeAndGarden,
  leftIcon: icMHome,
  subtitle: 'Subtitle',
  label: 'Label',
};

export const Counter = Default.bind({});
Counter.args = {
  rightIcon: icMHomeAndGarden,
  leftIcon: icMHome,
  subtitle: 'Subtitle',
  label: 'Label',
  count: 2,
};

export const FillContainer = Default.bind({});
FillContainer.args = {
  rightIcon: icMHomeAndGarden,
  leftIcon: icMHome,
  subtitle: 'Subtitle',
  label: 'Label',
  fill: true,
  size: SIZES['600'],
  count: 2,
};

export const Size400 = Default.bind({});
export const Size500 = Default.bind({});
export const Size600 = Default.bind({});
export const Size700 = Default.bind({});

sbFillStories(
  [Size400, Size500, Size600, Size700],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size })),
    commonArgs: {
      rightIcon: icMHomeAndGarden,
      leftIcon: icMHome,
      subtitle: 'Subtitle',
      label: 'Label',
      count: 2,
    }
  }
);

Size400.args = {
  leftIcon: icSHome,
  rightIcon: icMHomeAndGarden,
  subtitle: 'Subtitle',
  label: 'Label',
  count: 2,
  size: SIZES['400'],
};

export const Size400Loader = Default.bind({});
export const Size500Loader = Default.bind({});
export const Size600Loader = Default.bind({});
export const Size700Loader = Default.bind({});

sbFillStories(
  [Size400Loader, Size500Loader, Size600Loader, Size700Loader],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size })),
    commonArgs: {
      rightIcon: icMHomeAndGarden,
      leftIcon: icMHome,
      subtitle: 'Subtitle',
      label: 'Label',
      count: 2,
      loading: true,
    }
  }
);

export const Size400Square = Default.bind({});
export const Size500Square = Default.bind({});
export const Size600Square = Default.bind({});
export const Size700Square = Default.bind({});

sbFillStories(
  [Size400Square, Size500Square, Size600Square, Size700Square],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size })),
    commonArgs: {
      rightIcon: icMHomeAndGarden,
      subtitle: 'Subtitle',
      label: 'Label',
      isSquare: true,
    }
  }
);

Size400Square.args = {
  leftIcon: icSHome,
  rightIcon: icMHomeAndGarden,
  subtitle: 'Subtitle',
  label: 'Label',
  isSquare: true,
  size: SIZES['400'],
};

export const LoaderSize400Square = Default.bind({});
export const LoaderSize500Square = Default.bind({});
export const LoaderSize600Square = Default.bind({});
export const LoaderSize700Square = Default.bind({});

sbFillStories(
  [LoaderSize400Square, LoaderSize500Square, LoaderSize600Square, LoaderSize700Square],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size })),
    commonArgs: {
      rightIcon: icMHomeAndGarden,
      subtitle: 'Subtitle',
      label: 'Label',
      isSquare: true,
      loading: true,
    }
  }
);

export const ThemeActionPrimary = Default.bind({});
export const ThemeActionSecondary = Default.bind({});
export const ThemeStaticDarkPrimary = Default.bind({});
export const ThemeStaticDarkSecondary = DefaultWithBackground.bind({});
export const ThemeStaticLightPrimary = DefaultWithBackground.bind({});
export const ThemeStaticLightSecondary = DefaultWithBackground.bind({});
export const ThemeAccentPrimary = Default.bind({});
export const ThemeNeutralPrimary = Default.bind({});
export const ThemeNeutralSecondary = Default.bind({});
export const ThemeNegativeSecondary = Default.bind({});
export const ThemeVideoPrimary = Default.bind({});
export const ThemeTransparent = Default.bind({});

sbFillStories(
  [ThemeActionPrimary, ThemeActionSecondary, ThemeStaticDarkPrimary, ThemeStaticDarkSecondary,
    ThemeStaticLightPrimary, ThemeStaticLightSecondary, ThemeAccentPrimary,
    ThemeNeutralPrimary, ThemeNeutralSecondary, ThemeNegativeSecondary, ThemeVideoPrimary, ThemeTransparent],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme })),
    commonArgs: {
      leftIcon: icMHome,
      rightIcon: icMHomeAndGarden,
      subtitle: 'Subtitle',
      label: 'Label',
      size: SIZES['600'],
      count: 2,
    }
  }
);

export const LoaderActionPrimary = Default.bind({});
export const LoaderActionSecondary = Default.bind({});
export const LoaderStaticDarkPrimary = Default.bind({});
export const LoaderStaticDarkSecondary = DefaultWithBackground.bind({});
export const LoaderStaticLightPrimary = DefaultWithBackground.bind({});
export const LoaderStaticLightSecondary = DefaultWithBackground.bind({});
export const LoaderAccentPrimary = Default.bind({});
export const LoaderNeutralPrimary = Default.bind({});
export const LoaderNeutralSecondary = Default.bind({});
export const LoaderNegativeSecondary = Default.bind({});
export const LoaderVideoPrimary = Default.bind({});
export const LoaderTransparent = Default.bind({});

sbFillStories(
  [LoaderActionPrimary, LoaderActionSecondary, LoaderStaticDarkPrimary, LoaderStaticDarkSecondary, LoaderStaticLightPrimary,
    LoaderStaticLightSecondary, LoaderAccentPrimary, LoaderNeutralPrimary, LoaderNeutralSecondary, LoaderNegativeSecondary,
    LoaderVideoPrimary, LoaderTransparent],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme })),
    commonArgs: {
      leftIcon: icMHome,
      rightIcon: icMHomeAndGarden,
      subtitle: 'Subtitle',
      label: 'Label',
      size: SIZES['600'],
      count: 2,
      loading: true
    }
  }
);

const THEMES_DISABLE_WRAPPER = [
  'actionSecondary',
  'staticDarkPrimary',
  'staticLightPrimary',
  'negativeSecondary',
  'accentSecondary'
];

export const ThemeActionSecondaryDisableWrapper = Default.bind({});
export const ThemeStaticDarkPrimaryDisableWrapper = DefaultWithBlackBackground.bind({});
export const ThemeStaticLightPrimaryDisableWrapper = DefaultWithBackground.bind({});
export const ThemeNegativeSecondaryDisableWrapper = Default.bind({});
export const ThemeAccentSecondaryDisableWrapper = Default.bind({});

sbFillStories(
  [ThemeActionSecondaryDisableWrapper, ThemeStaticDarkPrimaryDisableWrapper, ThemeStaticLightPrimaryDisableWrapper,
    ThemeNegativeSecondaryDisableWrapper, ThemeAccentSecondaryDisableWrapper],
  {
    arStoryArgs: Object.values(THEMES_DISABLE_WRAPPER).map(theme => ({ theme })),
    commonArgs: {
      leftIcon: icMHome,
      rightIcon: icMHomeAndGarden,
      subtitle: 'Subtitle',
      label: 'Label',
      size: SIZES['600'],
      count: 2,
      disableWrapper: true
    }
  }
);

export const LoaderActionSecondaryDisableWrapper = Default.bind({});
export const LoaderStaticDarkPrimaryDisableWrapper = DefaultWithBlackBackground.bind({});
export const LoaderStaticLightPrimaryDisableWrapper = DefaultWithBackground.bind({});
export const LoaderNegativeSecondaryDisableWrapper = Default.bind({});
export const LoaderAccentSecondaryDisableWrapper = Default.bind({});

sbFillStories(
  [LoaderActionSecondaryDisableWrapper, LoaderStaticDarkPrimaryDisableWrapper, LoaderStaticLightPrimaryDisableWrapper,
    LoaderNegativeSecondaryDisableWrapper, LoaderAccentSecondaryDisableWrapper],
  {
    arStoryArgs: Object.values(THEMES_DISABLE_WRAPPER).map(theme => ({ theme })),
    commonArgs: {
      leftIcon: icMHome,
      rightIcon: icMHomeAndGarden,
      subtitle: 'Subtitle',
      label: 'Label',
      size: SIZES['600'],
      count: 2,
      disableWrapper: true,
      loading: true
    }
  }
);

export const ThemeActionPrimarySquare = Default.bind({});
export const ThemeActionSecondarySquare = Default.bind({});
export const ThemeStaticDarkPrimarySquare = Default.bind({});
export const ThemeStaticDarkSecondarySquare = DefaultWithBackground.bind({});
export const ThemeStaticLightPrimarySquare = DefaultWithBackground.bind({});
export const ThemeStaticLightSecondarySquare = DefaultWithBackground.bind({});
export const ThemeAccentPrimarySquare = Default.bind({});
export const ThemeNeutralPrimarySquare = Default.bind({});
export const ThemeNeutralSecondarySquare = Default.bind({});
export const ThemeNegativeSecondarySquare = Default.bind({});
export const ThemeVideoPrimarySquare = Default.bind({});
export const ThemeTransparentSquare = Default.bind({});

sbFillStories(
  [ThemeActionPrimarySquare, ThemeActionSecondarySquare, ThemeStaticDarkPrimarySquare, ThemeStaticDarkSecondarySquare,
    ThemeStaticLightPrimarySquare, ThemeStaticLightSecondarySquare, ThemeAccentPrimarySquare,
    ThemeNeutralPrimarySquare, ThemeNeutralSecondarySquare, ThemeNegativeSecondarySquare, ThemeVideoPrimarySquare, ThemeTransparentSquare],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme })),
    commonArgs: {
      leftIcon: icMHome,
      rightIcon: icMHomeAndGarden,
      subtitle: 'Subtitle',
      label: 'Label',
      size: SIZES['600'],
      isSquare: true,
      count: 2,
    }
  }
);

export const LoaderActionPrimarySquare = Default.bind({});
export const LoaderActionSecondarySquare = Default.bind({});
export const LoaderStaticDarkPrimarySquare = Default.bind({});
export const LoaderStaticDarkSecondarySquare = DefaultWithBackground.bind({});
export const LoaderStaticLightPrimarySquare = DefaultWithBackground.bind({});
export const LoaderStaticLightSecondarySquare = DefaultWithBackground.bind({});
export const LoaderAccentPrimarySquare = Default.bind({});
export const LoaderNeutralPrimarySquare = Default.bind({});
export const LoaderNeutralSecondarySquare = Default.bind({});
export const LoaderNegativeSecondarySquare = Default.bind({});
export const LoaderVideoPrimarySquare = Default.bind({});
export const LoaderTransparentSquare = Default.bind({});

sbFillStories(
  [LoaderActionPrimarySquare, LoaderActionSecondarySquare, LoaderStaticDarkPrimarySquare, LoaderStaticDarkSecondarySquare, LoaderStaticLightPrimarySquare,
    LoaderStaticLightSecondarySquare, LoaderAccentPrimarySquare, LoaderNeutralPrimarySquare, LoaderNeutralSecondarySquare, LoaderNegativeSecondarySquare,
    LoaderVideoPrimarySquare, LoaderTransparentSquare],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme })),
    commonArgs: {
      leftIcon: icMHome,
      rightIcon: icMHomeAndGarden,
      subtitle: 'Subtitle',
      label: 'Label',
      size: SIZES['600'],
      count: 2,
      loading: true,
      isSquare: true
    }
  }
);

export const ThemeDisabledPrimary = Default.bind({});
export const ThemeDisabledPrimaryAccentSecondary = Default.bind({});
export const ThemeDisabledTransparent = Default.bind({});
export const ThemeDisabledStaticDark = DefaultWithBackground.bind({});
export const ThemeDisabledStaticLight = DefaultWithBlackBackground.bind({});

sbFillStories(
  [ThemeDisabledPrimary, ThemeDisabledPrimaryAccentSecondary, ThemeDisabledTransparent, ThemeDisabledStaticDark, ThemeDisabledStaticLight],
  {
    arStoryArgs: Object.values([
      THEMES.ACTION_PRIMARY,
      THEMES.ACCENT_SECONDARY,
      THEMES.TRANSPARENT,
      THEMES.STATIC_DARK_PRIMARY,
      THEMES.STATIC_LIGHT_SECONDARY
    ]).map(theme => ({ theme })),
    commonArgs: {
      leftIcon: icMHome,
      rightIcon: icMHomeAndGarden,
      disabled: true,
      subtitle: 'Subtitle',
      label: 'Label',
      size: SIZES['600'],
      count: 2,
    }
  }
);

export const ThemeDisabledPrimarySquare = Default.bind({});
export const ThemeDisabledTransparentSquare = Default.bind({});
export const ThemeDisabledStaticDarkSquare = DefaultWithBackground.bind({});
export const ThemeDisabledStaticLightSquare = DefaultWithBlackBackground.bind({});

sbFillStories(
  [ThemeDisabledPrimarySquare, ThemeDisabledTransparentSquare, ThemeDisabledStaticDarkSquare, ThemeDisabledStaticLightSquare],
  {
    arStoryArgs: Object.values([
      THEMES.ACTION_PRIMARY,
      THEMES.TRANSPARENT,
      THEMES.STATIC_DARK_PRIMARY,
      THEMES.STATIC_LIGHT_SECONDARY
    ]).map(theme => ({ theme })),
    commonArgs: {
      leftIcon: icMHome,
      rightIcon: icMHomeAndGarden,
      disabled: true,
      subtitle: 'Subtitle',
      label: 'Label',
      size: SIZES['600'],
      count: 2,
      isSquare: true
    }
  }
);

export const ThemeDisabledPrimaryDisableWrapper = Default.bind({});
export const ThemeDisabledTransparentDisableWrapper = Default.bind({});
export const ThemeDisabledStaticDarkDisableWrapper = DefaultWithBackground.bind({});
export const ThemeDisabledStaticLightDisableWrapper = DefaultWithBlackBackground.bind({});

sbFillStories(
  [ThemeDisabledPrimaryDisableWrapper, ThemeDisabledTransparentDisableWrapper, ThemeDisabledStaticDarkDisableWrapper, ThemeDisabledStaticLightDisableWrapper],
  {
    arStoryArgs: Object.values([
      THEMES.ACTION_PRIMARY,
      THEMES.TRANSPARENT,
      THEMES.STATIC_DARK_PRIMARY,
      THEMES.STATIC_LIGHT_SECONDARY
    ]).map(theme => ({ theme })),
    commonArgs: {
      leftIcon: icMHome,
      rightIcon: icMHomeAndGarden,
      disabled: true,
      subtitle: 'Subtitle',
      label: 'Label',
      size: SIZES['600'],
      count: 2,
      disableWrapper: true
    }
  }
);
