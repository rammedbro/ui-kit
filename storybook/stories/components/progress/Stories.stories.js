import OzProgress from '@/progress';
import DocsTemplate from '~storybook/templates/Stories.mdx';

export default {
  title: 'Components/OzProgress/Stories',
  component: OzProgress,
  args: {
    percent: 100,
    height: 30,
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
  components: { OzProgress },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-progress v-bind="$props" v-on="argsGrouped.events" />
  `,
});

export const InProgress = Default.bind({});
InProgress.args = {
  percent: 24,
  height: 30,
  color: 'ozAccentAlert',
};

export const WithText = (args, { parameters, argsGrouped }) => ({
  components: { OzProgress },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-progress v-bind="$props" v-on="argsGrouped.events">
      <span>24/100</span>
    </oz-progress>
  `,
});
WithText.args = {
  percent: 24,
  height: 30,
  color: 'ozAccentAlert',
};
