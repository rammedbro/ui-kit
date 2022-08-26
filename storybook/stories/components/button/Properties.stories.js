import OzButton from '@/button';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzButton/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzButton),
    text: 'Button',
  },
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
  components: { OzButton },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-button v-bind="$props" />
  `,
});
