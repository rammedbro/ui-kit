import OzField from '@/field';
import DocsTemplate from '~storybook/templates/Stories.mdx';

export default {
  title: 'Components/OzField/Stories',
  component: OzField,
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
  components: { OzField },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-field v-bind="$props"
              v-on="argsGrouped.events" />
  `,
});

export const Label = Default.bind({});
Label.args = {
  label: 'Label text',
};

export const Errors = Default.bind({});
Errors.args = {
  ...Label.args,
  errors: [
    'Ошибка 1',
    'Ошибка 2 ',
  ],
};
