import OzModal from '@/modal';
import Component from './Stories.stories';
import OzButton from '@/button';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzModal/Properties',
  args: sbGetComponentDefaultValues(OzModal),
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
  components: { OzModal, OzButton },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    display: false,
  }),
  template: `
    <div>
    <oz-button text="Открыть"
               @click="display = true"/>

    <oz-modal v-if="display"
              v-bind="$props"
              @close="display = false">
      <h1>Контент</h1>
    </oz-modal>
    </div>
  `,
});
