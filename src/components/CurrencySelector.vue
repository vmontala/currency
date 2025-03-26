<template>
  <div class="currencies">
    <select
      v-model="model"
      class="currencies__field"
      v-bind="$attrs"
    >
      <option
        v-for="currency in currenciesStore.currencies"
        :key="currency.code"
        :value="currency.code"
      >
        {{ currency.name }} ({{ currency.code }})
      </option>
    </select>
    <div class="currencies__value">
      {{ model }}
    </div>
  </div>
</template>

<script setup lang="ts">
import useCurrenciesStore from '@/stores/currencies'

const currenciesStore = useCurrenciesStore()

const model = defineModel({ required: true })

defineOptions({ inheritAttrs: false })
</script>

<style scoped>
.currencies {
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

  .currencies__value {
    padding: var(--s-sm);
    background-color: var(--color-generic-white);
  }

  .currencies__field[disabled] + .currencies__value {
    background-color: var(--color-generic-background);
    color: var(--color-generic-gray);
  }
}
</style>
