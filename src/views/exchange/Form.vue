<template>
  <form class="comparison" @submit.prevent="submit()">
    <Field class="comparison__from">
      <AmountInput v-model="amount" :disabled="isLoading" />
      <CurrencySelector v-model="from" :disabled="isLoading" />
    </Field>
    to
    <Field>
      <CurrencySelector v-model="to" :disabled="isLoading" />
    </Field>
    <Button :disabled="isLoading">
      <Icon name="arrow-right" />
    </Button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import AmountInput from '@/components/AmountInput.vue'
import Button from '@/components/Button.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'
import Field from '@/components/Field.vue'
import Icon from '@/components/Icon.vue'

import useConversionStore from '@/stores/conversion'

const conversionStore = useConversionStore()

const amount = ref()
const from = ref('EUR')
const to = ref('USD')

const isLoading = ref(false)

const submit = async () => {
  if (!amount.value) {
    return
  }

  isLoading.value = true;

  try {
    await conversionStore.convert(from.value, to.value, amount.value)

    amount.value = undefined
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.comparison {
  align-items: center;
  display: grid;
  gap: var(--s-md);
  grid-template-columns: repeat(2, min-content) auto;
  width: 100%;

  .comparison__from {
    grid-column: 1/4;
  }

  @media screen and (min-width: 700px) {
    grid-template-columns: auto repeat(3, min-content);

    .comparison__from {
      grid-column: initial;
    }
  }
}
</style>
