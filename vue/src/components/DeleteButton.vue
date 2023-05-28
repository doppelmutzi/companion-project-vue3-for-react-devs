<template>
  <button @click="onClick()">{{ label }}</button>
</template>

<script setup lang="ts">
import { onUpdated } from "vue";

console.log("render <DeleteButton />");

onUpdated(() => {
  console.log("updated <DeleteButton />");
});

defineProps({
  label: {
    type: String,
    default: "❌",
  },
  onClick: {
    type: Function,
    default: () => {
      // no op
    },
  },
});
</script>

<style scoped lang="scss">
button {
  border: none;
  font-size: 30px;
  cursor: pointer;
  background: none;
}
</style>
