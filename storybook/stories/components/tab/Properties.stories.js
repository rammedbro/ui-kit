import OzTab from '@/tabs/tab';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzTab/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzTab),
    title: 'Заголовок',
    value: 'value',
    index: 0,
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
  components: { OzTab },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-tab v-bind="$props"/>
  `,
});
