import DsTypography from '~storybook/components/DsTypography';
import Docs from './Docs.mdx';

export default {
  title: 'Design System/Typography',
  component: DsTypography,
  parameters: {
    viewMode: 'story',
    docs: {
      page: Docs,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vHpOsYnsrGbKRvZP6MEPal/%F0%9F%92%A0Tokens-%7C-Typography-%7C-Desktop'
    }
  },
};

export const Typography = () => ({
  components: { DsTypography },
  template: `
    <ds-typography />
  `,
});
