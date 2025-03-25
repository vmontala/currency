<template>
  <div class="pill" :class="[`pill--${type}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    required: true,
    default: 'primary',
  }
})
</script>

<style scoped>
.pill {
  border-radius: var(--border-radius-sm);
  padding: var(--s-xs);

  &.pill--primary {
    background-color: var(--color-primary);
  }

  &.pill--secondary {
    background-color: var(--color-secondary);
  }
}
</style>
