import OzMessageStub from '@/message-stub';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzMessageStub/Properties',
  args: sbGetComponentDefaultValues(OzMessageStub),
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
  components: { OzMessageStub },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: `
    <oz-message-stub v-bind="$props">
    <template v-slot:button>
      {{ argsGrouped.slots.button }}
    </template>
    </oz-message-stub>
  `,
});
