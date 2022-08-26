import OzSnackBar from '@/snack-bar';
import OzButton from '@/button';
import DocsTemplate from '~storybook/templates/Stories.mdx';
import { sbFillStories } from '~storybook/utils';
import { ic_m_bell_filled as icMBellFilled } from '@fe-icons';
import { POSITION, TYPES } from '@/snack-bar/constants';

export default {
  title: 'Components/OzSnackBar/Stories',
  component: OzSnackBar,
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
  components: { OzSnackBar, OzButton },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    display: false,
  }),
  template: `
  <div>
    <oz-button text="Открыть SnackBar"
              @click="display = true" />
    <oz-snack-bar v-if="display"
                  v-bind="$props"
                  :active="true"
                  v-on="argsGrouped.events"
                  @close="display = false">
      <span>SnackBar</span>
    </oz-snack-bar>
  </div>
  `,
});

export const TypeSuccess = Default.bind({});
export const TypeError = Default.bind({});
export const TypeInfo = Default.bind({});

sbFillStories(
  [TypeError, TypeSuccess, TypeInfo],
  {
    arStoryArgs: Object.values(TYPES).map(type => ({ type }))
  }
);

export const Width = Default.bind({});
Width.args = {
  width: '500px',
};

export const WidthAuto = Default.bind({});
WidthAuto.args = {
  width: 'auto',
};

export const Timeout = Default.bind({});
Timeout.args = {
  timeout: 2000
};

export const InfinityProp = Default.bind({});
InfinityProp.args = {
  infinity: true,
};

export const PositionBR = Default.bind({});
export const PositionBC = Default.bind({});
export const PositionBL = Default.bind({});
export const PositionTR = Default.bind({});
export const PositionTC = Default.bind({});
export const PositionTL = Default.bind({});

sbFillStories(
  [PositionBR, PositionBC, PositionBL, PositionTR, PositionTC, PositionTL],
  {
    arStoryArgs: Object.values(POSITION).map(position => ({ position }))
  }
);

export const Image = Default.bind({});
Image.args = {
  image: 'https://cdn1.ozone.ru/s3/cms/0c/ta4/wc300/672_672_1.jpg',
};

export const Title = Default.bind({});
Title.args = {
  title: 'Title',
};

export const Icon = Default.bind({});
Icon.args = {
  icon: icMBellFilled,
};

export const IconColor = Default.bind({});
IconColor.args = {
  icon: icMBellFilled,
  iconColor: 'ozCredit'
};

export const Coords = Default.bind({});
Coords.args = {
  coords: {
    left: '100px',
    top: '100px',
  }
};
