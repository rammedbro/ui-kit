import OzSelectMobile from '@/select-mobile';
import { SIZES } from '~/constants/sizes';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';

export default {
  title: 'Components/OzSelectMobile/Stories',
  component: OzSelectMobile,
  args: {
    size: 'm',
    options: [
      { value: 'AU', label: 'Australia' },
      { value: 'CA', label: 'Canada' },
      { value: 'CN', label: 'China' },
      { value: 'DE', label: 'Germany' },
      { value: 'JP', label: 'Japan' },
      { value: 'MX', label: 'Mexico' },
      { value: 'CH', label: 'Switzerland' },
      { value: 'US', label: 'United States' },
      { value: 'VR', label: 'Very very very very very very long string' },
    ],
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
  components: { OzSelectMobile },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbValue: null,
  }),
  template: `
    <oz-select-mobile v-model="sbValue"
                      v-bind="$props"
                      v-on="argsGrouped.events" />
  `,
});

export const SizeM = Default.bind({});
export const SizeL = Default.bind({});
export const SizeXL = Default.bind({});
export const SizeXXL = Default.bind({});

sbFillStories(
  [null, null, SizeM, SizeL, SizeXL, SizeXXL],
  {
    arStoryArgs: Object.values(SIZES).map(size => ({ size }))
  }
);

export const Loading = Default.bind({});
export const Disabled = Default.bind({});
export const Placeholder = Default.bind({});

sbFillStories(
  [Loading, Disabled, Placeholder],
  {
    arStoryArgs: [
      { loading: true },
      { disabled: true },
      { placeholder: 'Placeholder' }
    ]
  }
);

export const Filterable = Default.bind({});
Filterable.args = {
  ...Default.args,
  filterable: false,
};
