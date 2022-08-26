import OzRadioGroup from '@/radio-group';
import { LAYOUT, CONTROL_POSITION } from '@/radio-group/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzRadioGroup/Stories',
  component: OzRadioGroup,
  args: {
    options: [
      { label: 'Быть', value: '1', text: 'списать', subtext: '90 баллов' },
      { label: 'Или не быть', value: '-1', text: 'начислить', subtext: '13 баллов' },
      { label: 'Не хочу решать', value: '0', text: 'списать', subtext: '5 баллов' },
    ],
    theme: 'default'
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    docs: {
      page: DocsTemplate,
    },
  },
};

export const Default = (args, { parameters, argsGrouped }) => ({
  components: { OzRadioGroup },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-radio-group v-bind="$props"
                    v-on="argsGrouped.events" />
  `,
});

export const LayoutHorizontal = Default.bind({});
export const LayoutVertical = Default.bind({});

sbFillStories(
  [LayoutHorizontal, LayoutVertical],
  {
    arStoryArgs: Object.values(LAYOUT).map(layout => ({ layout }))
  }
);

export const ControlPositionLeft = Default.bind({});
export const ControlPositionRight = Default.bind({});

sbFillStories(
  [ControlPositionLeft, ControlPositionRight],
  {
    arStoryArgs: Object.values(CONTROL_POSITION).map(controlPosition => ({ controlPosition }))
  }
);

export const Fill = Default.bind({});
Fill.args = {
  fill: true,
};

export const Name = Default.bind({});
Name.args = {
  name: 'Custom radio group name'
};

export const Button = Default.bind({});
Button.args = {
  theme: 'button',
  options: [
    { text: 'Списать 10 P', value: '1' },
    { primaryText: 'Начислить 10 P', value: '0' },
  ],
};

export const PrimaryButton = Default.bind({});
PrimaryButton.args = {
  theme: 'primaryButton',
  options: [
    { text: 'Списать', primaryText: '10 P', subtext: 'Списать', value: '1' },
    { text: 'Начислить длинный текст Начислить длинный текст Начислить длинный текст Начислить длинный текст', subtext: '10 Р', value: '-1' },
    { text: 'Начислить', subtext: '10 Р длинный текст 10 Р длинный текст 10 Р длинный текст 10 Р длинный текст 10 Р длинный текст 10 Р длинный текст', value: '0', disabled: true }
  ],
};
