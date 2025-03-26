<template>
  <div class="conversion">
    <div class="conversion__time" :title="conversion.date">
      {{ time }}
    </div>
    <Pill type="secondary">
      {{ conversion.from.amount.label }}
      {{ conversion.from.currency }}
    </Pill>
    {{ time === 'today' ? 'are' : 'were' }}
    <Pill>
      {{ conversion.to.amount.label }}
      {{ conversion.to.currency }}
    </Pill>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type Conversion from '@/types/Conversion'

import Pill from '@/components/Pill.vue'

import getRelative from '@/utils/date/getRelative'

interface Props {
  conversion: Conversion
}

const props = defineProps<Props>()

const time = computed(() => getRelative(props.conversion.date))
</script>

<style scoped>
.conversion {
  align-items: center;
  display: flex;
  gap: var(--s-xs);

  .conversion__time {
    color: var(--color-generic-gray);
    text-transform: capitalize;
  }
}
</style>
