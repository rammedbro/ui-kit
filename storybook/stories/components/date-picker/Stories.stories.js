import OzDatePicker from '@/date-picker';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzDatePicker/Stories',
  component: OzDatePicker,
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
  components: { OzDatePicker },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbValue: null,
  }),
  template: `
    <oz-date-picker v-model="sbValue"
                    v-bind="$props"
                    v-on="argsGrouped.events" />
  `,
});

export const From = Default.bind({});
export const To = Default.bind({});

sbFillStories(
  [From, To],
  {
    arStoryArgs: [
      { from: new Date().getTime() },
      { to: new Date().setDate(30) },
    ]
  }
);
