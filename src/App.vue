<template>
  <!-- Normally there would be a router here, but it's not needed for this use case -->
  <Main>
    <Exchange />
  </Main>
</template>

<script setup lang="ts">
import Main from '@/layout/Main.vue'
// If this would be loaded with a router, the component would be bound to a route and not directly
// imported on the `App`, making the import of a `Main.vue` file a bit more readable/predictable
import Exchange from '@/views/exchange/Main.vue'
</script>
