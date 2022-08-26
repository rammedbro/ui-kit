import OzTextFieldWrapper from '@/text-field-wrapper';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';
import { STYLE_INPUT } from '@/text-field-wrapper/constants.js';

export default {
  ...Component,
  title: 'Components/OzTextFieldWrapper/Properties',
  args: sbGetComponentDefaultValues(OzTextFieldWrapper),
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
  components: { OzTextFieldWrapper },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    argsGrouped,
    defaultStyle: {
      ...STYLE_INPUT[args.size || 'm'],
      'box-sizing': 'border-box',
      'vertical-align': 'top',
      width: '100%',
      border: '0',
      outline: 'none',
    }
  }),
  template: `
    <oz-text-field-wrapper v-bind="$props">
      <template v-slot:topContent>{{ argsGrouped.slots.topContent }}</template>
      <input v-slot:default :style="defaultStyle" value="Text">
    </oz-text-field-wrapper>
  `,
});
