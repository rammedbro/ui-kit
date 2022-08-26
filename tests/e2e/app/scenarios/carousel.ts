import { IComponent } from '~e2e/app/scenarios/types';
import {
  createScenarioForMultipleValueProp,
  createScenarioForSingleValueProp,
} from '~e2e/app/scenarios/utils';
import { merge } from 'lodash';
import { LAYOUTS_TITLES, BUTTON_THEMES_TITLES } from '@/carousel/constants';

const defaultOptions = {
  vueData: {
    style: {
      margin: '0 40px',
    }
  },
  slots: (h, components) => ({
    default: Array(20).fill(null).map((item, index) => h(
      components['OzCarouselItem'],
      {
        style: {
          width: '150px',
          height: '150px',
          margin: '15px',
          backgroundColor: 'lightgray'
        }
      },
      `Carousel item ${index}`
    )),
  })
};

const optionsWithSmallNumberOfElements = {
  vueData: {
    style: {
      margin: '0 40px',
    }
  },
  slots: (h, components) => ({
    default: Array(3).fill(null).map((item, index) => h(
      components['OzCarouselItem'],
      {
        style: {
          width: '150px',
          height: '150px',
          margin: '15px',
          backgroundColor: 'lightgray'
        }
      },
      `Carousel item ${index}`
    )),
  })
};

const renderRecursiveCarouselItems = (h, components, { items = 12, layout = LAYOUTS_TITLES.HORIZONTAL, wrapperSize = 3 }) => Array(Math.ceil(items / wrapperSize)).fill(null).map((_, wrapperIndex) => h(
  'div',
  {
    style: {
      display: layout === LAYOUTS_TITLES.VERTICAL ? 'flex' : 'block',
    }
  },
  [
    h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: layout === LAYOUTS_TITLES.VERTICAL ? 'column' : 'row',
        }
      },
      Array(wrapperSize).fill(null).map((_, index) => {
        const currentChild = wrapperIndex * wrapperSize + index;

        if (currentChild + 1 > items) return null;

        return h(
          components['OzCarouselItem'],
          {
            style: {
              width: '150px',
              height: '150px',
              margin: '15px',
              backgroundColor: 'lightgray'
            }
          },
          `Carousel item ${currentChild}`
        );
      }).filter(val => val)
    ),
    h(
      'div',
      {
        style: {
          minHeight: '50px',
          margin: '15px',
          backgroundColor: 'lightgray',
          fontSize: 'initial',
          whiteSpace: 'break-spaces',
        }
      },
      'Не учитывается при расчетах'
    ),
  ]
));

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('slideIndex', 5, {
      ...defaultOptions,
      description: 'with large number of element',
    }),
    createScenarioForSingleValueProp('slidingCount', 3, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('transition', 1000, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('loop', true, {
      ...defaultOptions,
      description: 'with large number of element',
    }),
    createScenarioForSingleValueProp('loop', true, {
      ...optionsWithSmallNumberOfElements,
      description: 'with small number of element',
    }),
    createScenarioForSingleValueProp('fade', true, {
      ...defaultOptions,
      vueData: {
        ...defaultOptions.vueData,
        props: {
          centered: true,
          slideIndex: 6,
        }
      },
    }),
    createScenarioForSingleValueProp('navigation', false, defaultOptions),
    createScenarioForSingleValueProp('pagination', true, defaultOptions),
    createScenarioForMultipleValueProp('layout', LAYOUTS_TITLES, defaultOptions),
    createScenarioForMultipleValueProp('layout', LAYOUTS_TITLES, merge({}, defaultOptions, {
      vueData: {
        style: {
          maxHeight: '600px',
        },
        props: {
          centered: true
        }
      },
      description: 'with centered',
    })),
    createScenarioForMultipleValueProp('layout', LAYOUTS_TITLES, merge({}, optionsWithSmallNumberOfElements, {
      vueData: {
        style: {
          maxHeight: '600px',
        },
        props: {
          centered: true
        }
      },
      description: 'with centered and small number of elements',
    })),
    createScenarioForMultipleValueProp('layout', LAYOUTS_TITLES, (layout) => ({
      vueData: {
        style: {
          maxHeight: '600px',
        },
        props: {
          recursive: true,
        }
      },
      slots: (h, components) => ({
        default: renderRecursiveCarouselItems(h, components, { items: 13, layout })
      }),
    }), {
      description: 'with recursive',
    }),
    createScenarioForMultipleValueProp('layout', LAYOUTS_TITLES, (layout) => ({
      vueData: {
        style: {
          maxHeight: '600px',
        },
        props: {
          recursive: true,
        }
      },
      slots: (h, components) => ({
        default: renderRecursiveCarouselItems(h, components, { items: 3, layout })
      }),
    }), {
      description: 'with recursive and small number of elements',
    }),
    createScenarioForMultipleValueProp('theme', BUTTON_THEMES_TITLES, defaultOptions),
    createScenarioForSingleValueProp('onlyScroll', true, defaultOptions),
    createScenarioForSingleValueProp('recursive', true, {
      vueData: {
        props: {
          onlyScroll: true,
        }
      },
      slots: (h, components) => ({
        default: renderRecursiveCarouselItems(h, components, { items: 15 })
      }),
      description: 'onlyScroll: true',
    }),
    createScenarioForSingleValueProp('recursive', true, {
      vueData: {
        props: {
          slideIndex: 2,
        }
      },
      slots: (h, components) => ({
        default: renderRecursiveCarouselItems(h, components, { items: 15 })
      }),
      description: 'slideIndex: 2',
    }),
    createScenarioForSingleValueProp('centered', true, merge({}, defaultOptions, {
      vueData: {
        props: {
          slideIndex: 2,
        }
      },
      description: 'slideIndex: 2',
    })),
    createScenarioForSingleValueProp('slideIndex', 3, {
      ...optionsWithSmallNumberOfElements,
      description: 'with small number of element',
    }),
  ]
} as IComponent;
