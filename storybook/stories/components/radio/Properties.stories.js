import OzRadio from '@/radio';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';
import { RADIO_THEMES } from '@/radio/constants';

export default {
  ...Component,
  title: 'Components/OzRadio/Properties',
  args: {
    ...sbGetComponentDefaultValues(OzRadio),
    value: 'Значение',
    text: 'Выбор из',
    primaryText: '1',
    subtext: 'варианта'
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
  components: { OzRadio },
  props: Object.keys(argsGrouped.props),
  data: () => ({ argsGrouped, RADIO_THEMES }),
  template: `
    <div>
      <oz-radio v-bind="$props" v-if="theme === RADIO_THEMES.BUTTON"></oz-radio>
      <oz-radio v-bind="$props" v-else>{{ argsGrouped.slots.default }}</oz-radio>
    </div>
  `,
});
