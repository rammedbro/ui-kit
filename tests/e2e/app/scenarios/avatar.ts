import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { THEMES } from '@/avatar/constants';
import { TestSIcon } from '../icons';

export default {
  critical: false,
  scenarios: [
    createScenarioForMultipleValueProp('theme', THEMES),
    createScenarioForSingleValueProp('backgroundColor', 'ozAccentAlert', {
      description: 'name color'
    }),
    createScenarioForSingleValueProp('backgroundColor', '#f91155', {
      description: 'hex'
    }),
    createScenarioForSingleValueProp('initials', 'ФИО'),
    createScenarioForSingleValueProp('icon', {
      image: TestSIcon,
    }, {
      description: 'with object'
    }),
    createScenarioForSingleValueProp('icon', {
      image: 'https://cdn1.ozone.ru/s3/cms/11/tfe/wc700/320_160_2.jpg'
    }, {
      description: 'with url'
    }),
  ]
} as IComponent;
