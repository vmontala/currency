<template>
  <section class="exchange">
    <header class="exchange__header">
      <h1>
        Currency exchange
      </h1>
      <Form />
    </header>
    <Conversion :conversion="conversionStore.latest" v-if="conversionStore.latest" />
  </section>
  <History v-if="conversionStore.history.length" />
</template>

<script setup lang="ts">
import Conversion from '@/components/Conversion.vue'
import Form from './Form.vue'
import History from './History.vue'

import useCurrenciesStore from '@/stores/currencies'
import useConversionStore from '@/stores/conversion'

await useCurrenciesStore().fetchCurrencies()

const conversionStore = useConversionStore()
</script>

<style scoped>
.exchange {
  font-size: 3.2rem;

  &,
  .exchange__header {
    display: flex;
    flex-direction: column;
    gap: var(--s-lg);
  }

  .exchange__header {
    font-size: 5.2rem;
  }
}
</style>
