import OzTabs from '@/tabs';
import { TAB_SIZES, TAB_THEMES, COUNTER_THEMES } from '@/tabs/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzTabs/Stories',
  component: OzTabs,
  args: {
    tabs: [
      {
        title: 'Tab 1',
        value: 'tab1',
      }, {
        title: 'Tab 2',
        value: 'tab2',
      }, {
        title: 'Tab 3',
        value: 'tab3',
      }
    ]
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
  components: { OzTabs },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-tabs v-bind="$props"
             v-on="argsGrouped.events" />
  `,
});

export const Primary = Default.bind({});
export const Tab = Default.bind({});
export const Tag = Default.bind({});
export const Accent = Default.bind({});
export const AccentLite = Default.bind({});

sbFillStories(
  [Primary, Tab, Tag, Accent, AccentLite],
  {
    arStoryArgs: Object.values(TAB_THEMES).map(theme => ({ theme }))
  }
);

export const PrimaryValue = Default.bind({});
export const TabValue = Default.bind({});
export const TagValue = Default.bind({});
export const AccentValue = Default.bind({});
export const AccentLiteValue = Default.bind({});

sbFillStories(
  [PrimaryValue, TabValue, TagValue, AccentValue, AccentLiteValue],
  {
    arStoryParent: [Primary, Tab, Tag, Accent, AccentLite],
    commonArgs: {
      value: 'tab1',
    }
  }
);

export const PrimaryLoading = Default.bind({});
export const TabLoading = Default.bind({});
export const TagLoading = Default.bind({});

sbFillStories(
  [PrimaryLoading, TabLoading, TagLoading],
  {
    arStoryParent: [Primary, Tab, Tag],
    commonArgs: {
      loading: true,
    }
  }
);

export const PrimaryFill = Default.bind({});
export const TabFill = Default.bind({});
export const TagFill = Default.bind({});
export const AccentFill = Default.bind({});
export const AccentLiteFill = Default.bind({});

sbFillStories(
  [PrimaryFill, TabFill, TagFill, AccentFill, AccentLiteFill],
  {
    arStoryParent: [Primary, Tab, Tag, Accent, AccentLite],
    commonArgs: {
      fill: true,
    }
  }
);

export const PrimaryLink = Default.bind({});
export const TabLink = Default.bind({});
export const TagLink = Default.bind({});
export const AccentLink = Default.bind({});
export const AccentLiteLink = Default.bind({});

sbFillStories(
  [PrimaryLink, TabLink, TagLink, AccentLink, AccentLiteLink],
  {
    arStoryParent: [Primary, Tab, Tag, Accent, AccentLite],
    commonArgs: {
      value: 'https://ozon.ru',
      likeLink: true,
    }
  }
);

export const PrimaryCounter = Default.bind({});
export const TabCounter = Default.bind({});
export const TagCounter = Default.bind({});

sbFillStories(
  [PrimaryCounter, TabCounter, TagCounter],
  {
    arStoryParent: [Primary, Tab, Tag],
    commonArgs: {
      tabs: [
        {
          title: 'Tab 1',
          value: 'tab1',
          counter: '10',
        }, {
          title: 'Tab 2',
          value: 'tab2',
          counter: '10',
        }, {
          title: 'Tab 3',
          value: 'tab3',
          counter: '10',
        }
      ]
    }
  }
);

export const PrimaryCounterSecondary = Default.bind({});
export const TabCounterSecondary = Default.bind({});
export const TagCounterSecondary = Default.bind({});

sbFillStories(
  [PrimaryCounterSecondary, TabCounterSecondary, TagCounterSecondary],
  {
    arStoryParent: [PrimaryCounter, TabCounter, TagCounter],
    commonArgs: {
      counterTheme: COUNTER_THEMES.secondary,
    }
  }
);

export const H1TabSize = Default.bind({});
export const H2TabSize = Default.bind({});

sbFillStories(
  [H1TabSize, H2TabSize],
  {
    arStoryArgs: Object.values(TAB_SIZES).map(size => ({ tabSize: size }))
  }
);

export const TabsWithBorder = Default.bind({});

sbFillStories(
  [TabsWithBorder],
  {
    arStoryParent: [Tab],
    commonArgs: {
      value: 'tab1',
      withBorder: true,
    }
  }
);

export const PrimaryBadge = Default.bind({});
export const TabBadge = Default.bind({});
export const AccentBadge = Default.bind({});
export const AccentLiteBadge = Default.bind({});

sbFillStories(
  [PrimaryBadge, TabBadge, AccentBadge, AccentLiteBadge],
  {
    arStoryParent: [Primary, Tab, Accent, AccentLite],
    commonArgs: {
      tabs: [
        {
          title: 'Tab 1',
          value: 'tab1',
          badge: {
            text: 'badge'
          },
        }, {
          title: 'Tab 2',
          value: 'tab2',
          badge: {
            text: 'badge'
          },
        }, {
          title: 'Tab 3',
          value: 'tab3',
          badge: {
            text: 'badge'
          },
        }
      ]
    }
  }
);

export const H1TabSizeBadge = Default.bind({});
export const H2TabSizeBadge = Default.bind({});

sbFillStories(
  [H1TabSizeBadge, H2TabSizeBadge],
  {
    arStoryArgs: Object.values(TAB_SIZES).map(size => ({ tabSize: size })),
    commonArgs: {
      tabs: [
        {
          title: 'Tab 1',
          value: 'tab1',
          badge: {
            text: 'badge'
          },
        }, {
          title: 'Tab 2',
          value: 'tab2',
          badge: {
            text: 'badge'
          },
        }, {
          title: 'Tab 3',
          value: 'tab3',
          badge: {
            text: 'badge'
          },
        }
      ]
    }
  }
);

export const H1TabSizeBadgeCounter = Default.bind({});
export const H2TabSizeBadgeCounter = Default.bind({});

sbFillStories(
  [H1TabSizeBadgeCounter, H2TabSizeBadgeCounter],
  {
    arStoryArgs: Object.values(TAB_SIZES).map(size => ({ tabSize: size })),
    commonArgs: {
      tabs: [
        {
          title: 'Tab 1',
          value: 'tab1',
          badge: {
            text: 'badge'
          },
          counter: '10',
        }, {
          title: 'Tab 2',
          value: 'tab2',
          badge: {
            text: 'badge'
          },
          counter: '10',
        }, {
          title: 'Tab 3',
          value: 'tab3',
          badge: {
            text: 'badge'
          },
          counter: '10',
        }
      ]
    }
  }
);
