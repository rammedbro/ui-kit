import OzNotification from '@/notification';
import { THEMES } from '@/notification/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { ic_m_info as IconInfo } from '@fe-icons';

export default {
  title: 'Components/OzNotification/Stories',
  component: OzNotification,
  argTypes: {
    default: {
      table: {
        category: 'slots',
      },
    },
    footer: {
      table: {
        category: 'slots',
      },
    },
  },
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
  components: { OzNotification },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-notification v-bind="$props"
                     v-on="argsGrouped.events">
    Примите к сведенью, что есть важные особенности, требующие вашего внимания.
    </oz-notification>
  `,
});

export const Icon = Default.bind({});
Icon.args = {
  icon: IconInfo,
};

export const IconColor = Default.bind({});
IconColor.args = {
  ...Icon.args,
  iconColor: 'ozAccentAlert',
};

export const ThemeDarkIcon = Default.bind({});
ThemeDarkIcon.args = {
  ...IconColor.args,
  theme: THEMES.DARK,
};

export const CloseButton = Default.bind({});
CloseButton.args = {
  ...IconColor.args,
  closeButton: true,
};

export const ThemeDarkCloseButton = Default.bind({});
ThemeDarkCloseButton.args = {
  ...ThemeDarkIcon.args,
  closeButton: true,
};

export const ButtonsDefault = Default.bind({});
ButtonsDefault.args = {
  ...IconColor.args,
  buttons: [
    { text: 'Кнопка 1' },
    { text: 'Кнопка 2' },
  ],
};

export const ButtonsInline = Default.bind({});
ButtonsInline.args = {
  ...IconColor.args,
  buttons: [
    { text: 'Кнопка 1', theme: 'inline' },
    { text: 'Кнопка 2', theme: 'inline' },
  ],
};

export const Title = Default.bind({});
Title.args = {
  title: 'Заголовок',
};

export const Image = Default.bind({});
Image.args = {
  ...Title.args,
  image: 'https://cdn1.ozone.ru/s3/fs-my-account-avatar/kBODqpa7TA2jLSv_Sm3tWw.jpg',
};

export const SlotFooter = (args, { parameters }) => ({
  components: { OzNotification },
  props: Object.keys(parameters.args),
  template: `
    <oz-notification v-bind="$props">
    Примите к сведенью, что есть важные особенности, требующие вашего внимания.

    <template v-slot:footer>
      Footer
    </template>
    </oz-notification>
  `,
});
