import DsLoader from '@/ds-loader';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/DsLoader/Stories',
  component: DsLoader,
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
  components: { DsLoader },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <ds-loader v-bind="$props" />
  `,
});

export const Color = Default.bind({});

Color.args = {
  color: '--graphicWarningPrimary',
};

export const Size200 = Default.bind({});
export const Size300 = Default.bind({});
export const Size400 = Default.bind({});
export const Size500 = Default.bind({});
export const Size600 = Default.bind({});

sbFillStories(
  [Size200, Size300, Size400, Size500, Size600],
  {
    arStoryArgs: Object.values([200, 300, 400, 500, 600]).map(size => ({ size }))
  }
);
