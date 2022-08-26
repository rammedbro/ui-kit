import DsSpacings from '~storybook/components/DsSpacings';
import Docs from './Docs.mdx';

export default {
  title: 'Design System/Spacings',
  component: DsSpacings,
  parameters: {
    viewMode: 'story',
    docs: {
      page: Docs,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/TPgFVsEBZyzgRSiRqs35qP/%F0%9F%92%A0-BX-new-UI-kit?node-id=792%3A145173'
    }
  },
};

export const Spacings = () => ({
  components: { DsSpacings },
  template: `
    <ds-spacings />
  `,
});
