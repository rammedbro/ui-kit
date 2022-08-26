import DsImageRatio from '@/ds-image-ratio';
import DocsTemplate from '~storybook/templates/Stories.mdx';

const src = 'https://s3-alpha-sig.figma.com/img/749d/dd55/23e6702ddd9ca54fc9f5f3973f570495?Expires=1661126400&Signature=ZhYO2hVKrKTT0Nr0EgbVbx3gRt4S~nO9tOMtHHOkxN82OLJwwEoaOwTJcqy7bvb2Mly2GFgBjGObjxTUjg904zaARDERZ6AKDWj9ZCVHpvQELyu5uEUNbkiMNT3NwJ2yzzUYfEGGwLeywaDh6DEchmOtMaE38Ujo7CVos1H~v~sgDsQfl4rL64DEX-fTZ~tis5v9DsXtkFf-18YirQduBTHKSM5aXEsCUmw5nTFjl6wGemiRCCFfe3cBSyB2OrOore7V3VRTortZGhPXdicBGJ--IjzLYuB-xI36nxmqM-sHP6VQ834TI7h1T-lviPkuXimZ4a~ogIG6u~FT9ntUnw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

export default {
  title: 'Components/DsImageRatio/Stories',
  component: DsImageRatio,
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
  components: { DsImageRatio },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    imageStyle: {
      width: '300px',
    }
  }),
  template: `
    <div :style="imageStyle">
      <ds-image-ratio v-bind="$props"
                  v-on="argsGrouped.events"/>
    </div>
  `,
});

const DefaultWithHeight = (args, { parameters, argsGrouped }) => ({
  components: { DsImageRatio },
  props: Object.keys(parameters.args),
  data: () => ({
    argsGrouped,
    imageStyle: {
      width: '500px',
      height: '200px'
    }
  }),
  template: `
    <div :style="imageStyle">
      <ds-image-ratio v-bind="$props"
                  v-on="argsGrouped.events"/>
    </div>
  `,
});

export const Src = Default.bind({});
Src.args = { src };

export const BackgroundColor = Default.bind({});
BackgroundColor.args = {
  src,
  backgroundColor: '#16dec0',
};

export const DefaultWithHeightContainer = DefaultWithHeight.bind({});
DefaultWithHeightContainer.args = {
  src,
  backgroundColor: '#16dec0',
};

export const Width = Default.bind({});
Width.args = {
  src,
  width: 200,
  backgroundColor: '#16dec0',
};

export const Ratio1on1WithWidth = Default.bind({});
Ratio1on1WithWidth.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '1:1',
  width: 250
};

export const Ratio2on1WithWidth = Default.bind({});
Ratio2on1WithWidth.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '2:1',
  width: 250
};

export const Ratio2on3WithWidth = Default.bind({});
Ratio2on3WithWidth.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '2:3',
  width: 250
};

export const Ratio3on1WithWidth = Default.bind({});
Ratio3on1WithWidth.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '3:1',
  width: 250
};

export const Ratio3on2WithWidth = Default.bind({});
Ratio3on2WithWidth.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '3:2',
  width: 250
};

export const Ratio3on4WithWidth = Default.bind({});
Ratio3on4WithWidth.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '3:4',
  width: 250
};

export const Ratio4on3WithWidth = Default.bind({});
Ratio4on3WithWidth.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '4:3',
  width: 250
};

export const Ratio5on2WithWidth = Default.bind({});
Ratio5on2WithWidth.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '5:2',
  width: 250
};

export const Ratio16on9WithWidth = Default.bind({});
Ratio16on9WithWidth.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '16:9',
  width: 250
};

export const Ratio1on1 = Default.bind({});
Ratio1on1.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '1:1',
};

export const Ratio2on1 = Default.bind({});
Ratio2on1.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '2:1'
};

export const Ratio2on3 = Default.bind({});
Ratio2on3.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '2:3'
};

export const Ratio3on1 = Default.bind({});
Ratio3on1.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '3:1'
};

export const Ratio3on2 = Default.bind({});
Ratio3on2.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '3:2'
};

export const Ratio3on4 = Default.bind({});
Ratio3on4.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '3:4'
};

export const Ratio4on3 = Default.bind({});
Ratio4on3.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '4:3'
};

export const Ratio5on2 = Default.bind({});
Ratio5on2.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '5:2'
};

export const Ratio16on9 = Default.bind({});
Ratio16on9.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '16:9'
};

export const Ratio16on9WithMax = Default.bind({});
Ratio16on9WithMax.args = {
  src,
  backgroundColor: '#16dec0',
  ratio: '16:9',
  maxHeight: 200,
  maxWidth: 200
};
