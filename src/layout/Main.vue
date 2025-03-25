<template>
  <main class="main">
    <slot />
  </main>
</template>

<style scoped>
.main {
  max-width: 80rem;
  width: 100%;
  padding: var(--s-xl) var(--s-md) var(--s-md);
  display: flex;
  flex-direction: column;
  gap: var(--s-xl);
}
</style>
