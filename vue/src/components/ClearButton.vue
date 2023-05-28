<template>
  <a @click="onClick()">clear completed</a>
</template>

<script setup lang="ts">
import { onUpdated } from "vue";

console.log("render <ClearButton />");

onUpdated(() => {
  console.log("updated <ClearButton />");
});

defineProps({
  onClick: {
    type: Function,
    default: () => {
      // no op
    },
  },
});
</script>

<style scoped lang="scss">
a {
  padding: 4px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
