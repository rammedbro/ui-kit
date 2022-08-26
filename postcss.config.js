const postcssInlineSvg = require('postcss-inline-svg');
const postcssPresetEnv = require('postcss-preset-env');
const postcssCalc = require('postcss-calc');

module.exports = {
  ident: 'postcss',
  plugins: [
    postcssInlineSvg({
      removeFill: true,
    }),
    postcssPresetEnv({
      importFrom: [
        './src/assets/styles/variables/index.css',
        './src/assets/styles/variables/light.css',
        './src/assets/styles/tokens/typography-desktop.css'
      ],
      preserve: false,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'color-mod-function': true,
        'custom-properties': {
          preserve: true,
        },
        'environment-variables': {
          preserve: true,
        },
      },
      insertBefore: {
        'all-property': postcssCalc,
      }
    }),
  ],
};
