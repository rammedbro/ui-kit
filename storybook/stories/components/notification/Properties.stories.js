import OzNotification from '@/notification';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzNotification/Properties',
  args: sbGetComponentDefaultValues(OzNotification),
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
  components: { OzNotification },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: `
    <oz-notification v-bind="$props">
    {{ argsGrouped.slots.default }}

    <template v-slot:footer>
      {{ argsGrouped.slots.footer }}
    </template>
    </oz-notification>
  `,
});
