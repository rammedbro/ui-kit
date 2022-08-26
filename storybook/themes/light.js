import { create } from '@storybook/theming';
import logo from '../assets/img/logo.png';

export const sbThemeLight = create({
  base: 'light',
  colorSecondary: '#005bff',
  fontBase: '"GTEestiPro", arial, sans-serif',
  fontCode: 'monospace',
  textColor: '#001a34',
  textInverseColor: '#fff',
  brandTitle: 'Ozon Storybook',
  brandUrl: 'https://ozon.ru',
  brandImage: logo,
});
