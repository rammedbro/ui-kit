import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';
import { TAB_SIZES, TAB_THEMES, COUNTER_THEMES } from '@/tabs/constants';

const defaultOptions = {
  vueData: {
    props: {
      tabs: [
        {
          title: 'Tab 1',
          value: 'https://www.ozon.ru/',
        },
        {
          title: 'Tab 2',
          value: 'tab2',
        },
        {
          title: 'Tab 3',
          value: 'tab3',
        }
      ]
    }
  },
};
const OptionsWithCounter = {
  vueData: {
    props: {
      tabs: [
        {
          title: 'Tab 1',
          value: 'https://www.ozon.ru/',
          counter: '10'
        },
        {
          title: 'Tab 2',
          value: 'tab2',
          counter: '15'
        },
        {
          title: 'Tab 3',
          value: 'tab3',
          counter: '0'
        }
      ]
    }
  },
};

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('value', 'tab2', defaultOptions),
    createScenarioForSingleValueProp('tabs', [
      {
        title: 'Tab 1',
        value: 'tab1',
      },
      {
        title: 'Tab 2',
        value: 'tab2',
      },
    ]),
    createScenarioForMultipleValueProp('theme', TAB_THEMES, defaultOptions),
    createScenarioForMultipleValueProp('tabSize', TAB_SIZES, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          theme: TAB_THEMES.tab,
        }
      },
    }),
    createScenarioForSingleValueProp('loading', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('fill', true, defaultOptions),
    createScenarioForSingleValueProp('withBorder', true, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          theme: TAB_THEMES.tab,
        }
      },
    }),
    createScenarioForSingleValueProp('likeLink', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForMultipleValueProp('counterTheme', COUNTER_THEMES, {
      vueData: {
        props: {
          ...OptionsWithCounter.vueData.props,
          theme: TAB_THEMES.tab,
        }
      },
      description: 'theme tab'
    }),
    createScenarioForMultipleValueProp('counterTheme', COUNTER_THEMES, {
      vueData: {
        props: {
          ...OptionsWithCounter.vueData.props,
          theme: TAB_THEMES.primary,
        }
      },
      description: 'theme primary'
    }),
    createScenarioForMultipleValueProp('counterTheme', COUNTER_THEMES, {
      vueData: {
        props: {
          ...OptionsWithCounter.vueData.props,
          theme: TAB_THEMES.tag,
        }
      },
      description: 'theme tag'
    }),
    createScenarioForSingleValueProp('wrap', true, {
      vueData: {
        props: {
          tabs: [
            {
              title: `Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
              Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
              Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
              Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2`,
              value: 'tab2',
            },
            {
              title: 'Tab 3',
              value: 'tab3',
            }
          ]
        }
      },
      description: 'true'
    }),
    createScenarioForSingleValueProp('wrap', false, {
      vueData: {
        props: {
          tabs: [
            {
              title: `Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
              Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
              Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2
              Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2  Tab 2 Tab 2 Tab 2 Tab 2 Tab 2 Tab 2`,
              value: 'tab2',
            },
            {
              title: 'Tab 3',
              value: 'tab3',
            }
          ]
        }
      },
      description: 'false'
    }),
    createScenarioForSingleValueProp('activeTabTimeout', 50, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          value: defaultOptions.vueData.props.tabs[0].value,
        }
      },
      description: 'false'
    }),
    createScenarioForSingleValueProp('backgroundColor', 'ozCtrlPositivePale', {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          theme: TAB_THEMES.accent,
          value: defaultOptions.vueData.props.tabs[0].value,
        }
      },
    }),
    createScenarioForSingleValueProp('selectedBackgroundColor', 'ozCtrlMarketing', {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          theme: TAB_THEMES.accent,
          value: defaultOptions.vueData.props.tabs[0].value,
        }
      },
    })
  ]
} as IComponent;
