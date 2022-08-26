import OzSnackBar from '@/snack-bar';
import OzButton from '@/button';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzSnackBar/Properties',
  args: sbGetComponentDefaultValues(OzSnackBar),
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
  components: { OzSnackBar, OzButton },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    argsGrouped,
    display: false,
  }),
  template: `
  <div>
    <oz-button text="Открыть SnackBar"
              @click="display = true" />
    <oz-snack-bar v-if="display"
                  v-bind="$props"
                  :active="true"
                  v-on="argsGrouped.events"
                  @close="display = false">
      <span>SnackBar</span>
    </oz-snack-bar>
  </div>
  `,
});
