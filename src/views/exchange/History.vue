<template>
  <section class="history">
    <h2 class="history__title">
      Exchange history
    </h2>
    <div class="history__items">
      <Conversion />
      <Conversion />
      <Conversion />
      <Conversion />
      <Conversion />
    </div>
  </section>
</template>

<script setup lang="ts">
import Conversion from '@/components/Conversion.vue'
</script>

<style scoped>
.history {
  display: flex;
  flex-direction: column;
  gap: var(--s-md);

  .history__title {
    font-size: 3.2rem;
  }

  .history__items {
    display: flex;
    flex-direction: column;
    gap: var(--s-sm);
  }
}
</style>
