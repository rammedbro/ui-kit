import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForSingleValueProp,
  createScenarioForMultipleValueProp
} from '~e2e/app/scenarios/utils';
import { THEMES } from '@/price/constants';
import { TestMIcon } from '../icons';

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('price', '2500$'),
    createScenarioForSingleValueProp('originalPrice', '3500$', {
      vueData: {
        props: {
          price: '2500$',
        },
      }
    }),
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
    createScenarioForSingleValueProp('originalPriceColor', 'ozTextSecondary', {
      vueData: {
        props: {
          price: '2500$',
          originalPrice: '3500$',
        }
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('originalPriceColor', '#5a6c7d', {
      vueData: {
        props: {
          price: '2500$',
          originalPrice: '3500$',
        }
      },
      description: 'hex'
    }),
    createScenarioForSingleValueProp('strikethroughColor', 'ozTextSecondary', {
      vueData: {
        props: {
          price: '2500$',
          originalPrice: '3500$',
        }
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('strikethroughColor', '#5a6c7d', {
      vueData: {
        props: {
          price: '2500$',
          originalPrice: '3500$',
        }
      },
      description: 'hex'
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          price: '2500$',
        },
      },
      description: 'with price'
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          price: '2500$',
          originalPrice: '3500$',
        },
      },
      description: 'with originalPrice'
    }),
    createScenarioForSingleValueProp('image', 'https://cdn1.ozone.ru/s3/cms/11/tfe/wc700/320_160_2.jpg', {
      vueData: {
        props: {
          price: '2500$',
        },
      },
      description: 'with url'
    }),
    createScenarioForSingleValueProp('image', TestMIcon, {
      vueData: {
        props: {
          price: '2500$',
        },
      },
      description: 'with object'
    }),
    createScenarioForSingleValueProp('image', TestMIcon, {
      vueData: {
        props: {
          price: '2500$',
        },
      },
      description: 'small icon'
    }),
    createScenarioForSingleValueProp('imageTintColor', 'ozAccentAlert', {
      vueData: {
        props: {
          price: '2500$',
          image: TestMIcon,
        },
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('imageTintColor', '#f91155', {
      vueData: {
        props: {
          price: '2500$',
          image: TestMIcon,
        },
      },
      description: 'hex'
    }),
  ]
} as IComponent;
