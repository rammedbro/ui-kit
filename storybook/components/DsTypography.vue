<template>
  <div :class="$style.typography">
    <SbSearch @input="onInput"/>

    <OzCheckbox
      :checked="isMobile"
      theme="toggle"
      @change="isMobile = !isMobile"
    >
      Мобильный веб
    </OzCheckbox>

    <OzCheckbox
      :checked="!isFontsPreview"
      theme="toggle"
      @change="isFontsPreview = !isFontsPreview"
    >
      Скрыть примеры шрифтов
    </OzCheckbox>

    <template v-if="!isMobile && isFontsPreview">
      <div
        v-for="(item, ind) in filteredFontStylesD"
        :key="ind"
        :class="[$style.typographyItem, item]"
      >
        <p>{{ item.startsWith('tsKey') || item.startsWith('tsHead') ? headlineText : text }} <br> 10 + 2 − 8 = 4 </p>
        <p :class="$style.name">{{ item | kebabCase }}<br>.{{ item }}</p>
        <p :class="$style.name">{{ fontStylesDValues[item].join('\n') }}</p>
      </div>
    </template>

    <template v-if="isMobile && isFontsPreview">
      <div
        v-for="(item, ind) in filteredFontStylesM"
        :key="ind"
        :class="[$style.typographyItem, item]"
      >
        <p>{{ item.startsWith('tsKey') || item.startsWith('tsHead') ? headlineText : text }} <br> 10 + 2 − 8 = 4 </p>
        <p :class="$style.name">
          {{ item | kebabCase }}
          .{{ item }}
        </p>
        <p :class="$style.name">
          {{ fontStylesMValues[item].join('\n') }}
        </p>
      </div>
    </template>

    <h2 id="variables">Переменные:</h2>
    <div v-if="!isMobile">
      <h3>D E S K T O P:</h3>
      <pre :class="$style.pre">{{ filteredFontVarD.join('\n') }}</pre>
    </div>

    <div v-if="isMobile">
      <h3>M O B I L E:</h3>
      <pre :class="$style.pre">{{ filteredFontVarM.join('\n') }}</pre>
    </div>

    <h2 id="fonts">Шрифт:</h2>
    <pre :class="$style.pre">{{ fonts }}</pre>
  </div>
</template>

<script>
import OzCheckbox from '@/checkbox';
import SbSearch from './SbSearch.vue';

// eslint-disable-next-line
import typographyD from '!!raw-loader!~/assets/styles/tokens/typography-desktop.css';
// eslint-disable-next-line
import typographyM from '!!raw-loader!~/assets/styles/tokens/typography-mobile.css';
// eslint-disable-next-line
import styleDRaw from '!!raw-loader!~/assets/styles/classes/typography-desktop.css';
// eslint-disable-next-line
import styleMRaw from '!!raw-loader!~/assets/styles/classes/typography-mobile.css';
// eslint-disable-next-line
import fonts from '!!raw-loader!~/assets/styles/fonts.css';
import { trimCss } from '~storybook/utils';
import _kebabCase from 'lodash/kebabCase';
import _camelCase from 'lodash/camelCase';

export function trimClass(str) {
  return str
    .trim()
    .split('.ts')
    .reduce((acc, item) => {
      const cleanString = item.replace(/ { /g, '=').replace(/ }/g, ';');
      const [cls, data = ''] = cleanString.split('=');
      acc[_camelCase(`ts-${cls}`)] = data.split(';');

      return acc;
    }, {});
}

export default {
  name: 'DsTypography',

  components: { OzCheckbox, SbSearch },

  filters: {
    kebabCase(value) {
      return _kebabCase(value.substring(2, value.length));
    }
  },

  data() {
    return {
      typoD: trimCss(typographyD),
      typoM: trimCss(typographyM),
      fonts,
      searchQuery: '',
      isMobile: false,
      isFontsPreview: true,
      text: 'Осуществимость, жизнеспособность и желанность. Если хотя бы одно из трёх оснований недостаточно прочно, продукт вряд ли выдержит испытание временем.\n',
      headlineText: 'Typography\n'
    };
  },

  computed: {
    filteredFontStylesD: vm => vm.fontStylesD.filter(item => new RegExp(vm.searchQuery, 'i').test(item)),
    filteredFontStylesM: vm => vm.fontStylesM.filter(item => new RegExp(vm.searchQuery, 'i').test(item)),
    filteredFontVarD: vm => vm.typoD.filter(item => new RegExp(vm.searchQuery, 'i').test(item)),
    filteredFontVarM: vm => vm.typoM.filter(item => new RegExp(vm.searchQuery, 'i').test(item)),
    fontStylesD() {
      return this.getListClassNames(styleDRaw);
    },
    fontStylesM() {
      return this.getListClassNames(styleMRaw);
    },
    fontStylesDValues() {
      return trimClass(styleDRaw);
    },
    fontStylesMValues() {
      return trimClass(styleMRaw);
    }
  },

  methods: {
    onInput(value) {
      this.searchQuery = value;
    },
    getListClassNames(source) {
      return source.trim().split('\n').map(str => str.match(/ts\w+/)[0]);
    }
  }
};
</script>

<style module lang="postcss">
  .typography {
    font-family: var(--mainFont);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .typographyItem {
    display: grid;
    grid-template-columns: minmax(300px, 600px) 230px 260px;
    gap: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .typographyItem p {
    margin: 24px 0;
  }

  .name {
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
    font-style: normal;
    color: rgba(0, 0, 0, 0.3);
    font-variant-numeric: tabular-nums;
    white-space: pre-line;
    text-transform: none;
  }

  .pre {
    font-size: 14px;
    line-height: 20px;
  }
</style>
