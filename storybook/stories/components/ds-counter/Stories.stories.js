import DsCounter from '@/ds-counter';
import { THEMES } from '@/ds-counter/constants';
import { SIZES } from '@/ds-subicon/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';

export default {
  title: 'Components/DsCounter/Stories',
  component: DsCounter,
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
  components: { DsCounter },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbSelectedIndex: null,
  }),
  template: '<ds-counter v-bind="$props" />'
});

export const Size400 = Default.bind({});
Size400.args = {
  size: SIZES['400']
};

export const Size450 = Default.bind({});
Size450.args = {
  size: SIZES['450']
};

export const Size500 = Default.bind({});
Size500.args = {
  size: SIZES['500']
};

export const Size600 = Default.bind({});
Size600.args = {
  size: SIZES['600']
};

export const Label = Default.bind({});
Label.args = {
  label: 1234
};

export const Limit = Default.bind({});
Limit.args = {
  label: 1234,
  limit: 1000
};

export const IsTruncated = Default.bind({});
IsTruncated.args = {
  label: 1234,
  limit: 1000,
  isTruncated: true
};

export const ThemeNeutral = Default.bind({});
ThemeNeutral.args = {
  theme: THEMES.NEUTRAL
};

export const ThemeNeutralLabel = Default.bind({});
ThemeNeutralLabel.args = {
  theme: THEMES.NEUTRAL,
  label: 1234
};

export const ThemeNeutralLimit = Default.bind({});
ThemeNeutralLimit.args = {
  theme: THEMES.NEUTRAL,
  label: 1234,
  limit: 1000
};

export const ThemeNeutralIsTruncated = Default.bind({});
ThemeNeutralIsTruncated.args = {
  theme: THEMES.NEUTRAL,
  label: 1234,
  limit: 1000,
  isTruncated: true
};

export const ThemeNeutralTransparent = Default.bind({});
ThemeNeutralTransparent.args = {
  theme: THEMES.NEUTRAL_TRANSPARENT
};

export const ThemeNeutralTransparentLabel = Default.bind({});
ThemeNeutralTransparentLabel.args = {
  theme: THEMES.NEUTRAL_TRANSPARENT,
  label: 1234
};

export const ThemeNeutralTransparentLimit = Default.bind({});
ThemeNeutralTransparentLimit.args = {
  theme: THEMES.NEUTRAL_TRANSPARENT,
  label: 1234,
  limit: 1000
};

export const ThemeNeutralTransparentIsTruncated = Default.bind({});
ThemeNeutralTransparentIsTruncated.args = {
  theme: THEMES.NEUTRAL_TRANSPARENT,
  label: 1234,
  limit: 1000,
  isTruncated: true
};

export const ThemeLight = Default.bind({});
ThemeLight.args = {
  theme: THEMES.LIGHT
};

export const ThemeLightLabel = Default.bind({});
ThemeLightLabel.args = {
  theme: THEMES.LIGHT,
  label: 1234
};

export const ThemeLightLimit = Default.bind({});
ThemeLightLimit.args = {
  theme: THEMES.LIGHT,
  label: 1234,
  limit: 1000
};

export const ThemeLightIsTruncated = Default.bind({});
ThemeLightIsTruncated.args = {
  theme: THEMES.LIGHT,
  label: 1234,
  limit: 1000,
  isTruncated: true
};
