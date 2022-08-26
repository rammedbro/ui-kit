// eslint-disable-next-line import/no-webpack-loader-syntax
const bxCore = require('!!raw-loader!~/assets/styles/tokens/color-core.css').default;
// eslint-disable-next-line import/no-webpack-loader-syntax
const bxLight = require('!!raw-loader!~/assets/styles/tokens/color-light.css').default;
// eslint-disable-next-line import/no-webpack-loader-syntax
const bxLightInverted = require('!!raw-loader!~/assets/styles/tokens/color-light-inverted.css').default;
// eslint-disable-next-line import/no-webpack-loader-syntax
const bxDark = require('!!raw-loader!~/assets/styles/tokens/color-dark.css').default;
// eslint-disable-next-line import/no-webpack-loader-syntax
const bxDarkInverted = require('!!raw-loader!~/assets/styles/tokens/color-dark-inverted.css').default;
// eslint-disable-next-line import/no-webpack-loader-syntax
const bxStatic = require('!!raw-loader!~/assets/styles/tokens/color-static.css').default;
// eslint-disable-next-line import/no-webpack-loader-syntax
const brandLight = require('!!raw-loader!~/assets/styles/tokens/color-brand-light.css').default;
// eslint-disable-next-line import/no-webpack-loader-syntax
const brandLightInverted = require('!!raw-loader!~/assets/styles/tokens/color-brand-light-inverted.css').default;
// eslint-disable-next-line import/no-webpack-loader-syntax
const brandDark = require('!!raw-loader!~/assets/styles/tokens/color-brand-dark.css').default;
// eslint-disable-next-line import/no-webpack-loader-syntax
const brandDarkInverted = require('!!raw-loader!~/assets/styles/tokens/color-brand-dark-inverted.css').default;

export const OzBxCoreColors = Object.fromEntries(
  bxCore
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);

export const OzBxLightColors = Object.fromEntries(
  bxLight
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);

export const OzBxLightInvertedColors = Object.fromEntries(
  bxLightInverted
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);

export const OzBxDarkColors = Object.fromEntries(
  bxDark
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);

export const OzBxDarkInvertedColors = Object.fromEntries(
  bxDarkInverted
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);

export const OzBxStaticColors = Object.fromEntries(
  bxStatic
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);

export const OzBrandLightColors = Object.fromEntries(
  brandLight
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);

export const OzBrandLightInvertedColors = Object.fromEntries(
  brandLightInverted
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);

export const OzBrandDarkColors = Object.fromEntries(
  brandDark
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);

export const OzBrandDarkInvertedColors = Object.fromEntries(
  brandDarkInverted
    .match(/--(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);
