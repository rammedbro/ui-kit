import DsColors from '~storybook/components/DsColors';
import Docs from './Docs.mdx';

export default {
  title: 'Design System/Colors',
  component: DsColors,
  parameters: {
    viewMode: 'story',
    docs: {
      page: Docs,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nQfqi9b1XsJEUVzx2d1daP/%F0%9F%92%A0Palette-%7C-%F0%9F%8C%9ELight?node-id=242%3A4755'
    }
  },
};

export const Colors = () => ({
  components: { DsColors },
  template: `
    <ds-colors />
  `,
});
