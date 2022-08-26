import DsSubicon from '@/ds-subicon';
import { SIZES } from '@/ds-subicon/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';

import { ic_s_dot as Dot12 } from '@fe-icons';

export default {
  title: 'Components/DsSubicon/Stories',
  component: DsSubicon,
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
  components: { DsSubicon },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    sbSelectedIndex: null,
  }),
  template: `
    <ds-subicon v-bind="$props"
                v-on="argsGrouped.events"/>
  `
});

export const Size400 = Default.bind({});
Size400.args = {
  size: SIZES['400']
};

export const Size450 = Default.bind({});
Size450.args = {
  size: SIZES['450']
};

export const Size500 = Default.bind({});
Size500.args = {
  size: SIZES['500']
};

export const Size600 = Default.bind({});
Size600.args = {
  size: SIZES['600']
};

export const FillColor = Default.bind({});
FillColor.args = {
  fillColor: '--bgActionPrimary'
};

export const Border = Default.bind({});
Border.args = {
  border: true
};

export const BorderColor = Default.bind({});
BorderColor.args = {
  border: true,
  borderColor: '--graphicPositivePrimary'
};

export const Text = Default.bind({});
Text.args = {
  text: 'Ozon is the best. 123'
};

export const TextSize600 = Default.bind({});
TextSize600.args = {
  text: 'Ozon is the best. 123',
  size: SIZES['600']
};

export const TextColor = Default.bind({});
TextColor.args = {
  text: 'Ozon is the best. 123',
  textColor: '--textPositive'
};

export const Icon = Default.bind({});
Icon.args = {
  icon: Dot12
};

export const IconSize600 = Default.bind({});
IconSize600.args = {
  icon: Dot12,
  size: SIZES['600']
};

export const IconColor = Default.bind({});
IconColor.args = {
  icon: Dot12,
  iconColor: '--graphicWarningPrimary'
};
