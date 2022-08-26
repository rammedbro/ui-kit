import OzTransition from '@/transition';
import { DELAY_VARIANTS, SPEED_VARIANTS, MODE_VARIANTS } from '@/transition/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import OzButton from '@/button';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzTransition/Stories',
  component: OzTransition,
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

export const Default = (args, { parameters }) => ({
  components: { OzTransition, OzButton },
  props: Object.keys(parameters.args),
  data: () => ({
    show: false,
  }),
  template: `
    <div>
    <oz-button text="Клик"
               @click="show = !show" />

    <oz-transition v-bind="$props">
      <img v-if="show"
           alt=""
           src="https://ichef.bbci.co.uk/news/410/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg"
           style="display: block;" />
    </oz-transition>
    </div>
  `,
});

export const SpeedDefault = Default.bind({});
export const SpeedSlow = Default.bind({});
export const SpeedFast = Default.bind({});

sbFillStories(
  [SpeedDefault, SpeedSlow, SpeedFast],
  {
    arStoryArgs: Object.values(SPEED_VARIANTS).map(speed => ({ speed }))
  }
);

export const DelayNone = Default.bind({});
export const DelayShort = Default.bind({});
export const DelayLong = Default.bind({});

sbFillStories(
  [DelayNone, DelayShort, DelayLong],
  {
    arStoryArgs: Object.values(DELAY_VARIANTS).map(delay => ({ delay }))
  }
);

export const OnlyFade = Default.bind({});
OnlyFade.args = {
  ...SpeedSlow.args,
  onlyFade: true,
};

export const Appear = Default.bind({});
Appear.args = {
  ...SpeedSlow.args,
  appear: true,
};

export const ModeNone = Default.bind({});
export const ModeOutIn = Default.bind({});
export const ModeInOut = Default.bind({});

sbFillStories(
  [ModeNone, ModeOutIn, ModeInOut],
  {
    arStoryArgs: Object.values(MODE_VARIANTS).map(mode => ({ mode })),
    commonArgs: { ...SpeedSlow.args }
  },
);
