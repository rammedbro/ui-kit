import OzButton from '@/button';
import { THEMES, ICON_POSITIONS } from '@/button/constants';
import { SIZES } from '~/constants/sizes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';
import { ic_m_bell as IconBell } from '@fe-icons';

export default {
  title: 'Components/OzButton/Stories',
  component: OzButton,
  args: {
    text: 'Button',
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
  components: { OzButton },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-button v-bind="$props"
               v-on="argsGrouped.events" />
  `,
});

export const SizeM = Default.bind({});
export const SizeL = Default.bind({});
export const SizeXL = Default.bind({});
export const SizeXXL = Default.bind({});

sbFillStories(
  [null, null, SizeM, SizeL, SizeXL, SizeXXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const Primary = Default.bind({});
export const Secondary = Default.bind({});
export const Success = Default.bind({});
export const SecondaryWhite = Default.bind({});
export const SecondaryClear = Default.bind({});
export const SecondaryAlt = Default.bind({});
export const SecondaryDark = Default.bind({});
export const Inline = Default.bind({});
export const InlineDanger = Default.bind({});
export const Material = Default.bind({});
export const Parandja = Default.bind({});
export const SecondaryDanger = Default.bind({});
export const SecondarySuccess = Default.bind({});
export const Delivery = Default.bind({});
export const VideoControl = Default.bind({});
export const Empty = Default.bind({});
export const Tab = Default.bind({});
export const TabActive = Default.bind({});
export const PrimaryExpress = Default.bind({});
export const DeleteWhite = Default.bind({});
export const SecondaryConfirmedWhite = Default.bind({});
export const Fresh = Default.bind({});
export const SecondaryFresh = Default.bind({});
export const SecondaryFreshWhite = Default.bind({});
export const White = Default.bind({});
export const Gradient = Default.bind({});

sbFillStories(
  [
    Primary, Success,
    Inline, InlineDanger,
    Secondary, SecondaryAlt, SecondaryDark, SecondaryDanger, DeleteWhite, SecondarySuccess,
    SecondaryConfirmedWhite, SecondaryWhite, SecondaryClear, Tab, TabActive,
    Parandja, Empty, Material, Delivery, PrimaryExpress,
    VideoControl, Fresh, SecondaryFresh, SecondaryFreshWhite, White, Gradient
  ],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme }))
  }
);

const FillAutoTemplate = (args, { parameters, argsGrouped }) => ({
  components: { OzButton },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <div style="height: 100px">
      <oz-button v-bind="$props"
               v-on="argsGrouped.events" />
    </div>
  `,
});

export const Fill = Default.bind({});
export const FillAuto = FillAutoTemplate.bind({});
export const Disabled = Default.bind({});
export const DisabledInteractive = Default.bind({});
export const Loading = Default.bind({});
export const NoMinHeight = Default.bind({});
export const NoMinWidth = Default.bind({});
export const FontWeightNormal = Default.bind({});
export const Href = Default.bind({});
export const FakeButton = Default.bind({});

sbFillStories(
  [
    Fill, FillAuto, Disabled, DisabledInteractive, Loading, NoMinHeight,
    NoMinWidth, FontWeightNormal, Href, FakeButton
  ],
  {
    arStoryArgs: [
      { fill: true },
      { fillAuto: true },
      { disabled: true },
      { disabledInteractive: true },
      { loading: true },
      { noMinHeight: true },
      { noMinWidth: true },
      { fontWeightNormal: true },
      { href: 'https://ozon.ru', type: 'fakeLink' },
      { type: 'fakeButton' }
    ]
  }
);

export const Icon = Default.bind({});
Icon.args = {
  icon: IconBell,
};

export const IconPositionLeft = Default.bind({});
export const IconPositionRight = Default.bind({});

sbFillStories(
  [IconPositionLeft, IconPositionRight],
  {
    arStoryArgs: Object.values(ICON_POSITIONS).map(iconPosition => ({ iconPosition })),
    commonArgs: { ...Icon.args }
  },
);

export const IconColor = Default.bind({});
export const IconRotate = Default.bind({});

sbFillStories(
  [IconColor, IconRotate],
  {
    arStoryArgs: [
      { iconColor: 'ozGreenUi' },
      { iconRotate: 90 },
    ],
    commonArgs: { ...Icon.args }
  },
);
