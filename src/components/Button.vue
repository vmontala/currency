<template>
  <button
    type="submit"
    class="button"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  background-color: var(--color-primary);
  border: 0.4rem solid var(--color-generic-gray);
  border-radius: var(--border-radius-lg);
  color: var(--color-generic-white);
  cursor: pointer;
  padding: var(--s-sm);

  &:hover {
    filter: brightness(125%);
  }

  &:focus-visible {
    outline: 0.4rem solid var(--color-secondary);
  }
}
</style>
