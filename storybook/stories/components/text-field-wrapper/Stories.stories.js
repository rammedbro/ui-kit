import OzTextFieldWrapper from '@/text-field-wrapper';
import { STYLE_INPUT } from '@/text-field-wrapper/constants.js';
import { SIZES } from '~/constants/sizes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { ic_m_anonymous as IconAnonim } from '@fe-icons';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzTextFieldWrapper/Stories',
  component: OzTextFieldWrapper,
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
  components: { OzTextFieldWrapper },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    defaultStyle: {
      ...STYLE_INPUT[args.size || 'm'],
      'box-sizing': 'border-box',
      'vertical-align': 'top',
      width: '100%',
      border: '0',
      outline: 'none',
    },
  }),
  template: `
    <oz-text-field-wrapper v-bind="$props">
      <input :style="defaultStyle" value="Text"/>
    </oz-text-field-wrapper>
  `,
});

export const HasError = Default.bind({});
HasError.args = {
  hasError: true,
};

export const Disabled = Default.bind({});
Disabled.args = {
  disabled: true,
};

export const Focused = Default.bind({});
Focused.args = {
  focused: true,
};

export const InsideLabel = Default.bind({});
InsideLabel.args = {
  insideLabel: 'Label',
};

export const Placeholder = Default.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
};

export const PlaceholderAndHasValue = Default.bind({});
PlaceholderAndHasValue.args = {
  ...Placeholder.args,
  hasValue: true,
};

export const PlaceholderAndInsideLabel = Default.bind({});
PlaceholderAndInsideLabel.args = {
  ...Placeholder.args,
  insideLabel: 'Label',
};

export const PlaceholderHasValueSizeS = Default.bind({});
export const PlaceholderHasValueSizeM = Default.bind({});
export const PlaceholderHasValueSizeL = Default.bind({});
export const PlaceholderHasValueSizeXL = Default.bind({});
export const PlaceholderHasValueSizeXXL = Default.bind({});

sbFillStories(
  [null, PlaceholderHasValueSizeS, PlaceholderHasValueSizeM, PlaceholderHasValueSizeL, PlaceholderHasValueSizeXL, PlaceholderHasValueSizeXXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size, ...PlaceholderAndHasValue.args, }))
  }
);

export const Loading = Default.bind({});
Loading.args = {
  loading: true,
};

export const LoadingMargin = Default.bind({});
LoadingMargin.args = {
  ...Loading.args,
  loadingMargin: true,
};

export const Icon = Default.bind({});
Icon.args = {
  icon: IconAnonim,
};

export const IconColor = Default.bind({});
IconColor.args = {
  icon: IconAnonim,
  iconColor: 'ozGreenUi',
  iconRotate: 45
};

export const IconLoader = Default.bind({});
IconLoader.args = {
  icon: IconAnonim,
  loading: true,
};

export const SizeS = Default.bind({});
export const SizeM = Default.bind({});
export const SizeL = Default.bind({});
export const SizeXL = Default.bind({});
export const SizeXXL = Default.bind({});

sbFillStories(
  [null, SizeS, SizeM, SizeL, SizeXL, SizeXXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const IconSizeS = Default.bind({});
export const IconSizeM = Default.bind({});
export const IconSizeL = Default.bind({});
export const IconSizeXL = Default.bind({});
export const IconSizeXXL = Default.bind({});

sbFillStories(
  [null, IconSizeS, IconSizeM, IconSizeL, IconSizeXL, IconSizeXXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size, icon: IconAnonim }))
  }
);
