import OzTag from '@/tag';
import { THEMES } from '@/tag/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';
import { ic_s_bell as IcSBell } from '@fe-icons';

export default {
  title: 'Components/OzTag/Stories',
  component: OzTag,
  args: {
    text: 'Text',
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
  components: { OzTag },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-tag v-bind="$props"
            v-on="argsGrouped.events" />
  `,
});

export const Primary = Default.bind({});
export const Secondary = Default.bind({});
export const SecondaryLink = Default.bind({});
export const White = Default.bind({});
export const DeliveryDeprecated = Default.bind({});
export const SecondaryDarkDeprecatedUseSecondary = Default.bind({});

sbFillStories(
  [Primary, Secondary, SecondaryLink, White, DeliveryDeprecated, SecondaryDarkDeprecatedUseSecondary],
  {
    arStoryArgs: THEMES.map(theme => ({ theme }))
  }
);

export const PrimaryCounter = Default.bind({});
export const SecondaryCounter = Default.bind({});
export const SecondaryLinkCounter = Default.bind({});
export const WhiteCounter = Default.bind({});

sbFillStories(
  [PrimaryCounter, SecondaryCounter, SecondaryLinkCounter, WhiteCounter],
  {
    arStoryParent: [Primary, Secondary, SecondaryLink, White],
    commonArgs: {
      counter: '10',
    }
  }
);

export const PrimarySecondaryDisabled = Default.bind({});
export const WhiteDisabled = Default.bind({});

sbFillStories(
  [PrimarySecondaryDisabled, WhiteDisabled],
  {
    arStoryParent: [Primary, White],
    commonArgs: {
      disabled: true,
    }
  }
);

export const PrimaryAndLink = Default.bind({});
export const SecondaryAndLink = Default.bind({});
export const SecondaryLinkAndLink = Default.bind({});
export const WhiteAndLink = Default.bind({});

sbFillStories(
  [PrimaryAndLink, SecondaryAndLink, SecondaryLinkAndLink, WhiteAndLink],
  {
    arStoryParent: [Primary, Secondary, SecondaryLink, White],
    commonArgs: {
      href: 'https://ozon.ru',
    }
  }
);

export const PrimaryCloseButton = Default.bind({});
export const SecondaryCloseButton = Default.bind({});
export const SecondaryLinkCloseButton = Default.bind({});
export const WhiteCloseButton = Default.bind({});

sbFillStories(
  [PrimaryCloseButton, SecondaryCloseButton, SecondaryLinkCloseButton, WhiteCloseButton],
  {
    arStoryParent: [Primary, Secondary, SecondaryLink, White],
    commonArgs: {
      closeButton: true,
    }
  }
);

export const PrimaryTextIcon = Default.bind({});
export const SecondaryTextIcon = Default.bind({});
export const SecondaryLinkTextIcon = Default.bind({});
export const WhiteTextIcon = Default.bind({});

sbFillStories(
  [PrimaryTextIcon, SecondaryTextIcon, SecondaryLinkTextIcon, WhiteTextIcon],
  {
    arStoryParent: [Primary, Secondary, SecondaryLink, White],
    commonArgs: {
      icon: IcSBell,
    }
  }
);

export const PrimaryIconClose = Default.bind({});
export const SecondaryIconClose = Default.bind({});
export const SecondaryLinkIconClose = Default.bind({});
export const WhiteIconClose = Default.bind({});

sbFillStories(
  [PrimaryIconClose, SecondaryIconClose, SecondaryLinkIconClose, WhiteIconClose],
  {
    arStoryParent: [Primary, Secondary, SecondaryLink, White],
    commonArgs: {
      icon: IcSBell,
      text: '',
      closeButton: true,
    }
  }
);

export const PrimaryTextIconClose = Default.bind({});
export const SecondaryTextIconClose = Default.bind({});
export const SecondaryLinkTextIconClose = Default.bind({});
export const WhiteTextIconClose = Default.bind({});

sbFillStories(
  [PrimaryTextIconClose, SecondaryTextIconClose, SecondaryLinkTextIconClose, WhiteTextIconClose],
  {
    arStoryParent: [Primary, Secondary, SecondaryLink, White],
    commonArgs: {
      icon: IcSBell,
      closeButton: true,
    }
  }
);

export const PrimaryTextIconCounterClose = Default.bind({});
export const SecondaryTextIconCounterClose = Default.bind({});
export const SecondaryLinkTextIconCounterClose = Default.bind({});
export const WhiteTextIconCounterClose = Default.bind({});

sbFillStories(
  [PrimaryTextIconCounterClose, SecondaryTextIconCounterClose, SecondaryLinkTextIconCounterClose, WhiteTextIconCounterClose],
  {
    arStoryParent: [Primary, Secondary, SecondaryLink, White],
    commonArgs: {
      icon: IcSBell,
      closeButton: true,
      counter: '10',
    }
  }
);
