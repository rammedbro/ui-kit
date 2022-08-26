import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { ICON_POSITION, BORDER_RADIUS_SIZE, TEXT_TRANSFORM } from '@/badge/constants.js';
import { TestSIcon } from '../icons';

import { SIZES } from '~/constants/sizes';

const SIZES_BADGE = Object.values(SIZES).filter((item) => (item === 'xs' || item === 's' || item === 'm'));

const text = 'Рассрочка 0-0-24';
const defaultOptions = {
  vueData: {
    props: {
      text: text,
    }
  }
};

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('text', text),
    createScenarioForMultipleValueProp('textTransform', TEXT_TRANSFORM, defaultOptions),
    createScenarioForSingleValueProp('icon', TestSIcon, {
      description: 'without text'
    }),
    createScenarioForSingleValueProp('icon', TestSIcon, {
      ...defaultOptions,
      description: 'with text'
    }),
    createScenarioForMultipleValueProp('iconPosition', ICON_POSITION, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          icon: TestSIcon,
        }
      },
      description: 'with text'
    }),
    createScenarioForSingleValueProp('iconColor', 'ozAccentAlert', {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          icon: TestSIcon,
        }
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('iconColor', '#f91155', {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          icon: TestSIcon,
        }
      },
      description: 'hex'
    }),
    createScenarioForMultipleValueProp('size', SIZES_BADGE, defaultOptions),
    createScenarioForSingleValueProp('backgroundColor', 'ozAccentAlert', {
      ...defaultOptions,
      description: 'name color'
    }),
    createScenarioForSingleValueProp('backgroundColor', '#f91155', {
      ...defaultOptions,
      description: 'hex'
    }),
    createScenarioForSingleValueProp('color', 'ozAccentAlert', {
      ...defaultOptions,
      description: 'name color'
    }),
    createScenarioForSingleValueProp('color', '#f91155', {
      ...defaultOptions,
      description: 'hex'
    }),
    createScenarioForSingleValueProp('isTextBold', true, defaultOptions),
    createScenarioForSingleValueProp('borderColor', 'ozAccentAlert', {
      ...defaultOptions,
      description: 'name color'
    }),
    createScenarioForSingleValueProp('borderColor', '#f91155', {
      ...defaultOptions,
      description: 'hex'
    }),
    createScenarioForMultipleValueProp('borderRadiusSize', BORDER_RADIUS_SIZE, defaultOptions),
  ]
} as IComponent;
