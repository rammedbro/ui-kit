import OzCarousel from '@/carousel/carousel-entry';
import OzCarouselItem from '@/carousel/carousel-item';
import { LAYOUTS_TITLES, BUTTON_THEMES_TITLES } from '@/carousel/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzCarousel/Stories',
  component: OzCarousel,
  argTypes: {
    'slide-change': {
      table: {
        category: 'events',
      },
      action: 'slide-change',
    },
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
  components: { OzCarousel, OzCarouselItem },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbCarouselStyle: {
      maxHeight: '400px',
    },
    sbCarouselItemStyle: {
      width: '150px',
      height: '150px',
      margin: '15px',
      backgroundColor: 'lightgray'
    }
  }),
  template: `
    <div style="padding: 0 60px">
    <oz-carousel v-bind="$props"
                 v-on="argsGrouped.events"
                 :style="sbCarouselStyle">
      <oz-carousel-item v-for="(item, index) in 10" :key="index"
                        :style="sbCarouselItemStyle">
        Item {{ index }}
      </oz-carousel-item>
    </oz-carousel>
    </div>
  `,
});

export const LayoutHorizontal = Default.bind({});
export const LayoutVertical = Default.bind({});

sbFillStories(
  [LayoutHorizontal, LayoutVertical],
  {
    arStoryArgs: Object.values(LAYOUTS_TITLES).map(layout => ({ layout }))
  }
);

export const LayoutHorizontalAndOnlyScroll = Default.bind({});
export const LayoutVerticalAndOnlyScroll = Default.bind({});

sbFillStories(
  [LayoutHorizontalAndOnlyScroll, LayoutVerticalAndOnlyScroll],
  {
    arStoryParent: [LayoutHorizontal, LayoutVertical],
    commonArgs: {
      onlyScroll: true,
    }
  }
);

const RecursiveTemplate = (args, { parameters, argsGrouped }) => ({
  components: { OzCarousel, OzCarouselItem },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbCarouselStyle: {
      maxHeight: '400px',
    },
    sbCarouselItemStyle: {
      width: '150px',
      height: '150px',
      margin: '15px',
      backgroundColor: 'lightgray'
    },
    sbCarouselFooterStyle: {
      height: '50px',
      margin: '15px',
      backgroundColor: 'lightgray',
      fontSize: 'initial'
    }
  }),
  template: `
<div style="padding: 0 60px">
  <oz-carousel v-bind="$props"
               v-on="argsGrouped.events"
               :style="sbCarouselStyle">
    <div v-for="(_, wrapperIndex) in 4" :key="wrapperIndex">
      <div style="display: flex">
        <oz-carousel-item v-for="(item, index) in 3" :key="index"
                          :style="sbCarouselItemStyle">
          Item {{ index + 3 * wrapperIndex }}
        </oz-carousel-item>
      </div>
      <div :style="sbCarouselFooterStyle">
        Не учитывается при расчетах
      </div>
    </div>
  </oz-carousel>
</div>
  `,
});

export const OnlyScroll = Default.bind({});
export const SlidingCount = Default.bind({});
export const Transition = Default.bind({});
export const Loop = Default.bind({});
export const Navigation = Default.bind({});
export const Pagination = Default.bind({});
export const Centered = Default.bind({});
export const Recursive = RecursiveTemplate.bind({});

sbFillStories(
  [OnlyScroll, SlidingCount, Transition, Loop, Navigation, Pagination, Centered, Recursive],
  {
    arStoryArgs: [
      { onlyScroll: true },
      { slidingCount: 2 },
      { transition: 1000 },
      { loop: true },
      { navigation: true },
      { pagination: true, navigation: false },
      { centered: true },
      { recursive: true, navigation: true }
    ]
  }
);

export const ThemeMaterial = Default.bind({});
export const ThemeMaterialInside = Default.bind({});
export const ThemeFlat = Default.bind({});
export const ThemeRectMaterial = Default.bind({});
export const ThemeDarkRect = Default.bind({});

sbFillStories(
  [ThemeMaterial, ThemeMaterialInside, ThemeFlat, ThemeRectMaterial, ThemeDarkRect],
  {
    arStoryArgs: Object.values(BUTTON_THEMES_TITLES).map(theme => ({ theme }))
  }
);
