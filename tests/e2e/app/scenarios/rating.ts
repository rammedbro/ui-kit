import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { SIZES } from '~/constants/sizes';

const SIZES_RATING = Object.values(SIZES).filter((item) => (item === 's' || item === 'm' || item === 'l' || item === 'xl'));

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('value', 4),
    createScenarioForSingleValueProp('readOnly', true, {
      vueData: {
        props: {
          value: 4.5,
        }
      }
    }),
    createScenarioForSingleValueProp('withAnimation', true, {
      vueData: {
        props: {
          value: 4,
        }
      }
    }),
    createScenarioForSingleValueProp('altText', true, {
      vueData: {
        props: {
          value: 4,
          readOnly: true,
        }
      },
    }),
    createScenarioForSingleValueProp('reviewCount', 100, {
      vueData: {
        props: {
          value: 4,
          readOnly: true,
          altText: true,
        }
      }
    }),
    createScenarioForMultipleValueProp('size', SIZES_RATING, {
      vueData: {
        props: {
          value: 4,
        }
      },
      description: 'without reviewCount'
    }),
    createScenarioForMultipleValueProp('size', SIZES_RATING, {
      vueData: {
        props: {
          value: 4,
          readOnly: true,
          altText: true,
          reviewCount: 100,
        }
      },
      description: 'with reviewCount'
    })
  ]
} as IComponent;
