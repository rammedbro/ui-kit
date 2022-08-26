import { getColorByNameOrHex } from '~/helpers/colors/get-color-by-name-or-hex';

export function sbFillStories(stories, options = {}) {
  const {
    arStoryParent = [],
    arStoryArgs = [],
    commonArgs = {},
  } = options;

  stories.map(
    (story, index) => {
      if (!story) return;

      const storyParent = arStoryParent[index] || { args: {} };
      const storyArgs = arStoryArgs[index] || {};

      story.args = {
        ...storyParent.args,
        ...storyArgs,
        ...commonArgs,
      };

      return story;
    }
  );

  return stories;
}

export function sbGetComponentDefaultValues(component) {
  return Object.fromEntries(
    Object
      .entries(component.props)
      .map(([key, options]) => [
        key,
        (options.type !== Function && typeof options.default === 'function')
          // Objects as default value handling
          ? options.default()
          : (
            key.toLowerCase().includes('color') && options.type === String &&
            options.default && options.default.toLowerCase().startsWith('oz')
          )
            // Ozon colors as default value handling
            ? getColorByNameOrHex(options.default)
            // Other default values handling
            : options.default
      ])
  );
}

export function trimCss(str) {
  return str
    .match(/{([^{}]*)}/)[1]
    .replace(/\t/igm, '')
    .split('\n')
    .filter(i => !!i);
}
