import OzModal from '@/modal';
import { THEMES } from '@/modal/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import OzButton from '@/button';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzModal/Stories',
  component: OzModal,
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
  components: { OzModal, OzButton },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    display: false,
  }),
  template: `
    <div>
    <oz-button text="Открыть"
               @click="display = true" />

    <oz-modal v-if="display"
              v-bind="$props"
              v-on="argsGrouped.events"
              @close="display = false">
      <h1>Контент</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </oz-modal>
    </div>
  `,
});

export const ThemeDefault = Default.bind({});
export const ThemeWide = Default.bind({});
export const ThemeEmpty = Default.bind({});
export const ThemeFullScreen = Default.bind({});
export const ThemeBottom = Default.bind({});

sbFillStories(
  [ThemeDefault, ThemeWide, ThemeEmpty, ThemeFullScreen, ThemeBottom],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme }))
  }
);

export const DefaultWithCloseOutside = Default.bind({});
DefaultWithCloseOutside.args = {
  closeButtonPosition: 'outside',
};

export const CenteredFalse = Default.bind({});
CenteredFalse.args = {
  centered: false,
};

export const OpaqueBackground = Default.bind({});
OpaqueBackground.args = {
  opaqueBackground: true,
};

export const ForceShow = Default.bind({});
ForceShow.args = {
  forceShow: true,
};

export const isMobileThemeEmpty = Default.bind({});
export const isMobileThemeBottom = Default.bind({});

sbFillStories(
  [isMobileThemeEmpty, isMobileThemeBottom],
  {
    arStoryParent: [ThemeEmpty, ThemeBottom],
    commonArgs: {
      isMobileTheme: true,
    }
  }
);

const BigHeightContentTemplate = (args, { parameters }) => ({
  components: { OzModal, OzButton },
  props: Object.keys(parameters.args),
  data: () => ({
    display: false,
  }),
  template: `
    <div>
    <oz-button text="Открыть"
               @click="display = true" />

    <oz-modal v-if="display"
              v-bind="$props"
              @close="display = false">
      <h1>Контент</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2>Контент</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </oz-modal>
    </div>
  `,
});

export const BigHeightContent = BigHeightContentTemplate.bind({});

export const ScrollInsideContent = BigHeightContentTemplate.bind({});
ScrollInsideContent.args = {
  scrollingWrapper: false,
};
