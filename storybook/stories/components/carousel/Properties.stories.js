import OzCarousel from '@/carousel/carousel-entry';
import OzCarouselItem from '@/carousel/carousel-item';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzCarousel/Properties',
  args: sbGetComponentDefaultValues(OzCarousel),
  parameters: {
    viewMode: 'docs',
    controls: {
      disable: true,
    },
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

export const Properties = (args, { argsGrouped }) => ({
  components: { OzCarousel, OzCarouselItem },
  props: Object.keys(argsGrouped.props),
  data: () => ({
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
    <oz-carousel v-bind="$props"
                 :style="sbCarouselStyle">
    <oz-carousel-item v-for="(item, index) in 10" :key="index"
                      :style="sbCarouselItemStyle">
      Item {{ index }}
    </oz-carousel-item>
    </oz-carousel>
  `,
});
