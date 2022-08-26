import SbVariables from '~storybook/components/SbVariables';
import Docs from './Docs.mdx';

export default {
  title: 'Common/Variables',
  component: SbVariables,
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

export const Variables = () => ({
  components: { SbVariables },
  template: `
    <sb-variables/>
  `,
});
