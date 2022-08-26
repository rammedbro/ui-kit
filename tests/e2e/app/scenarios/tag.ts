import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForScopedSlot, createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { THEMES } from '@/tag/constants';
import { TestSIcon } from '../icons';

const defaultOptions = {
  vueData: {
    props: {
      text: 'Tag',
    }
  },
};

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('wrap', true, {
      vueData: {
        props: {
          text: `Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
                Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
                Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
                Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2`,
        },
      },
      description: 'true',
    }),
    createScenarioForSingleValueProp('wrap', false, {
      vueData: {
        props: {
          text: `Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
                Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
                Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
                Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2`,
        },
      },
      description: 'false',
    }),
    createScenarioForSingleValueProp('href', 'https://www.ozon.ru/', {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForMultipleValueProp('theme', THEMES, defaultOptions),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          text: 'Tag',
          counter: '12',
        }
      },
      description: 'with counter',
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          text: 'Tag',
          closeButton: true,
        }
      },
      description: 'with closeButton',
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          text: 'Tag',
          disabled: true,
        }
      },
      description: 'with disabled',
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          text: 'Tag',
          icon: TestSIcon,
        }
      },
      description: 'with icon',
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          text: 'Tag',
          icon: TestSIcon,
          counter: '12',
        }
      },
      description: 'with icon and counter',
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          text: 'Tag',
          counter: '12',
          icon: TestSIcon,
          closeButton: true,
        }
      },
      description: 'with text, counter, icon and closeButton',
    }),
    createScenarioForMultipleValueProp('theme', THEMES, {
      vueData: {
        props: {
          text: '',
          icon: TestSIcon,
          closeButton: true,
        }
      },
      description: 'with only icon and closeButton',
    }),
    createScenarioForScopedSlot('content', () => 'Tag slot')
  ]
} as IComponent;
