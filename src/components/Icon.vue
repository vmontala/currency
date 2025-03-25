<template>
  <Icon
    class="icon"
    fill="currentColor"
    viewBox="0 0 24 24"
    :style="{
      height: `${size / 10}rem`,
      width: `${size / 10}rem`,
    }"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 52,
  },
})

const Icon = defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`))
</script>

<style scoped>
.icon {
  display: block;
}
</style>
