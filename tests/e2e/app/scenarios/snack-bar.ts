import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp, createScenarioForSlot } from '~e2e/app/scenarios/utils';
import { POSITION, TYPES } from '@/snack-bar/constants';
import { TestMIcon } from '../icons';

const defaultOptions = {
  vueData: {
    props: {
      active: true,
      infinity: true
    }
  },
  slots: (h) => ({
    default: h('span', 'Snack Bar'),
  })
};

export default {
  critical: false,
  scenarios: [
    createScenarioForSlot('default', () => 'Слот по умолчанию', {
      vueData: {
        props: {
          active: true,
          infinity: true
        }
      },
    }),
    createScenarioForSingleValueProp('isMobileVers', true, defaultOptions),
    createScenarioForSingleValueProp('id', 'component', {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('active', true, {
      slots: (h) => ({
        default: h('span', 'Snack Bar'),
      }),
    }),
    createScenarioForMultipleValueProp('position', POSITION, defaultOptions),
    createScenarioForMultipleValueProp('type', TYPES, (item, index) => ({
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          coords: {
            top: (index * 100) + 'px',
          }
        },
      },
      slots: (h) => ({
        default: h('span', 'Snack Bar'),
      })
    })),
    createScenarioForSingleValueProp('width', '500px', {
      ...defaultOptions,
      description: '500px'
    }),
    createScenarioForSingleValueProp('width', 'auto', {
      ...defaultOptions,
      description: 'auto'
    }),

    createScenarioForSingleValueProp('timeout', 10000, {
      vueData: {
        props: {
          active: true,
        }
      },
      slots: (h) => ({
        default: h('span', 'Snack Bar'),
      }),
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('infinity', true, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('image', 'https://cdn1.ozone.ru/s3/cms/0c/ta4/wc300/672_672_1.jpg', defaultOptions),
    createScenarioForSingleValueProp('title', 'TITLE', defaultOptions),
    createScenarioForSingleValueProp('icon', TestMIcon, defaultOptions),
    createScenarioForSingleValueProp('iconColor', 'ozCredit', {
      ...defaultOptions,
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          icon: TestMIcon,
        }
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('iconColor', '#ffd540', {
      ...defaultOptions,
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          icon: TestMIcon,
        }
      },
      description: 'hex'
    }),
    createScenarioForSingleValueProp('coords', {
      left: '100px',
      top: '100px',
    }, defaultOptions),
    createScenarioForSingleValueProp('coords', {}, {
      ...defaultOptions,
      description: 'empty object'
    }),
  ],
} as IComponent;
