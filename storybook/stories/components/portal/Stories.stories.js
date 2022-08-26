import DocsTemplate from '~storybook/templates/Stories.mdx';
import OzPortal from '@/portal';
import OzPortalTarget from '@/portal/target';
import OzButton from '@/button';
import { ic_l_page_face as IconAnonim } from '@fe-icons';

export default {
  title: 'Components/OzPortal/Stories',
  component: OzPortal,
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
  components: { OzPortal, OzPortalTarget, OzButton, IconAnonim },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped, display: true, }),
  template: `
  <div>
    <oz-button text="Переключи" @click="display = !display"/>
    <div style="display: flex;">
      <div style="width: 50%">
        <p><b>OzPortal</b></p>
        <oz-portal to="to-target" :disabled="display">
          <ul v-show="display">
            <li>Содержимое внутри OzPortal</li>
            <li>Атрибут disabled = true</li>
            <li>OzPortalTarget не подключен</li>
          </ul>
          <ul v-show="!display">
            <li>Содержимое внутри OzPortalTarget</li>
            <li>OzPortalTarget подключен</li>
          </ul>
          <icon-anonim/>
        </oz-portal>
      </div>
      <div style="width: 50%">
        <p><b>OzPortalTarget</b></p>
        <oz-portal-target name="to-target"></oz-portal-target>
      </div>
    </div>
  </div>
  `,
});
