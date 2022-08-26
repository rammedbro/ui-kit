import OzRating from '@/rating';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzRating/Properties',
  args: sbGetComponentDefaultValues(OzRating),
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
  components: { OzRating },
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-rating v-bind="$props"/>
  `,
});
