<template>
  <form class="comparison" @submit.prevent="submit()">
    <Field>
      <AmountInput v-model="amount" />
      <CurrencySelector v-model="from" />
    </Field>
    to
    <Field>
      <CurrencySelector v-model="to" />
    </Field>
    <Button>
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

const submit = async () => {
  if (!amount.value) {
    return
  }

  await conversionStore.convert(from.value, to.value, amount.value)

  amount.value = undefined
}
</script>

<style scoped>
.comparison {
  align-items: center;
  display: grid;
  gap: var(--s-md);
  grid-template-columns: auto repeat(3, min-content);
  width: 100%;
}
</style>
