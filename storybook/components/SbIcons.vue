<template>
  <div class="icons">
    <!-- Сообщение -->
    <OzNotification
      v-show="isNotificationShown"
      :class="$style.notification"
    > Ссылка скопирована в буфер обмена
    </OzNotification>
    <div :class="[$style.wrapper__search]">
      <!-- Строка поиска -->
      <OzInput
        v-model="searchQuery"
        placeholder="Поиск иконки"
        :class="[$style.icons__search]"
      />
      <!-- Кнопка -->
      <OzButton
        text="Поделиться"
        :class="[$style.icons__button]"
        :disabled="!hasClipboard"
        @click="copyURL"
      />
    </div>
    <!-- Иконки -->
    <h1 :class="$style.alert">Используйте иконки из библиотеки <a href="./?path=/story/introduction-иконки--page">@fe/icons</a>. Из ui-kit иконки будут удалены после 31.05.2022</h1>
    <div :class="[$style.icons__items]">
      <!-- Иконка -->
      <div
        v-for="item in filteredItems"
        :key="item.name"
        :title="item.name"
        :data-clipboard-text="item.name"
        :style="{ color: colorValue }"
        :class="[$style.icon]"
      >
        <div :class="[$style.icon__imgWrapper]">
          <component
            :is="item.component"
            :class="[$style.icon__img]"
          />
        </div>

        <div :class="[$style.icon__name]">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OzInput from '@/input';
import OzButton from '@/button';
import OzNotification from '@/notification';
import { OzColors } from '~storybook/assets/styles/colors';
import Clipboard from 'clipboard';

export default {
  name: 'SbIcons',
  components: { OzInput, OzButton, OzNotification },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    colorName: {
      type: String,
      default: '--ozBlack',
    },
  },
  data: () => ({
    searchQuery: '',
    isNotificationShown: false,
  }),
  computed: {
    filteredItems: vm =>
      vm.items.filter(item => item.name.toLowerCase().includes(vm.searchQuery.toLowerCase())),
    colorValue: vm => OzColors[vm.colorName],
    hasClipboard() {
      return navigator && navigator.clipboard;
    }
  },
  mounted() {
    new Clipboard(`.${this.$style.icon}`);

    const searchValue = window.location.search.replace('?id=common-icons--icons&viewMode=story', '');

    if (searchValue) {
      this.searchQuery = searchValue.slice(1, searchValue.length - 1);
    }
  },
  methods: {
    copyURL() {
      const pathStory = '/?path=/story/';
      const search = window.location.search;
      const page = search.split('&')[0].slice(4, search.length - 1);
      const url = `${window.location.origin}${pathStory}${page}`;

      const urlForClipboard = !this.searchQuery
        ? url
        : url + `&${this.searchQuery}`;

      navigator.clipboard.writeText(urlForClipboard)
        .then(() => {
          this.showNotification();
          setTimeout(() => { this.closeNotification(); }, 2000);
        });
    },
    showNotification() {
      this.isNotificationShown = true;
    },
    closeNotification() {
      this.isNotificationShown = false;
    },
  }
};
</script>

<style module lang="postcss">
  .wrapper__search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .alert {
    font-family: var(--mainFont);
    font-size: var(--headLFont);
    color: var(--textAccent);
  }

  .icons__search {
    width: 100%;
  }

  .icons__button {
    margin-left: 10px;
  }

  .icons__items {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    grid-gap: 16px;
  }

  .icon {
    position: relative;
    width: 90px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid currentColor;
    border-radius: 4px;
    font-family: var(--mainFont);
    font-weight: var(--fontNormal);
    font-size: var(--bodyMFont);
    text-align: center;
  }

  .icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: currentColor;
    opacity: 0;
  }

  .icon:hover {
    cursor: pointer;
  }

  .icon:hover::before {
    opacity: 0.1;
  }

  .icon__imgWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;
    margin-bottom: 8px;
  }

  .icon__img {
    color: currentColor;
  }

  .icon__name {
    color: black;
    word-break: break-word;
  }

  .notification {
    position: fixed;
    bottom: 5px;
    right: 5px;
  }
</style>
