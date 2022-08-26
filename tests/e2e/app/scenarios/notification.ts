import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForSlot,
  createScenarioForMultipleValueProp,
  createScenarioForSingleValueProp
} from '~e2e/app/scenarios/utils';
import { THEMES } from '@/notification/constants';
import { TestMIcon } from '../icons';

const srcImg = 'https://cdn1.ozone.ru/s3/cms/11/tfe/wc700/320_160_2.jpg';
const defaultOptions = {
  slots: (h) => ({
    default: h('span', 'Notification default slot'),
  })
};

export default {
  critical: false,
  scenarios: [
    createScenarioForSlot('default', (h) => h('span', 'Notification default slot')),
    createScenarioForSlot('footer', (h) => h('span', 'Footer slot'), defaultOptions),
    createScenarioForMultipleValueProp('theme', THEMES, defaultOptions),
    createScenarioForMultipleValueProp('theme', THEMES, {
      ...defaultOptions,
      vueData: {
        props: {
          closeButton: true,
        }
      },
      description: 'with closeButton'
    }),
    createScenarioForSingleValueProp('closeButton', true, defaultOptions),
    createScenarioForSingleValueProp('title', 'TITLE', defaultOptions),
    createScenarioForSingleValueProp('image', srcImg, defaultOptions),
    createScenarioForSingleValueProp('icon', TestMIcon, defaultOptions),
    createScenarioForSingleValueProp('iconColor', 'ozAccentAlert', {
      vueData: {
        props: {
          icon: TestMIcon,
        }
      },
      ...defaultOptions,
      description: 'name color'
    }),
    createScenarioForSingleValueProp('iconColor', '#f91155', {
      vueData: {
        props: {
          icon: TestMIcon,
        }
      },
      ...defaultOptions,
      description: 'hex '
    }),
    createScenarioForSingleValueProp('fill', true, defaultOptions),
    createScenarioForSingleValueProp(
      'buttons',
      [
        { text: 'Кнопка 1' },
        { text: 'Кнопка 2' }
      ],
      {
        ...defaultOptions,
        description: 'default'
      }
    ),
  ]
} as IComponent;
