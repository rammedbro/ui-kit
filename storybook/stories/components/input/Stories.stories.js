import OzInput from '@/input';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';
import { ic_m_edit as IconEdit } from '@fe-icons';

export default {
  title: 'Components/OzInput/Stories',
  component: OzInput,
  args: {
    value: 'Текст',
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
  components: { OzInput },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-input v-bind="$props"
              v-on="argsGrouped.events" />
  `,
});

export const Mask = Default.bind({});
Mask.args = {
  value: '79009009090',
  mask: '+7 (###) ###-##-##',
};

export const Loading = Default.bind({});
Loading.args = {
  loading: true,
};

export const Icon = Default.bind({});
Icon.args = {
  icon: IconEdit,
};

export const HasError = Default.bind({});
HasError.args = {
  hasError: true,
};

export const Autofocus = Default.bind({});
Autofocus.args = {
  autofocus: true,
};

export const MaxLength = Default.bind({});
MaxLength.args = {
  value: '123456789',
  maxLength: '8',
  placeholder: 'Максимальное количество символов - 8'
};

export const InsideLabel = Default.bind({});
InsideLabel.args = {
  insideLabel: 'Label',
};

export const SizeS = Default.bind({});
export const SizeM = Default.bind({});
export const SizeL = Default.bind({});
export const SizeXL = Default.bind({});
export const SizeXXL = Default.bind({});

sbFillStories(
  [SizeS, SizeM, SizeL, SizeXL, SizeXXL],
  {
    arStoryArgs: ['s', 'm', 'l', 'xl', 'xxl'].map(size => ({ size }))
  }
);

export const PlaceholderSizeS = Default.bind({});
export const PlaceholderSizeM = Default.bind({});
export const PlaceholderSizeL = Default.bind({});
export const PlaceholderSizeXL = Default.bind({});
export const PlaceholderSizeXXL = Default.bind({});

sbFillStories(
  [PlaceholderSizeS, PlaceholderSizeM, PlaceholderSizeL, PlaceholderSizeXL, PlaceholderSizeXXL],
  {
    arStoryArgs: ['s', 'm', 'l', 'xl', 'xxl'].map(size => ({ size, placeholder: 'placeholder' }))
  }
);
