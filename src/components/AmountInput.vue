<template>
  <div class="amount">
    <input
      type="number"
      min="0"
      step="0.01"
      placeholder="0"
      class="amount__field"
    />
  </div>
</template>

<style scoped>
.amount {
  position: relative;

  .amount__field {
    inset: 0;
    padding: var(--s-sm) 0px var(--s-sm) var(--s-sm);
    position: absolute;
    text-align: right;

    &::placeholder {
      color: var(--color-generic-gray-light);
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }

    &:focus-visible {
      outline: 0;
    }
  }
}
</style>
