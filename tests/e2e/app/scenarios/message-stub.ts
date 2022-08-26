import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { THEMES } from '@/message-stub/constants';
import { TestSIcon } from '../icons';

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('title', 'Тестовый заголовок'),
    createScenarioForSingleValueProp('subtitle', 'Тестовый подзаголовок', {
      vueData: {
        props: {
          title: 'Тестовый заголовок',
        }
      }
    }),
    createScenarioForSingleValueProp('buttonText', 'Кнопка', {
      vueData: {
        props: {
          title: 'Тестовый заголовок',
          subtitle: 'Тестовый подзаголовок',
        }
      }
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          title: 'Тестовый заголовок',
          subtitle: 'Тестовый подзаголовок',
        }
      }
    }),
    createScenarioForSingleValueProp('icon', TestSIcon, {
      vueData: {
        props: {
          title: 'Тестовый заголовок',
          subtitle: 'Тестовый подзаголовок',
          theme: THEMES.INFO,
        }
      }
    }),
    createScenarioForSingleValueProp('iconColor', 'ozYellowBrand', {
      vueData: {
        props: {
          title: 'Тестовый заголовок',
          subtitle: 'Тестовый подзаголовок',
          theme: THEMES.INFO,
          icon: TestSIcon
        }
      },
      description: 'name color'
    }),
    createScenarioForSingleValueProp('iconColor', '#ffd540', {
      vueData: {
        props: {
          title: 'Тестовый заголовок',
          subtitle: 'Тестовый подзаголовок',
          theme: THEMES.INFO,
          icon: TestSIcon
        }
      },
      description: 'hex'
    }),
  ]
} as IComponent;
