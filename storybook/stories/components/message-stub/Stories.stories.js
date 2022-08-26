import OzMessageStub from '@/message-stub';
import { THEMES } from '@/message-stub/constants';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';
import { ic_m_bell as IconBell } from '@fe-icons';
import OzButton from '@/button';

export default {
  title: 'Components/OzMessageStub/Stories',
  component: OzMessageStub,
  argTypes: {
    button: {
      table: {
        category: 'slots',
      }
    }
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
  components: { OzMessageStub },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-message-stub v-bind="$props"
                     v-on="argsGrouped.events" />
  `,
});

export const Title = Default.bind({});
Title.args = {
  title: 'Спасибо, что пользуетесь нами',
};

export const Subtitle = Default.bind({});
Subtitle.args = {
  ...Title.args,
  subtitle: 'Наши авиалинии самые комфортные',
};

export const ButtonText = Default.bind({});
ButtonText.args = {
  ...Subtitle.args,
  buttonText: 'Спасибо',
};

export const ThemeWarning = Default.bind({});
export const ThemeInfo = Default.bind({});

sbFillStories(
  [ThemeWarning, ThemeInfo],
  {
    arStoryArgs: Object.values(THEMES).map(theme => ({ theme }))
  }
);

export const Icon = Default.bind({});
Icon.args = {
  ...ThemeWarning.args,
  icon: IconBell,
};

export const IconColor = Default.bind({});
IconColor.args = {
  ...Icon.args,
  iconColor: '#FFFF30',
};

export const SlotButton = (args, { parameters, argsGrouped }) => ({
  components: { OzMessageStub, OzButton },
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-message-stub v-bind="$props"
                     v-on="argsGrouped.events">
    <oz-button slot="button"
               text="Кнопка" />
    </oz-message-stub>
  `,
});
SlotButton.args = {
  ...Subtitle.args,
  themes: THEMES.warning,
  icon: IconBell,
};
