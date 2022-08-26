import OzCheckbox from '@/checkbox';
import { THEMES, CONTROL_POSITIONS, LABEL_VERTICAL_ALIGN } from '@/checkbox/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzCheckbox/Stories',
  component: OzCheckbox,
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
  components: { OzCheckbox },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbChecked: false,
  }),
  template: `
    <oz-checkbox v-model="sbChecked"
                 v-bind="$props"
                 v-on="argsGrouped.events">
    Текст
    </oz-checkbox>
  `,
});

export const Checkbox = Default.bind({});
Checkbox.args = {
  theme: THEMES.CHECKBOX,
};

export const CheckboxDisabled = Default.bind({});
CheckboxDisabled.args = {
  ...Checkbox.args,
  disabled: true,
};

export const CheckboxControlPositionLeft = Default.bind({});
export const CheckboxControlPositionRight = Default.bind({});

sbFillStories(
  [CheckboxControlPositionLeft, CheckboxControlPositionRight],
  {
    arStoryArgs: Object.values(CONTROL_POSITIONS).map(controlPosition => ({ controlPosition })),
    commonArgs: {
      ...Checkbox.args,
    }
  }
);

export const CheckboxHasError = Default.bind({});
CheckboxHasError.args = {
  ...Checkbox.args,
  hasError: true,
};

const TwoRowsTemplate = (args, { parameters, argsGrouped }) => ({
  components: { OzCheckbox },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbChecked: false,
  }),
  template: `
    <oz-checkbox v-bind="$props" v-model="sbChecked" v-on="argsGrouped.events">
      Первая строка<br>
      Вторая строка
    </oz-checkbox>
  `,
});

export const CheckboxLabelVerticalAlignStart = TwoRowsTemplate.bind({});
export const CheckboxLabelVerticalAlignCenter = TwoRowsTemplate.bind({});
export const CheckboxLabelVerticalAlignEnd = TwoRowsTemplate.bind({});

sbFillStories(
  [
    CheckboxLabelVerticalAlignStart,
    CheckboxLabelVerticalAlignCenter,
    CheckboxLabelVerticalAlignEnd,
  ],
  {
    arStoryArgs: Object.values(LABEL_VERTICAL_ALIGN).map(labelVerticalAlign => ({ labelVerticalAlign })),
    commonArgs: {
      ...Checkbox.args,
    }
  }
);

export const CheckboxName = Default.bind({});
CheckboxName.args = {
  ...Checkbox.args,
  name: 'Имя',
};

export const Toggle = Default.bind({});
Toggle.args = {
  theme: THEMES.TOGGLE,
};

export const ToggleChecked = Default.bind({});
ToggleChecked.args = {
  ...Toggle.args,
  checked: true,
};

export const ToggleDisabled = Default.bind({});
ToggleDisabled.args = {
  ...Toggle.args,
  disabled: true,
};

export const ToggleControlPositionLeft = Default.bind({});
export const ToggleControlPositionRight = Default.bind({});

sbFillStories(
  [ToggleControlPositionLeft, ToggleControlPositionRight],
  {
    arStoryArgs: Object.values(CONTROL_POSITIONS).map(controlPosition => ({ controlPosition })),
    commonArgs: {
      ...Toggle.args,
    }
  }
);

export const ToggleHasError = Default.bind({});
ToggleHasError.args = {
  ...Toggle.args,
  hasError: true,
};

export const ToggleLabelVerticalAlignStart = TwoRowsTemplate.bind({});
export const ToggleLabelVerticalAlignCenter = TwoRowsTemplate.bind({});
export const ToggleLabelVerticalAlignEnd = TwoRowsTemplate.bind({});

sbFillStories(
  [
    ToggleLabelVerticalAlignStart,
    ToggleLabelVerticalAlignCenter,
    ToggleLabelVerticalAlignEnd,
  ],
  {
    arStoryArgs: Object.values(LABEL_VERTICAL_ALIGN).map(labelVerticalAlign => ({ labelVerticalAlign })),
    commonArgs: {
      ...Toggle.args,
    }
  }
);

export const ToggleName = Default.bind({});
ToggleName.args = {
  ...Toggle.args,
  name: 'Имя',
};
