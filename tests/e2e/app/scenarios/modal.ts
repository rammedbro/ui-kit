import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForSingleValueProp, createScenarioForSlot } from '~e2e/app/scenarios/utils';
import { THEMES } from '@/modal/constants';

const defaultOptions = {
  slots: (h) => ({
    default: h('span', 'Слот по умолчанию'),
  })
};

export default {
  critical: true,
  scenarios: [
    createScenarioForSlot('default', () => 'Слот по умолчанию'),
    createScenarioForSingleValueProp('withPortal', false, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('theme', THEMES.DEFAULT, {
      ...defaultOptions,
      description: 'DEFAULT'
    }),
    createScenarioForSingleValueProp('theme', THEMES.EMPTY, {
      ...defaultOptions,
      description: 'EMPTY'
    }),
    createScenarioForSingleValueProp('theme', THEMES.EMPTY, {
      ...defaultOptions,
      vueData: {
        props: {
          isMobileTheme: true,
        }
      },
      description: 'Mobile EMPTY'
    }),
    createScenarioForSingleValueProp('theme', THEMES.FULL_SCREEN, {
      ...defaultOptions,
      description: 'FULL_SCREEN'
    }),
    createScenarioForSingleValueProp('theme', THEMES.BOTTOM, {
      ...defaultOptions,
      description: 'BOTTOM'
    }),
    createScenarioForSingleValueProp('theme', THEMES.BOTTOM, {
      ...defaultOptions,
      vueData: {
        props: {
          isMobileTheme: true,
        }
      },
      description: 'Mobile BOTTOM'
    }),
    createScenarioForSingleValueProp('centered', false, defaultOptions),
    createScenarioForSingleValueProp('isMobileTheme', true, defaultOptions),
    createScenarioForSingleValueProp('closeButton', false, defaultOptions),
    createScenarioForSingleValueProp('closeButtonPosition', 'outside', defaultOptions),
    createScenarioForSingleValueProp('scrollingWrapper', false, {
      slots: (h) => ({
        default: [
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
          h('p', 'Слот по умолчанию'),
        ]
      })
    }),
    createScenarioForSingleValueProp('opaqueBackground', true, defaultOptions),
    createScenarioForSingleValueProp('forceShow', true, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('noSelfClose', true, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('autoFocus', true, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('name', 'portal', {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('append', true, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('multiple', true, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('order', 1, {
      ...defaultOptions,
      vueData: {
        props: {
          multiple: true,
        }
      },
      suites: ['ssr']
    }),
  ]
} as IComponent;
