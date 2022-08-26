import OzTab from '@/tabs/tab';
import { TAB_SIZES, TAB_THEMES, COUNTER_THEMES } from '@/tabs/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzTab/Stories',
  component: OzTab,
  args: {
    title: 'Заголовок',
    value: 'value',
    index: 0,
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
  components: { OzTab },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-tab v-bind="$props"
            v-on="argsGrouped.events" />
  `,
});

export const Primary = Default.bind({});
export const Tab = Default.bind({});
export const Tag = Default.bind({});

sbFillStories(
  [Primary, Tab, Tag],
  {
    arStoryArgs: Object.values(TAB_THEMES).map(theme => ({ theme }))
  }
);

export const PrimaryActive = Default.bind({});
export const TabActive = Default.bind({});
export const TagActive = Default.bind({});

sbFillStories(
  [PrimaryActive, TabActive, TagActive],
  {
    arStoryParent: [Primary, Tab, Tag],
    commonArgs: {
      active: true,
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

export const PrimaryActiveLoading = Default.bind({});
export const TabActiveLoading = Default.bind({});
export const TagActiveLoading = Default.bind({});

sbFillStories(
  [PrimaryActiveLoading, TabActiveLoading, TagActiveLoading],
  {
    arStoryParent: [Primary, Tab, Tag],
    commonArgs: {
      active: true,
      loading: true,
    }
  }
);

export const PrimaryFill = Default.bind({});
export const TabFill = Default.bind({});
export const TagFill = Default.bind({});

sbFillStories(
  [PrimaryFill, TabFill, TagFill],
  {
    arStoryParent: [Primary, Tab, Tag],
    commonArgs: {
      fill: true,
    }
  }
);

export const PrimaryLink = Default.bind({});
export const TabLink = Default.bind({});
export const TagLink = Default.bind({});

sbFillStories(
  [PrimaryLink, TabLink, TagLink],
  {
    arStoryParent: [Primary, Tab, Tag],
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
      counter: '10',
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

export const PrimaryBadge = Default.bind({});
export const TabBadge = Default.bind({});

sbFillStories(
  [PrimaryBadge, TabBadge],
  {
    arStoryParent: [Primary, Tab],
    commonArgs: {
      badge: {
        text: 'badge'
      },
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
      badge: {
        text: 'badge'
      },
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
      badge: {
        text: 'badge'
      },
      counter: '10',
    }
  }
);
