import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForMultipleValueProp,
  createScenarioForSingleValueProp,
  createScenarioForSlot,
  createScenarioForScopedSlot,
} from '~e2e/app/scenarios/utils';
import { SIZES } from '~/constants/sizes';
import { COLOR_THEMES } from '~/constants/color-themes';
import { THEMES, PLACEMENT, TRIGGER } from '@/popover/constants';

const SIZES_PUDDING = Object.values(SIZES).filter((item) => (item === 'm' || item === 'l'));

const defaultOptions = {
  vueData: {
    scopedSlots: {
      popover: () => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
  },
  slots: (h) => ({
    default: h('div', 'TEXT')
  })
};

export default {
  critical: false,
  scenarios: [
    createScenarioForSlot('default', () => 'Слот по умолчанию', {
      vueData: {
        scopedSlots: {
          popover: () => `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.`
        },
      },
    }),
    createScenarioForScopedSlot('popover', () => 'Popover slot', {
      slots: (h) => ({
        default: h('div', 'TEXT')
      })
    }),
    createScenarioForSingleValueProp('forceShow', true, defaultOptions),
    createScenarioForMultipleValueProp('theme', THEMES, ({
      vueData: {
        props: {
          forceShow: true,
        },
        scopedSlots: {
          popover: () => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
      },
      slots: (h) => ({
        default: h(
          'div',
          {
            style: {
              'margin-top': '100px'
            }
          },
          'TEXT'
        )
      })
    })),
    createScenarioForMultipleValueProp('theme', THEMES, ({
      vueData: {
        props: {
          forceShow: true,
          paddingSize: SIZES.M,
        },
        scopedSlots: {
          popover: () => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
      },
      slots: (h) => ({
        default: h(
          'div',
          {
            style: {
              'margin-top': '100px'
            }
          },
          'TEXT'
        )
      }),
      description: 'with paddingSize = m'
    })),
    createScenarioForMultipleValueProp('colorTheme', COLOR_THEMES, {
      vueData: {
        ...defaultOptions.vueData,
        props: {
          forceShow: true,
        }
      },
      slots: (h) => ({
        default: h(
          'div',
          {
            style: {
              'margin-top': '120px'
            }
          },
          'TEXT'
        )
      })
    }),

    createScenarioForMultipleValueProp('placement', PLACEMENT, (item, index) => ({
      vueData: {
        style: {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: (index * 250) + 'px',
        },
        props: {
          flip: false,
          forceShow: true,
        },
        scopedSlots: {
          popover: () => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
      },
      slots: (h) => ({
        default: h(
          'div',
          'TEXT'
        )
      })
    })),
    createScenarioForMultipleValueProp('trigger', TRIGGER, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('mouseleaveTimeout', 2000, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('maxWidth', '400px', {
      ...defaultOptions,
      vueData: {
        ...defaultOptions.vueData,
        props: {
          forceShow: true,
        }
      },
    }),
    createScenarioForSingleValueProp('applyMaxSize', true, {
      ...defaultOptions,
      vueData: {
        ...defaultOptions.vueData,
        props: {
          forceShow: true,
        },
        scopedSlots: {
          popover: () => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'.repeat(20)
        },
      },
    }),
    createScenarioForSingleValueProp('applyMaxSize', { indent: 50 }, {
      ...defaultOptions,
      vueData: {
        ...defaultOptions.vueData,
        props: {
          forceShow: true,
        },
        scopedSlots: {
          popover: () => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'.repeat(20)
        },
      },
      description: 'with indent'
    }),
    createScenarioForSingleValueProp('closeButton', true, {
      ...defaultOptions,
      vueData: {
        ...defaultOptions.vueData,
        props: {
          forceShow: true,
        }
      },
    }),
    createScenarioForMultipleValueProp('paddingSize', SIZES_PUDDING, {
      vueData: {
        ...defaultOptions.vueData,
        props: {
          forceShow: true,
        }
      },
      slots: (h) => ({
        default: h(
          'div',
          {
            style: {
              'margin-top': '120px'
            }
          },
          'TEXT'
        )
      })
    }),
    createScenarioForSingleValueProp('disabled', true, defaultOptions),
    createScenarioForSingleValueProp('flip', true, {
      ...defaultOptions,
      vueData: {
        ...defaultOptions.vueData,
        props: {
          placement: PLACEMENT.LEFT,
          forceShow: true,
        }
      },
    }),
    createScenarioForSingleValueProp('enableHiddenMode', true, {
      ...defaultOptions,
      suites: ['ssr']
    }),
    createScenarioForSingleValueProp('fill', true, {
      ...defaultOptions,
      vueData: {
        ...defaultOptions.vueData,
        props: {
          forceShow: true,
        }
      },
    }),
  ],
} as IComponent;
