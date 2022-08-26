import OzPopover from '@/popover';
import { THEMES, PLACEMENT, TRIGGER } from '@/popover/constants';
import { SIZES } from '~/constants/sizes';
import { COLOR_THEMES } from '~/constants/color-themes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzPopover/Stories',
  component: OzPopover,
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
  components: { OzPopover },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-popover v-bind="$props"
                v-on="argsGrouped.events">
    Текст

    <template v-slot:popover>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </template>
    </oz-popover>
  `,
});

export const ThemePopover = Default.bind({});
export const ThemeDropdown = Default.bind({});
export const ThemeDropdownMenu = Default.bind({});
export const ThemeEmpty = Default.bind({});

sbFillStories(
  [ThemePopover, ThemeDropdown, ThemeDropdownMenu, ThemeEmpty],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme }))
  }
);

export const ColorThemeLight = Default.bind({});
export const ColorThemeDark = Default.bind({});

sbFillStories(
  [ColorThemeLight, ColorThemeDark],
  {
    arStoryArgs: Object.values(COLOR_THEMES).map(colorTheme => ({ colorTheme }))
  }
);

export const TriggerClick = Default.bind({});
export const TriggerHover = Default.bind({});

sbFillStories(
  [TriggerClick, TriggerHover],
  {
    arStoryArgs: Object.values(TRIGGER).map(trigger => ({ trigger }))
  }
);

export const PlacementBottom = Default.bind({});
export const PlacementLeft = Default.bind({});
export const PlacementRight = Default.bind({});
export const PlacementTop = Default.bind({});
export const PlacementBottomStart = Default.bind({});
export const PlacementTopStart = Default.bind({});

sbFillStories(
  [
    PlacementBottom, PlacementLeft, PlacementRight,
    PlacementTop, PlacementBottomStart, PlacementTopStart
  ],
  {
    arStoryArgs: Object.values(PLACEMENT).map(placement => ({ placement }))
  }
);

export const PaddingSizeM = Default.bind({});
export const PaddingSizeL = Default.bind({});

sbFillStories(
  [null, null, PaddingSizeM, PaddingSizeL],
  {
    arStoryArgs: Object.values(SIZES).map(paddingSize => ({ paddingSize }))
  }
);

export const ApplyMaxSize = (args, { parameters, argsGrouped }) => ({
  components: { OzPopover },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-popover v-bind="$props">
      Текст

      <template v-slot:popover>
        ${'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'.repeat(10)}
      </template>
    </oz-popover>
  `,
});
ApplyMaxSize.args = {
  applyMaxSize: true,
};

export const ApplyMaxSizeWithIndent = ApplyMaxSize.bind({});
ApplyMaxSizeWithIndent.args = {
  applyMaxSize: {
    indent: 50
  },
};

export const Disabled = Default.bind({});
Disabled.args = {
  disabled: true,
};

export const Fill = Default.bind({});
Fill.args = {
  fill: true,
};
