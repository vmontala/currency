<template>
  <div class="currencies">
    {{ value?.code }}
    <select v-model="value" class="currencies__field">
      <option
        v-for="option in options"
        :key="option.code"
        :value="option"
      >
        {{ option.name }} ({{ option.code }})
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import currencies from './currencies.json'

const options = computed(() => Object.entries(currencies).map(([code, name]) => ({ code, name })))
const value = ref(options.value.find(({ code }) => code === 'EUR'));
</script>

<style scoped>
.currencies {
  padding: var(--s-sm);
  position: relative;

  .currencies__field {
    inset: 0;
    opacity: 0;
    position: absolute;
  }

  .currencies__value {
    background-color: var(--color-generic-white);
    padding: var(--s-sm);
  }
}
</style>
