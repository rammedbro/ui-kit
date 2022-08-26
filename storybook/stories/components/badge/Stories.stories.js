import OzBadge from '@/badge';
import {
  ICON_POSITION,
  BORDER_RADIUS_SIZE,
  TEXT_TRANSFORM
} from '@/badge/constants';
import { SIZES } from '~/constants/sizes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { ic_s_star_filled_compact as IconStarCompact } from '@fe-icons';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzBadge/Stories',
  component: OzBadge,
  args: {
    text: 'Badge',
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
  components: { OzBadge },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-badge v-bind="$props"
              v-on="argsGrouped.events" />
  `,
});

export const TextTransformCapitalize = Default.bind({});
export const TextTransformLowercase = Default.bind({});
export const TextTransformUppercase = Default.bind({});
export const TextTransformNone = Default.bind({});

sbFillStories(
  [
    TextTransformCapitalize, TextTransformLowercase,
    TextTransformUppercase, TextTransformNone
  ],
  {
    arStoryArgs: Object.values(TEXT_TRANSFORM).map(textTransform => ({ textTransform }))
  }
);

export const Icon = Default.bind({});
Icon.args = {
  icon: IconStarCompact,
};

export const IconPositionLeft = Default.bind({});
export const IconPositionRight = Default.bind({});

sbFillStories(
  [IconPositionLeft, IconPositionRight],
  {
    arStoryArgs: Object.values(ICON_POSITION).map(iconPosition => ({ iconPosition })),
    commonArgs: {
      ...Icon.args,
    }
  }
);

export const IconColor = Default.bind({});
IconColor.args = {
  ...Icon.args,
  iconColor: 'text.action',
};

export const SizeXS = Default.bind({});
export const SizeS = Default.bind({});
export const SizeM = Default.bind({});

sbFillStories(
  [SizeXS, SizeS, SizeM],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const Color = Default.bind({});
Color.args = {
  color: 'text.action',
};

export const BackgroundColor = Default.bind({});
BackgroundColor.args = {
  backgroundColor: 'ozAccentAlert',
};

export const TextBold = Default.bind({});
TextBold.args = {
  isTextBold: true,
};

export const BorderColor = Default.bind({});
BorderColor.args = {
  borderColor: 'text.action',
};

export const BorderRadiusSizeS = Default.bind({});
export const BorderRadiusSizeM = Default.bind({});

sbFillStories(
  [BorderRadiusSizeS, BorderRadiusSizeM],
  {
    arStoryArgs: Object.values(BORDER_RADIUS_SIZE).map(borderRadiusSize => ({ borderRadiusSize }))
  }
);
