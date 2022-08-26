import OzTransition from '@/transition';
import OzButton from '@/button';
import Component from './Stories.stories';
import { sbGetComponentDefaultValues } from '~storybook/utils';

export default {
  ...Component,
  title: 'Components/OzTransition/Properties',
  args: sbGetComponentDefaultValues(OzTransition),
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
  components: { OzTransition, OzButton },
  props: Object.keys(argsGrouped.props),
  data: () => ({
    show: false,
  }),
  template: `
    <div>
    <oz-button text="Клик" 
               @click="show = !show"/>
    
    <oz-transition v-bind="$props">
      <img v-if="show"
           alt=""
           src="https://ichef.bbci.co.uk/news/410/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg"
           style="display: block;"/>
    </oz-transition>
    </div>
  `,
});
