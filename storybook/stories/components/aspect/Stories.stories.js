import OzAspect from '@/aspect';
import { TYPES } from '@/aspect/constants';
import {
  ic_l_lightning_headphones as icLLightningHeadphones,
  ic_m_lightning_headphones as icMLightningHeadphones
} from '@fe-icons';
import DocsTemplate from '~storybook/templates/Stories.mdx';

export default {
  title: 'Components/OzAspect/Stories',
  component: OzAspect,
  args: {
    title: 'Текст',
    selected: false,
    disabled: false
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
  components: { OzAspect },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-aspect
      v-bind="{ ...$props, selected }"
      @click.stop="selected = !selected"
    />
  `,
});

export const DefaultSelected = Default.bind({});
DefaultSelected.args = {
  selected: true
};

export const DefaultDisabled = Default.bind({});
DefaultDisabled.args = {
  disabled: true
};

export const IconWithTitlesAspect = Default.bind({});
IconWithTitlesAspect.args = {
  type: TYPES.ICON_WITH_TITLES_ASPECT,
  icon: icLLightningHeadphones,
  iconColor: 'ozAccentPrimary',
  title: '100 000 ₽',
  subtitle: 'Кабель'
};

export const IconWithTitlesAspectSelected = Default.bind({});
IconWithTitlesAspectSelected.args = {
  ...IconWithTitlesAspect.args,
  selected: true
};

export const IconWithTitlesAspectMob = Default.bind({});
IconWithTitlesAspectMob.args = {
  type: TYPES.ICON_WITH_TITLES_ASPECT,
  icon: icMLightningHeadphones,
  iconColor: 'ozAccentPrimary',
  title: '100 000 ₽',
  subtitle: 'Кабель',
  isMobile: true
};

export const IconWithTitlesAspectMobSelected = Default.bind({});
IconWithTitlesAspectMobSelected.args = {
  ...IconWithTitlesAspectMob.args,
  selected: true
};
