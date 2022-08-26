<template>
  <div>
    <pre :class="$style.pre">{{ typo }}</pre>
  </div>
</template>
<script>
// eslint-disable-next-line
import variables from '!!raw-loader!~/assets/styles/variables/other.css';
import { trimCss } from '~storybook/utils';

export default {
  name: 'SbVariables',
  data() {
    return {
      typo: trimCss(variables).join('\n')
    };
  },
};
</script>
<style module lang="postcss">
  .pre {
    overflow: auto;
  }
</style>
