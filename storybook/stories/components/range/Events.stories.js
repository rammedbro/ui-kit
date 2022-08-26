import Component from './Stories.stories';

export default {
  ...Component,
  title: 'Components/OzRange/Events',
  parameters: {
    viewMode: 'story',
    controls: {
      disable: true,
    },
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
};

export { Default as Events } from './Stories.stories';
