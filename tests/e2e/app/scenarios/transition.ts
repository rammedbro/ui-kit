import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForSingleValueProp,
  createScenarioForMultipleValueProp,
} from '~e2e/app/scenarios/utils';
import { DELAY_VARIANTS, SPEED_VARIANTS, MODE_VARIANTS } from '@/transition/constants';

const defaultOptions = {
  slots: (h) => ({
    default: h(
      'img',
      {
        attrs: {
          src: 'https://ichef.bbci.co.uk/news/410/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg',
        },
      }
    ),
  })
};

export default {
  critical: false,
  scenarios: [
    createScenarioForMultipleValueProp('speed', SPEED_VARIANTS, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForMultipleValueProp('delay', DELAY_VARIANTS, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('onlyFade', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('appear', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForMultipleValueProp('mode', MODE_VARIANTS, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
  ]
} as IComponent;
