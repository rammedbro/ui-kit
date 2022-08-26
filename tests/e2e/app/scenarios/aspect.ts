import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForMultipleValueProp,
  createScenarioForSingleValueProp,
} from '~e2e/app/scenarios/utils';

import { TYPES } from '@/aspect/constants';
import { TestSIcon } from '../icons';

const defaultOptions = {
  vueData: {
    props: {
      title: 'Заголовок',
    }
  }
};

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('title', 'Заголовок'),

    createScenarioForSingleValueProp('selected', true, defaultOptions),

    createScenarioForSingleValueProp('disabled', true, defaultOptions),

    createScenarioForMultipleValueProp('isMobile', [true, false], {
      description: 'Type iconWithTitlesAspect',
      vueData: {
        props: {
          type: TYPES.ICON_WITH_TITLES_ASPECT,
          icon: TestSIcon,
          title: 'Заголовок',
          subtitle: 'Подзаголовок'
        }
      }
    })
  ]
} as IComponent;
