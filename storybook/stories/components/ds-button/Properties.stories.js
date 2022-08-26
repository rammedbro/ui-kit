import DsButton from '@/ds-button';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';
import {
  ic_s_home as icSHome,
  ic_m_home as icMHome,
} from '@fe-icons';
import { SIZES } from '@/ds-button/constants.js';

export default {
  ...Component,
  title: 'Components/DsButton/Properties',
  args: {
    ...sbGetComponentDefaultValues(DsButton),
    title: 'Button',
    leftIcon: Component.args.size === SIZES['400'] ? icSHome : icMHome,
    rightIcon: Component.args.size === SIZES['400'] ? icSHome : icMHome,
  },
  parameters: {
    viewMode: 'docs',
    controls: {
      disable: true,
    },
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

export const Properties = (args, { argsGrouped }) => {
  return ({
    components: { DsButton },
    props: Object.keys(argsGrouped.props),
    data: () => ({ argsGrouped, SIZES, icSHome }),
    template: `
      <div>
        <ds-button v-bind="$props" :leftIcon="icSHome" :rightIcon="icSHome" v-if="size === SIZES['400']"/>
        <ds-button v-bind="$props"  v-else/>
      </div>
    `
  });
};
