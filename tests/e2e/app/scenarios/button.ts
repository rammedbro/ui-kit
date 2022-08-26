import { IComponent } from '~e2e/app/scenarios/types';
import {
  createCustomScenario,
  createScenarioForMultipleValueProp,
  createScenarioForSingleValueProp
} from '~e2e/app/scenarios/utils';
import { THEMES, TYPES, LAYOUTS, ICON_POSITIONS, TEXT_ALIGN } from '@/button/constants';
import { SIZES } from '~/constants/sizes';
import { TestSIcon } from '../icons';

const SIZES_BUTTON = Object.values(SIZES).filter((item) => (item === 'm' || item === 'l' || item === 'xl' || item === 'xxl'));

const defaultOptions = {
  vueData: {
    props: {
      text: 'Button',
    }
  }
};

const renderFn = (props) => (h, component, components) => h(
  'div',
  {
    style: {
      height: '200px',
      width: '200px',
      'background-color': '#f91155',
    }
  },
  [
    h(
      components['OzButton'],
      {
        props,
      }
    )
  ]
);

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('text', 'Button'),
    createScenarioForMultipleValueProp('size', SIZES_BUTTON, defaultOptions),
    createScenarioForMultipleValueProp('theme', THEMES, defaultOptions),
    createScenarioForMultipleValueProp('type', TYPES, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('fill', true, defaultOptions),
    createScenarioForSingleValueProp('disabled', true, defaultOptions),
    createScenarioForSingleValueProp('disableInteractive', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('loading', true, defaultOptions),
    createScenarioForSingleValueProp('borderRadius', '10px', defaultOptions),
    createScenarioForSingleValueProp('noMinWidth', true, defaultOptions),
    createScenarioForSingleValueProp('noMinHeight', true, defaultOptions),
    createScenarioForSingleValueProp('fontWeightNormal', true, defaultOptions),
    createScenarioForSingleValueProp('icon', TestSIcon, {
      description: 'without text'
    }),
    createScenarioForSingleValueProp('icon', TestSIcon, {
      ...defaultOptions,
      description: 'with text'
    }),
    createScenarioForMultipleValueProp('iconPosition', ICON_POSITIONS, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          icon: TestSIcon,
        }
      },
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
    createScenarioForSingleValueProp('iconRotate', 50, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          icon: TestSIcon,
        }
      },
    }),
    createScenarioForSingleValueProp('secondLine', 'second line', {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          size: 'xl',
        }
      },
    }),
    createScenarioForSingleValueProp('secondLineText', 'second line text', {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          size: 'xl',
        }
      },
    }),
    createScenarioForMultipleValueProp('layout', LAYOUTS, {
      slots: (h) => ({
        content: Array(10).fill(null).map((item, index) => h(
          'div',
          `text${index}`
        )),
      }),
      vueData: {
        style: {
          width: '150px',
        }
      }
    }),
    createCustomScenario('prop', 'wrap', renderFn({
      wrap: true,
      text: 'Button Button Button Button Button Button Button Button Button Button Button Button',
    }),
    {
      description: 'wrap: true'
    }),
    createCustomScenario('prop', 'wrap', renderFn({
      wrap: false,
      text: 'Button Button Button Button Button Button Button Button Button Button Button Button',
    }),
    {
      description: 'wrap: false'
    }),
    createCustomScenario('prop', 'fillVertical', renderFn({
      fillVertical: true,
      text: 'Button',
    })),
    createCustomScenario('prop', 'fillAuto', renderFn({
      fillAuto: true,
      text: 'Button',
    })),
    createScenarioForMultipleValueProp('textAlign', TEXT_ALIGN, {
      vueData: {
        props: {
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`,
          theme: THEMES.inline,
        }
      },
    }),
    createScenarioForSingleValueProp('href', 'https://www.ozon.ru/', {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          type: TYPES.FAKE_LINK,
        }
      },
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('tabIndex', '1', {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createCustomScenario('prop', 'whiteBackground', renderFn({
      ...defaultOptions.vueData.props,
      theme: THEMES.secondary,
      whiteBackground: true
    })),
  ]
} as IComponent;
