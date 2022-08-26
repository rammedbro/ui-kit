import OzRating from '@/rating';
import { SIZES } from '~/constants/sizes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzRating/Stories',
  component: OzRating,
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
  components: { OzRating },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbValue: 4,
  }),
  template: `
    <oz-rating v-model="sbValue"
               v-bind="$props"
               v-on="argsGrouped.events" />
  `,
});

export const SizeS = Default.bind({});
export const SizeM = Default.bind({});
export const SizeL = Default.bind({});
export const SizeXL = Default.bind({});

sbFillStories(
  [null, SizeS, SizeM, SizeL, SizeXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const ReadOnly = (args, { parameters, argsGrouped }) => ({
  components: { OzRating },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbValue: 3.5,
  }),
  template: `
    <oz-rating v-model="sbValue"
               v-bind="$props"
               read-only
               v-on="argsGrouped.events" />
  `,
});

export const ReadOnlySizeS = ReadOnly.bind({});
export const ReadOnlySizeM = ReadOnly.bind({});
export const ReadOnlySizeL = ReadOnly.bind({});
export const ReadOnlySizeXL = ReadOnly.bind({});

sbFillStories(
  [null, ReadOnlySizeS, ReadOnlySizeM, ReadOnlySizeL, ReadOnlySizeXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const ReviewCount = (args, { parameters, argsGrouped }) => ({
  components: { OzRating },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbValue: 4.5,
  }),
  template: `
    <oz-rating v-model="sbValue"
               v-bind="$props"
               read-only
               reviewCount="24"
               alt-text
               v-on="argsGrouped.events" />
  `,
});

export const ReviewCountSizeS = ReviewCount.bind({});
export const ReviewCountSizeM = ReviewCount.bind({});
export const ReviewCountSizeL = ReviewCount.bind({});
export const ReviewCountSizeXL = ReviewCount.bind({});

sbFillStories(
  [null, ReviewCountSizeS, ReviewCountSizeM, ReviewCountSizeL, ReviewCountSizeXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const WithAnimation = (args, { parameters }) => ({
  components: { OzRating },
  props: Object.keys(parameters.args),
  data: () => ({
    sbValue: 4,
    sbWithAnimation: true,
  }),
  mounted() {
    this.sbWithAnimation = false;

    setTimeout(() => {
      this.sbWithAnimation = true;
    }, 2000);
  },
  template: `
    <oz-rating v-model="sbValue"
               :with-animation="sbWithAnimation" />
  `,
});
