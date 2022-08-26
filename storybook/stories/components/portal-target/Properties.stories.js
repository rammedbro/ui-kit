import OzPortalTarget from '@/portal/target';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzPortalTarget/Properties',
  args: sbGetComponentDefaultValues(OzPortalTarget),
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
  components: { OzPortalTarget },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: `
    <oz-portal-target v-bind="$props" v-on="argsGrouped.events"/>
  `,
});
