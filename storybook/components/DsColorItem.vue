<template>
  <div
    :class="$style.colorCard"
  >
    <div
      :style="{ background: value }"
      :class="[$style.colorCardColor]"
    />

    <div :class="[$style.colorCardName]">
      {{ name }}<br>{{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DsColorItem',

  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    }
  }
};
</script>

<style module lang="postcss">
  .colorCard {
    position: relative;
    padding: 8px;
    text-align: center;
    border-radius: 12px;
    font-weight: var(--fontNormal);
    font-size: var(--bodyMFont);
  }

  .colorCard:hover {
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: var(--clearLightKey100);
  }

  .colorCardColor {
    height: 50px;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 8px;
  }

  .colorCardName {
    word-break: break-word;
  }
</style>
