import DsRadio from '@/ds-radio';
import { SIZES } from '@/ds-radio/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';

export default {
  title: 'Components/DsRadio/Stories',
  component: DsRadio,
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
  components: { DsRadio },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbChecked: args.checked || false
  }),
  template: `
    <ds-radio v-model="sbChecked"
              v-bind="$props"
              v-on="argsGrouped.events">
    </ds-radio>
  `,
});

export const Size500 = Default.bind({});
Size500.args = {
  size: SIZES['500'],
};

export const Size600 = Default.bind({});
Size600.args = {
  size: SIZES['600'],
};

export const StatusChecked = Default.bind({});
StatusChecked.args = {
  checked: true,
};

export const StateDisabled = Default.bind({});
StateDisabled.args = {
  disabled: true,
};

export const StateDisabledStatusChecked = Default.bind({});
StateDisabledStatusChecked.args = {
  disabled: true,
  checked: true
};

export const HasError = Default.bind({});
HasError.args = {
  hasError: true
};

export const HasErrorStatusChecked = Default.bind({});
HasErrorStatusChecked.args = {
  checked: true,
  hasError: true
};

export const UsedInMobWeb = Default.bind({});
UsedInMobWeb.args = {
  usedInMobWeb: true
};
