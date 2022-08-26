import OzImage from '@/image';
import DocsTemplate from '~storybook/templates/Stories.mdx';

export default {
  title: 'Components/OzImage/Stories',
  component: OzImage,
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
  components: { OzImage },
  provide: argsGrouped.inject,
  props: Object.keys(parameters.args),
  data: () => ({ argsGrouped }),
  template: `
    <oz-image v-bind="$props"
              v-on="argsGrouped.events" />
  `,
});

export const Empty = Default.bind({});
Empty.args = {
  src: '',
};

export const CustomEmpty = Default.bind({});
CustomEmpty.args = {
  ...Empty.args,
  srcError: 'https://cdn1.ozone.ru/s3/cms/10/td3/custom_no_photo.png',
};

export const Src = Default.bind({});
Src.args = {
  src: 'https://cdn1.ozone.ru/s3/cms/11/tfe/wc700/320_160_2.jpg',
};

export const UseCdn = Default.bind({});
UseCdn.args = {
  src: 'https://cdn1.ozone.ru/s3/multimedia-l/wd400/6020051301.jpg',
  useCdn: true,
  size: 200
};

export const Srcset = Default.bind({});
Srcset.args = {
  src: 'https://cdn1.ozone.ru/s3/multimedia-3/wc200/6031728279.jpg',
  srcset: 'https://cdn1.ozone.ru/s3/multimedia-3/wc400/6031728279.jpg 2x'
};

export const UseCdnLikeSrcset = Default.bind({});
UseCdnLikeSrcset.args = {
  src: 'https://cdn1.ozone.ru/s3/multimedia-3/wc200/6031728279.jpg',
  useCdn: true,
  size: 200
};

export const DisableSrcSet = Default.bind({});
DisableSrcSet.args = {
  src: 'https://cdn1.ozone.ru/s3/multimedia-3/wc200/6031728279.jpg',
  disableSrcSet: true,
  srcset: 'https://cdn1.ozone.ru/s3/multimedia-3/wc400/6031728279.jpg 2x'
};

export const MaxWidth = Default.bind({});
MaxWidth.args = {
  ...Src.args,
  maxWidth: 200,
};

export const MaxHeight = Default.bind({});
MaxHeight.args = {
  ...Src.args,
  maxHeight: 200,
};

export const isSquare = Default.bind({});
isSquare.args = {
  ...Src.args,
  isSquare: true,
  useCdn: true,
};

export const Alt = Default.bind({});
Alt.args = {
  ...Src.args,
  alt: 'Текст изображения',
};

export const IsAdult = Default.bind({});
IsAdult.args = {
  src: 'https://cdn1.ozone.ru/s3/multimedia-l/wd400/6020051301.jpg',
  isAdult: true,
};

export const IsAdultNoText = Default.bind({});
IsAdultNoText.args = {
  ...IsAdult.args,
  noText: true,
};

export const ScaleByWidth = Default.bind({});
ScaleByWidth.args = {
  ...Src.args,
  useCdn: true,
  size: 200,
  scaleByWidth: true,
};

export const ScaleByHeight = Default.bind({});
ScaleByHeight.args = {
  ...Src.args,
  useCdn: true,
  size: 200,
  scaleByHeight: true,
};

export const ImageMore33MpxWithoutCdn = Default.bind({});
ImageMore33MpxWithoutCdn.args = {
  src: 'https://cdn1.ozone.ru/s3/fs-chat-api/f567fe43-c618-11ec-abbf-c270f4ea1321.jpg',
};

export const ImageMore33MpxWithCdn = Default.bind({});
ImageMore33MpxWithCdn.args = {
  src: 'https://cdn1.ozone.ru/s3/fs-chat-api/f567fe43-c618-11ec-abbf-c270f4ea1321.jpg',
  useCdn: true
};
