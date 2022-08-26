import OzAvatar from '@/avatar';
import { THEMES } from '@/avatar/constants';
import { ic_m_legal_entity as IconLegal } from '@fe-icons';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzAvatar/Stories',
  component: OzAvatar,
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
  components: { OzAvatar },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-avatar v-bind="$props"
               v-on="argsGrouped.events" />
  `,
});

export const Icon = Default.bind({});
Icon.args = {
  icon: {
    image: IconLegal,
  },
};

export const ThemeXSmall = Default.bind({});
export const ThemeSmall = Default.bind({});
export const ThemeMedium = Default.bind({});
export const ThemeLarge = Default.bind({});
export const ThemeXLarge = Default.bind({});

sbFillStories(
  [ThemeXSmall, ThemeSmall, ThemeMedium, ThemeLarge, ThemeXLarge],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme }))
  }
);

export const BackgroundColor = Default.bind({});
BackgroundColor.args = {
  backgroundColor: 'ozAccentAlert',
};

export const Initials = Default.bind({});
Initials.args = {
  initials: 'ШИ',
};
