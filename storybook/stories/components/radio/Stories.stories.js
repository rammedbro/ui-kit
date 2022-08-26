import OzRadio from '@/radio';
import { CONTROL_POSITION } from '@/radio/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzRadio/Stories',
  component: OzRadio,
  args: {
    value: 'Значение',
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
  components: { OzRadio },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-radio v-bind="$props"
              v-on="argsGrouped.events">
    Выбор из одного пункта
    </oz-radio>
  `,
});

export const Disabled = Default.bind({});
Disabled.args = {
  disabled: true,
};

export const HasError = Default.bind({});
HasError.args = {
  hasError: true,
};

export const Fill = Default.bind({});
Fill.args = {
  fill: true,
};

export const ControlPositionLeft = Default.bind({});
export const ControlPositionRight = Default.bind({});

sbFillStories(
  [ControlPositionLeft, ControlPositionRight],
  {
    arStoryArgs: Object.values(CONTROL_POSITION).map(controlPosition => ({ controlPosition }))
  }
);

export const IsMobileTheme = Default.bind({});
IsMobileTheme.args = {
  isMobileTheme: true,
};

export const ButtonTheme = Default.bind({});
ButtonTheme.args = {
  theme: 'button',
  text: 'Выбор из одного варианта'
};

export const PrimaryButtonTheme = Default.bind({});
PrimaryButtonTheme.args = {
  theme: 'primaryButton',
  text: 'Выбор из',
  primaryText: 'одного',
  subtext: 'варианта'
};
