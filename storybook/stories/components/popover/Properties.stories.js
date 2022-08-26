import OzPopover from '@/popover';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzPopover/Properties',
  args: sbGetComponentDefaultValues(OzPopover),
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
  components: { OzPopover },
  provide: argsGrouped.inject,
  props: Object.keys(argsGrouped.props),
  template: `
    <oz-popover v-bind="$props">
    Текст

    <template v-slot:popover>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </template>
    </oz-popover>
  `,
});
