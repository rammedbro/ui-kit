import OzBadge from '@/badge';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzBadge/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzBadge),
    text: 'Badge',
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
  components: { OzBadge },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-badge v-bind="$props" />
  `,
});
