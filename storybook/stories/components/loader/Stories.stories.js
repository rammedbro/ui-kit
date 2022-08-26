import OzLoader from '@/loader';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzLoader/Stories',
  component: OzLoader,
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
  components: { OzLoader },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-loader v-bind="$props" />
  `,
});

export const SizeS = Default.bind({});
export const SizeM = Default.bind({});
export const SizeL = Default.bind({});

sbFillStories(
  [SizeS, SizeM, SizeL],
  {
    arStoryArgs: Object.values(['s', 'm', 'l']).map(size => ({ size }))
  }
);
