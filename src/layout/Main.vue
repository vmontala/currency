<template>
  <main class="main">
    <!--
      Normally there would be a loading state here, but it would only trigger once as the data
      dependencies are cached
    -->
    <Suspense>
      <slot />
    </Suspense>
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
