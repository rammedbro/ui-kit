import OzRange from '@/range';
import { SIZES } from '~/constants/sizes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzRange/Stories',
  component: OzRange,
  args: {
    min: 1,
    max: 100,
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
  components: { OzRange },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    singleValue: 1,
  }),
  template: `
    <oz-range v-model="singleValue"
              v-bind="$props"
              v-on="argsGrouped.events" />
  `,
});

export const Disabled = Default.bind({});
Disabled.args = {
  disabled: true,
};

export const Range = (args, { parameters, argsGrouped }) => ({
  components: { OzRange },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    rangeValue: [20, 80],
  }),
  template: `
    <oz-range v-model="rangeValue"
              v-bind="$props"
              v-on="argsGrouped.events" />
  `,
});

export const OnlyInputs = Range.bind({});
OnlyInputs.args = {
  onlyInputs: true,
};

export const InputsSizeS = Range.bind({});
export const InputsSizeM = Range.bind({});
export const InputsSizeL = Range.bind({});
export const InputsSizeXL = Range.bind({});
export const InputsSizeXXL = Range.bind({});

export const StepFractional = Range.bind({});
StepFractional.args = {
  step: 0.001
};

sbFillStories(
  [null, InputsSizeS, InputsSizeM, InputsSizeL, InputsSizeXL, InputsSizeXXL],
  {
    arStoryArgs: Object.values(SIZES).map(inputsSize => ({ inputsSize })),
    commonArgs: {
      ...OnlyInputs.args,
    }
  },
);
