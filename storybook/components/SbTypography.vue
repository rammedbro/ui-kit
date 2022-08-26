<template>
  <div :class="$style.typography">
    <oz-input
      v-model="text"
      placeholder="Введите текст"
      :class="[$style.input]"
    />
    <div>

      <p
        v-for="(item, ind) in fontStyles"
        :key="ind"
        :class="$typography[item]"
      >
        {{ text }} <span :class="$style.typoNormal">({{ item }})</span>
      </p>
    </div>
    <h2>Переменные:</h2>
    <div>
      <pre :class="$style.pre">{{ fonts }}</pre>
      <pre :class="$style.pre">{{ typo }}</pre>
    </div>
  </div>
</template>
<script>
import OzInput from '@/input';
// eslint-disable-next-line
import typography from '!!raw-loader!~/assets/styles/variables/typography.css';
// eslint-disable-next-line
import fonts from '!!raw-loader!~/assets/styles/fonts.css';
import { trimCss } from '~storybook/utils';

import style from '~/assets/styles/typography.css';

export default {
  name: 'SbTypography',
  components: {
    OzInput
  },
  data() {
    return {
      typo: trimCss(typography).join('\n'),
      fonts,
      text: 'Стиль для текста 1234567890'
    };
  },
  computed: {
    fontStyles() {
      return Object.keys(style);
    }
  }
};
</script>
<style module lang="postcss">
  .typography {
    font-family: var(--mainFont);
  }

  .typoNormal {
    text-transform: none;
  }

  .pre {
    overflow: auto;
  }
</style>
<style module="$typography" lang="css" src="~/assets/styles/typography.css"></style>
