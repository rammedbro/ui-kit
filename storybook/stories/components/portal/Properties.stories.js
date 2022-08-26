import OzPortal from '@/portal/index';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzPortal/Properties',
  args: sbGetComponentDefaultValues(OzPortal),
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
  components: { OzPortal },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: `
    <oz-portal v-bind="$props" v-on="argsGrouped.events">
      <p>Конетнт</p>
    </oz-portal>
  `,
});
