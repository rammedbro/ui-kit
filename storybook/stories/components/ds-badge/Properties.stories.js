import DsBadge from '@/ds-badge';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/DsBadge/Properties',
  args: {
    ...sbGetComponentDefaultValues(DsBadge)
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
  components: { DsBadge },
  props: Object.keys(argsGrouped.props),
  template: `
    <ds-badge v-bind="$props" />
  `
});
