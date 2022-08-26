import OzTag from '@/tag';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzTag/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzTag),
    text: 'Text',
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
  components: { OzTag },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped }),
  template: `
    <oz-tag v-bind="$props">
    <template v-if="argsGrouped.slots.content"
              v-slot:content>
      {{ argsGrouped.slots.content }}
    </template>
    </oz-tag>
  `,
});
