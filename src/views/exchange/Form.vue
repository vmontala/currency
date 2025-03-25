<template>
  <form class="comparison">
    <Field>
      <AmountInput />
      <CurrencySelector />
    </Field>
    to
    <Field>
      <CurrencySelector />
    </Field>
    <Button>
      <Icon name="arrow-right" />
    </Button>
  </form>
</template>

<script setup lang="ts">
import AmountInput from '@/components/AmountInput.vue'
import Button from '@/components/Button.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'
import Field from '@/components/Field.vue'
import Icon from '@/components/Icon.vue'
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
