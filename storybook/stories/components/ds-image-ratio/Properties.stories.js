import DsImageRatio from '@/ds-image-ratio';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/DsImageRatio/Properties',
  args: {
    ...sbGetComponentDefaultValues(DsImageRatio),
  },
  parameters: {
    viewMode: 'docs',
    controls: {
      disable: true,
    },
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

export const Properties = (args, { argsGrouped }) => ({
  components: { DsImageRatio },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    argsGrouped
  }),
  template: `
    <ds-image-ratio v-bind="$props" />
  `,
});
