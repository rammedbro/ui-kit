import SbTypography from '~storybook/components/SbTypography';
import Docs from './Docs.mdx';

export default {
  title: 'Common/Typography',
  component: SbTypography,
  parameters: {
    viewMode: 'story',
    docs: {
      page: Docs,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/pn4nYBRzUspNtTnDEGxZZc/01.-Core---Common-Lib?node-id=1%3A15'
    }
  },
};

export const Typography = () => ({
  components: { SbTypography },
  template: `
    <sb-typography/>
  `,
});
