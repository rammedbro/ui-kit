// eslint-disable-next-line import/no-webpack-loader-syntax
const css = require('!!raw-loader!~/assets/styles/variables/deprecated-colors.css').default;

export const OzDeprecatedColors = Object.fromEntries(
  css
    .match(/--oz(.*?)(?=;)/g)
    .map(item => item.split(': ')),
);
