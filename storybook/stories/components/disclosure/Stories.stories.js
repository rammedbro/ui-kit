import OzDisclosure from '@/disclosure';
import { THEMES } from '@/disclosure/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';

export default {
  title: 'Components/OzDisclosure/Stories',
  component: OzDisclosure,
  args: {},
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

const text = '123';

export const Default = (args, { parameters, argsGrouped }) => ({
  components: { OzDisclosure },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: '<oz-disclosure v-bind="{ ...$props }" />',
});

export const DefaultText = Default.bind({});
DefaultText.args = {
  text: text
};

export const ThemeFresh = Default.bind({});
ThemeFresh.args = {
  theme: THEMES.FRESH
};

export const ThemeFreshText = DefaultText.bind({});
ThemeFreshText.args = {
  theme: THEMES.FRESH,
  text: text
};
