import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForSingleValueProp, createScenarioForMultipleValueProp } from '~e2e/app/scenarios/utils';
import {
  ImageDecoding
} from '~/helpers/cdn/render-utils.ts';

const MAIN_IMAGE_SRC = 'https://cdn1.ozone.ru/s3/cms/0c/ta4/wc300/672_672_1.jpg';
const ADDITIONAL_IMAGE_SRC = 'https://cdn1.ozone.ru/s3/cms/11/tfe/wc700/320_160_2.jpg';
const BIG_IMAGE = 'https://cdn1.ozone.ru/s3/fs-chat-api/f567fe43-c618-11ec-abbf-c270f4ea1321.jpg';
const SRC_ERROR = 'https://cdn1.ozone.ru/s3/cms/10/td3/custom_no_photo.png';

const defaultOptions = {
  vueData: {
    props: {
      src: ADDITIONAL_IMAGE_SRC,
    }
  }
};

export default {
  critical: true,
  scenarios: [
    createScenarioForSingleValueProp('src', ADDITIONAL_IMAGE_SRC),
    createScenarioForSingleValueProp('srcset', ADDITIONAL_IMAGE_SRC),
    createScenarioForSingleValueProp('maxWidth', 200, defaultOptions),
    createScenarioForSingleValueProp('maxHeight', 200, defaultOptions),
    createScenarioForSingleValueProp('alt', 'Подпись к картинке', {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('lazy', false, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('disableSrcSet', true, {
      vueData: {
        props: {
          srcset: MAIN_IMAGE_SRC,
        }
      },
    }),
    createScenarioForSingleValueProp('isSquare', true, defaultOptions),

    createScenarioForSingleValueProp('size', 600, {
      vueData: {
        props: {
          src: ADDITIONAL_IMAGE_SRC,
          useCdn: true,
        }
      }
    }),
    createScenarioForSingleValueProp('isAdult', true, defaultOptions),
    createScenarioForSingleValueProp('noText', true, {
      vueData: {
        props: {
          src: ADDITIONAL_IMAGE_SRC,
          isAdult: true
        }
      }
    }),
    createScenarioForSingleValueProp('useWebP', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('useCdn', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForMultipleValueProp('decoding', ImageDecoding, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('enableMobileSrcSet', true, {
      vueData: {
        props: {
          ...defaultOptions.vueData.props,
          srcset: MAIN_IMAGE_SRC,
        }
      },
    }),
    createScenarioForSingleValueProp('isAccessibilityMode', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('disableImages', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('imageGrey', true, {
      ...defaultOptions,
      suites: ['ssr'],
    }),
    createScenarioForSingleValueProp('src', BIG_IMAGE, {
      vueData: {
        props: {
          useCdn: true,
        }
      },
      description: 'Big image with useCdn. Render default image.'
    }),
    createScenarioForSingleValueProp('src', BIG_IMAGE, {
      vueData: {
        props: {
          useCdn: false,
        }
      },
      description: 'Big image without useCdn. Render original image'
    }),
    createScenarioForSingleValueProp('srcError', SRC_ERROR),
  ]
} as IComponent;
