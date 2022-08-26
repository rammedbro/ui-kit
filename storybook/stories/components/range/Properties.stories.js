import OzRange from '@/range';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzRange/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzRange),
    min: 1,
    max: 100,
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
  components: { OzRange },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-range v-bind="$props"/>
  `,
});
