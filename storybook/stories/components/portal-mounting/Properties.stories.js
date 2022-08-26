import OzPortalMounting from '@/portal/mounting';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzPortalMounting/Properties',
  args: sbGetComponentDefaultValues(OzPortalMounting),
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
  components: { OzPortalMounting },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: `
    <oz-portal-mounting v-bind="$props" v-on="argsGrouped.events">
      <p>Конетнт</p>
    </oz-portal-mounting>
  `,
});
