import OzSkeleton from '@/skeleton';
import DocsTemplate from '~storybook/templates/Stories.mdx';

export default {
  title: 'Components/OzSkeleton/Stories',
  component: OzSkeleton,
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
  components: { OzSkeleton },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: '<oz-skeleton v-bind="$props" v-on="argsGrouped.events"/>'
});

export const Square = Default.bind({});
Square.args = {
  square: true,
};

export const BoneHalf = Default.bind({});
BoneHalf.args = {
  boneHalf: true,
};
