<template>
  <button
    type="submit"
    class="button"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>

<style scoped>
.button {
  background-color: var(--color-primary);
  border: 0.4rem solid var(--color-generic-gray);
  border-radius: var(--border-radius-lg);
  color: var(--color-generic-white);
  padding: var(--s-sm);

  &:not([disabled]) {
    cursor: pointer;

    &:hover {
      filter: brightness(125%);
    }
  }

  &:focus-visible {
    outline: 0.4rem solid var(--color-secondary);
  }

  &[disabled] {
    background-color: var(--color-generic-background);
    color: var(--color-generic-gray);
  }
}
</style>
