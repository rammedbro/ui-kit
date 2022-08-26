import OzTextarea from '@/textarea';
import { SIZES } from '~/constants/sizes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';
import { ic_m_anonymous as IconAnonim } from '@fe-icons';

export default {
  title: 'Components/OzTextarea/Stories',
  component: OzTextarea,
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
  components: { OzTextarea },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbValue: 'Текст',
  }),
  template: `
    <oz-textarea v-model="sbValue"
                 v-bind="$props"
                 v-on="argsGrouped.events" />
  `,
});
export const Placeholder = Default.bind({});
export const SizeM = Default.bind({});
export const SizeL = Default.bind({});
export const SizeXL = Default.bind({});
export const SizeXXL = Default.bind({});

Placeholder.args = {
  placeholder: 'Placeholder',
};

sbFillStories(
  [null, null, SizeM, SizeL, SizeXL, SizeXXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const Height = Default.bind({});
Height.args = {
  height: '200px',
};

export const MaxLength = Default.bind({});
MaxLength.args = {
  maxLength: '10',
};

export const AutoHeightByRows = Default.bind({});
AutoHeightByRows.args = {
  autoHeightByRows: true,
};

export const MaxHeight = (args, { parameters, argsGrouped }) => ({
  components: { OzTextarea },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbValue: 'Текст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\nТекст\n',
  }),
  template: `
    <oz-textarea v-model="sbValue"
                 v-bind="$props"
                 v-on="argsGrouped.events" />
  `,
});

MaxHeight.args = {
  maxHeight: '200px',
};

export const IconColorAndRotation = Default.bind({});
IconColorAndRotation.args = {
  icon: IconAnonim,
  iconColor: 'ozGreenUi',
  iconRotate: 45
};
