<template>
  <div class="history-item">
    <div class="history-item__time">
      Yesterday
    </div>
    <Pill type="secondary">
      40 USD
    </Pill>
    were
    <Pill>
      50 EUR
    </Pill>
  </div>
</template>

<script setup lang="ts">
import Pill from '@/components/Pill.vue'
</script>

<style scoped>
.conversion {
  align-items: center;
  display: flex;
  gap: var(--s-xs);

  .history-item__time {
    color: var(--color-generic-gray);
  }
}
</style>
