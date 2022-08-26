import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForSingleValueProp,
  createScenarioForMultipleValueProp
} from '~e2e/app/scenarios/utils';
import { THEMES } from '@/price-with-title/constants';

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('price', '2500$'),
    createScenarioForSingleValueProp('priceColor', 'ozTextSecondary', {
      vueData: {
        props: {
          price: '2500$',
        }
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('priceColor', '#5a6c7d', {
      vueData: {
        props: {
          price: '2500$',
        }
      },
      description: 'hex'
    }),
    createScenarioForSingleValueProp('backgroundColor', 'ozAccentAlert', {
      vueData: {
        props: {
          price: '2500$',
        }
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('backgroundColor', '#f91155', {
      vueData: {
        props: {
          price: '2500$',
        }
      },
      description: 'hex'
    }),
    createScenarioForSingleValueProp('title', '× 24 мес', {
      vueData: {
        props: {
          price: '2500$',
        }
      }
    }),
    createScenarioForSingleValueProp('titleColor', 'ozAccentAlert', {
      vueData: {
        props: {
          price: '2500$',
          title: '× 24 мес'
        },
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('titleColor', '#f91155', {
      vueData: {
        props: {
          price: '2500$',
          title: '× 24 мес'
        },
      },
      description: 'hex'
    }),
    createScenarioForSingleValueProp('gradientBackgroundColor', { startColor: '#FFB74B', endColor: '#FF2F6D' }, {
      vueData: {
        props: {
          price: '2500$',
          title: '× 24 мес'
        },
      }
    }),
    createScenarioForSingleValueProp('strikethroughColor', 'ozAccentAlert', {
      vueData: {
        props: {
          price: '2500$',
          title: '× 24 мес'
        },
      }
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          price: '2500$',
        },
      },
      description: 'with price',
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          price: '2500$',
          title: '× 24 мес'
        },
      },
      description: 'with title',
    }),
  ]
} as IComponent;
