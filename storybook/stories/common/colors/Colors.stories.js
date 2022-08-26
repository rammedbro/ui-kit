import SbColors from '~storybook/components/SbColors';
import Docs from './Docs.mdx';

export default {
  title: 'Common/Colors',
  component: SbColors,
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

export const Colors = () => ({
  components: { SbColors },
  template: `
    <sb-colors />
  `,
});
