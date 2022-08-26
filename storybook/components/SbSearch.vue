<template>
  <div :class="[$style.wrapperSearch]">
    <OzNotification
      v-show="isNotificationShown"
      :class="$style.notification"
    > Ссылка скопирована в буфер обмена
    </OzNotification>

    <!-- Строка поиска -->
    <OzInput
      placeholder="Поиск"
      :value="text"
      :class="$style.search"
      @input="onInput"
    />
    <!-- Кнопка -->
    <OzButton
      text="Поделиться"
      :disabled="!hasClipboard"
      @click="copyURL"
    />
  </div>
</template>

<script>
import OzButton from '@/button';
import OzInput from '@/input';
import OzNotification from '@/notification';

export default {
  name: 'SbSearch',

  components: { OzButton, OzInput, OzNotification },

  data: () => ({
    text: '',
    isNotificationShown: false,
  }),

  computed: {
    hasClipboard() {
      return navigator && navigator.clipboard;
    }
  },

  mounted() {
    const searches = window.location.search.split('&');
    const last = searches.pop();

    if (last !== 'viewMode=story') {
      this.text = last.slice(0, last.length - 1);
      this.$emit('input', this.text);
    }
  },

  methods: {
    showNotification() {
      this.isNotificationShown = true;
    },

    closeNotification() {
      this.isNotificationShown = false;
    },

    onInput(value) {
      this.text = value;
      this.$emit('input', value);
    },

    copyURL() {
      const pathStory = '/?path=/story/';
      const search = window.location.search;
      const page = search.split('&')[0].slice(4, search.length - 1);
      const url = `${window.location.origin}${pathStory}${page}`;

      const urlForClipboard = !this.text
        ? url
        : url + `&${this.text}`;

      navigator.clipboard.writeText(urlForClipboard)
        .then(() => {
          this.showNotification();
          setTimeout(() => { this.closeNotification(); }, 2000);
        });
    },
  }
};
</script>

<style lang="postcss" module>
  .wrapperSearch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .search {
    flex-grow: 1;
    margin-right: 16px;
  }

  .notification {
    position: fixed;
    z-index: 50;
    bottom: 5px;
    right: 5px;
  }
</style>
