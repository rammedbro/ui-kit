<template>
  <div :class="$style.colors">
    <OzNotification
      v-show="isNotificationShown"
      :class="$style.notification"
    > Переменная скопирована в буфер обмена
    </OzNotification>

    <SbSearch @input="onInput"/>

    <div :class="$style.tabContainer">
      <OzTabs
        :tabs='[
        {"title":"Core цвета","value":"coreColors"},
        {"title":"Основные цвета","value":"mainColors"},
        {"title":"Статичные цвета","value":"staticColors"},
        {"title":"Брендовые цвета","value":"brandColors"}
      ]'
        :class="$style.tabs"
        :value="activeTab"
        theme="tab"
        with-border
        @change="onTabChange"
      />
      <OzCheckbox
        :checked="inverted"
        :class="$style.toggle"
        theme="toggle"
        @change="inverted = !inverted"
      >
        Inverted
      </OzCheckbox>
      <OzCheckbox
        :checked="darkBg"
        :class="$style.toggle"
        theme="toggle"
        @change="darkBg = !darkBg"
      >
        Тёмная тема
      </OzCheckbox>
    </div>

    <template v-if="activeTab === 'coreColors'">
      <div :class="[$style.colorsItems, darkBg && $style.bgDark]">
        <DsColorItem
          v-for="item in coreItems"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>
    </template>

    <template v-if="activeTab === 'mainColors'">
      <div v-if="!darkBg && !inverted" :class="[$style.colorsItems]">
        <DsColorItem
          v-for="item in filteredLightItems"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>

      <div v-if="darkBg && !inverted" :class="[$style.colorsItems, $style.bgDark]">
        <DsColorItem
          v-for="item in filteredDarkItems"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>

      <div v-if="!darkBg && inverted" :class="[$style.colorsItems]">
        <DsColorItem
          v-for="item in filteredLightInvertedItems"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>

      <div v-if="darkBg && inverted" :class="[$style.colorsItems, $style.bgDark]">
        <DsColorItem
          v-for="item in filteredDarkInvertedItems"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>
    </template>

    <template v-if="activeTab === 'staticColors'">
      <div :class="[$style.colorsItems, darkBg && $style.bgDark]">
        <DsColorItem
          v-for="item in filteredStaticItems"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>
    </template>

    <template v-if="activeTab === 'brandColors'">
      <div v-if="!darkBg && !inverted" :class="[$style.colorsItems]">
        <DsColorItem
          v-for="item in filteredBrandItemsLight"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>
      <div v-if="darkBg && !inverted" :class="[$style.colorsItems, $style.bgDark]">
        <DsColorItem
          v-for="item in filteredBrandItemsDark"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>

      <div v-if="!darkBg && inverted" :class="[$style.colorsItems]">
        <DsColorItem
          v-for="item in filteredBrandLightInvertedItems"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>

      <div v-if="darkBg && inverted" :class="[$style.colorsItems, $style.bgDark]">
        <DsColorItem
          v-for="item in filteredBrandDarkInvertedItems"
          :key="item.name"
          :data-clipboard-text="item.name"
          data-color
          v-bind="item"
        />
      </div>
    </template>
  </div>
</template>

<script>
import OzNotification from '@/notification';
import SbSearch from './SbSearch.vue';
import OzTabs from '@/tabs';
import OzCheckbox from '@/checkbox';
import DsColorItem from './DsColorItem.vue';
import {
  OzBxCoreColors,
  OzBxLightColors,
  OzBxLightInvertedColors,
  OzBxDarkColors,
  OzBxDarkInvertedColors,
  OzBxStaticColors,
  OzBrandLightColors,
  OzBrandLightInvertedColors,
  OzBrandDarkColors,
  OzBrandDarkInvertedColors
} from '~storybook/assets/styles/ds-colors';
import Clipboard from 'clipboard';

export default {
  name: 'DsColors',
  components: { SbSearch, OzTabs, OzCheckbox, DsColorItem, OzNotification },
  data: () => ({
    searchQuery: '',
    isNotificationShown: false,
    activeTab: 'mainColors',
    darkBg: false,
    inverted: false,
    clipInstance: null,
    itemsBxCore: Object.entries(OzBxCoreColors).map(([name, value]) => ({ name, value })).sort(),
    itemsBxLight: Object.entries(OzBxLightColors).map(([name, value]) => ({ name, value })).sort(),
    itemsBxLightInverted: Object.entries(OzBxLightInvertedColors).map(([name, value]) => ({ name, value })).sort(),
    itemsBxDark: Object.entries(OzBxDarkColors).map(([name, value]) => ({ name, value })).sort(),
    itemsBxDarkInverted: Object.entries(OzBxDarkInvertedColors).map(([name, value]) => ({ name, value })).sort(),
    itemsBxStatic: Object.entries(OzBxStaticColors).map(([name, value]) => ({ name, value })).sort(),
    itemsBrandLight: Object.entries(OzBrandLightColors).map(([name, value]) => ({ name, value })).sort(),
    itemsBrandLightInverted: Object.entries(OzBrandLightInvertedColors).map(([name, value]) => ({ name, value })).sort(),
    itemsBrandDark: Object.entries(OzBrandDarkColors).map(([name, value]) => ({ name, value })).sort(),
    itemsBrandDarkInverted: Object.entries(OzBrandDarkInvertedColors).map(([name, value]) => ({ name, value })).sort(),
  }),
  computed: {
    coreItems: vm => vm.itemsBxCore.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredLightItems: vm => vm.itemsBxLight.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredLightInvertedItems: vm => vm.itemsBxLightInverted.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredDarkItems: vm => vm.itemsBxDark.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredDarkInvertedItems: vm => vm.itemsBxDarkInverted.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredStaticItems: vm => vm.itemsBxStatic.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredBrandItemsLight: vm => vm.itemsBrandLight.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredBrandLightInvertedItems: vm => vm.itemsBrandLightInverted.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredBrandItemsDark: vm => vm.itemsBrandDark.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    filteredBrandDarkInvertedItems: vm => vm.itemsBrandDarkInverted.filter(
      item => new RegExp(vm.searchQuery, 'i').test(item.name) || new RegExp(vm.searchQuery, 'i').test(item.value)
    ),
    hasClipboard() {
      return navigator && navigator.clipboard;
    }
  },
  mounted() {
    this.clipInstance = new Clipboard('[data-color]');
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
    onTabChange(newActiveTab) {
      this.activeTab = newActiveTab;
    },
    onInput(value) {
      this.searchQuery = value;
    }
  }
};
</script>

<style module lang="postcss">
  .colors {
    font-family: var(--mainFont);
  }

  .wrapperSearch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .tabContainer {
    display: flex;
    justify-content: space-between;
  }

  .colorsSearch {
    flex-grow: 1;
    margin-right: 16px;
  }

  .colorsItems {
    padding-top: 16px;
    padding-bottom: 16px;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 16px;
    transition: var(--transition);
    transition-property: background-color;
  }

  .bgDark {
    background-color: var(--ozdtBGSecondary);
    color: var(--ozTextPrimaryNegative);
  }

  .notification {
    position: fixed;
    z-index: 50;
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
    border-radius: 12px;
    color: var(--ozTextPrimaryNegative);
  }
</style>
