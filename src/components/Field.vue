<template>
  <div class="field">
    <slot />
  </div>
</template>

<style scoped>
.field {
  background-color: var(--color-generic-white);
  border: 0.4rem solid var(--color-generic-gray);
  border-radius: var(--border-radius-lg);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  overflow: hidden;

  &:focus-within {
    outline: 0.4rem solid var(--color-secondary);
  }
}
</style>
