<template>
  <div :class="$style.spacings">
    <h2>Переменные:</h2>
    <div>
      <pre :class="$style.pre">{{ variablesSpacing }}</pre>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import spacings from '!!raw-loader!~/assets/styles/tokens/spacings.css';
import { trimCss } from '~storybook/utils';

export default {
  name: 'DsSpacings',

  data() {
    return {
      variablesSpacing: trimCss(spacings).join('\n'),
    };
  },
};
</script>

<style module lang="postcss">
  .spacings {
    font-family: var(--mainFont);
  }

  .pre {
    font-size: 14px;
    line-height: 20px;
  }
</style>
