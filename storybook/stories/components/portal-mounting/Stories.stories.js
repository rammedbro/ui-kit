import DocsTemplate from '~storybook/templates/Stories.mdx';
import OzPortalMounting from '@/portal/mounting';
import OzButton from '@/button';
import { ic_l_page_face as IconAnonim } from '@fe-icons';

export default {
  title: 'Components/OzPortalMounting/Stories',
  component: OzPortalMounting,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    docs: {
      page: DocsTemplate,
    },
  },
};

export const Default = (args, { parameters, argsGrouped }) => ({
  components: { OzPortalMounting, IconAnonim, OzButton },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped, display: false }),
  template: `
    <div>
      <oz-button :text="!display ? 'Mount to' : 'Unmount to'" @click="display = !display"/>
      <br/>
      <oz-portal-mounting mountTo="footer" v-if="display">
        <p>Mount to DOM element &lt;footer&gt;</p>
        <icon-anonim/>
      </oz-portal-mounting>
      <footer/>
    </div>
  `,
});
