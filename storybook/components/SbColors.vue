<template>
  <div :class="$style.colors">
    <OzNotification
      v-show="isNotificationShown"
      :class="$style.notification"
    > Переменная скопирована в буфер обмена
    </OzNotification>
    <!-- Строка поиска -->
    <oz-input
      v-model="searchQuery"
      placeholder="Поиск цвета"
      :class="[$style.colorsSearch]"
    />

    <!-- Цвета -->
    <h2>Цвета</h2>
    <div :class="[$style.colorsItems]">
      <div
        v-for="item in filteredItems"
        :key="item.name"
        :data-clipboard-text="item.name"
        :class="{
          [$style.colorCard]: true,
          [$style.colorCardDark]: item.name.startsWith('--ozdt')
        }"
      >
        <div
          :style="{ background: item.value }"
          :class="[$style.colorCardColor]"
        />

        <div :class="[$style.colorCardName]">
          {{ item.name }} ({{ item.value }})
        </div>

        <!--<div :class="$style.badge">deprecated</div>-->
      </div>
    </div>
    <div :class="[$style.colorsItems]">
      <div
        v-for="item in filteredDeprecatedItems"
        :key="item.name"
        :data-clipboard-text="item.name"
        :class="{
          [$style.colorCard]: true,
          [$style.colorCardDark]: item.name.startsWith('--ozdt')
        }"
      >
        <div
          :style="{ background: item.value }"
          :class="[$style.colorCardColor]"
        />

        <div :class="[$style.colorCardName]">
          {{ item.name }} ({{ item.value }})
        </div>

        <div :class="$style.badge">deprecated</div>
      </div>
    </div>
  </div>
</template>

<script>
import OzInput from '@/input';
import { OzColors } from '~storybook/assets/styles/colors';
import { OzDeprecatedColors } from '~storybook/assets/styles/deprecated-colors';
import Clipboard from 'clipboard';
import OzNotification from '@/notification';

export default {
  name: 'SbColors',
  components: { OzInput, OzNotification },
  data: () => ({
    clipInstance: null,
    items: Object
      .entries(OzColors)
      .map(([name, value]) => ({ name, value })),
    deprecatedItems: Object
      .entries(OzDeprecatedColors)
      .map(([name, value]) => ({ name, value })),
    searchQuery: '',
    isNotificationShown: false,
  }),
  computed: {
    filteredItems: vm => vm.items.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredDeprecatedItems: vm => vm.deprecatedItems.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
  },
  mounted() {
    this.clipInstance = new Clipboard(`.${this.$style.colorCard}`);
    let timerId = null;

    this.clipInstance.on('success', () => {
      clearTimeout(timerId);
      this.showNotification();
      timerId = setTimeout(() => { this.closeNotification(); }, 2000);
    });
  },
  beforeDestroy() {
    if (this.clipInstance) this.clipInstance.destroy();
  },
  methods: {
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
  .colors {
    font-family: var(--mainFont);
  }

  .colorsSearch {
    margin-bottom: 16px;
  }

  .colorsItems {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 16px;
    padding-bottom: 16px;
  }

  .colorCard {
    position: relative;
    padding: 8px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    font-weight: var(--fontNormal);
    font-size: var(--bodyMFont);
  }

  .colorCard:hover {
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .colorCardColor {
    height: 80px;
    border-radius: inherit;
    margin-bottom: 8px;
  }

  .colorCardDark {
    background-color: var(--ozdtBGSecondary);
    color: var(--ozTextPrimaryNegative);
  }

  .colorCardDark .colorCardColor {
    border: 1px solid #333;
  }

  .colorCardName {
    word-break: break-word;
  }

  .notification {
    position: fixed;
    bottom: 5px;
    right: 5px;
  }

  .badge {
    position: absolute;
    top: 4px;
    right: 4px;
    width: max-content;
    display: inline-block;
    background-color: var(--ozCtrlNegative);
    padding: 2px 4px;
    border-radius: 6px;
    color: var(--ozTextPrimaryNegative);
  }
</style>
