import DsToggle from '@/ds-toggle';
import DocsTemplate from '~storybook/templates/Stories.mdx';

export default {
  title: 'Components/DsToggle/Stories',
  component: DsToggle,
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
  components: { DsToggle },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbChecked: args.checked || false
  }),
  template: `
    <ds-toggle v-model="sbChecked"
               v-bind="$props"
               v-on="argsGrouped.events">
    </ds-toggle>
  `,
});

export const StatusChecked = Default.bind({});
StatusChecked.args = {
  checked: true
};

export const StateDisabled = Default.bind({});
StateDisabled.args = {
  disabled: true,
};

export const StateDisabledStatusChecked = Default.bind({});
StateDisabledStatusChecked.args = {
  checked: true,
  disabled: true
};
