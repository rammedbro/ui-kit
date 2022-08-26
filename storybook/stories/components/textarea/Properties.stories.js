import OzTextarea from '@/textarea';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzTextarea/Properties',
  args: sbGetComponentDefaultValues(OzTextarea),
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
  components: { OzTextarea },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    argsGrouped,
    sbValue: null,
  }),
  template: `
    <oz-textarea v-model="sbValue" v-bind="$props">
    {{ argsGrouped.slots.default }}
    </oz-textarea>
  `,
});
