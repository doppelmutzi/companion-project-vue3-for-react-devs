<template>
  <a @click="onClick()">clear completed</a>
</template>

<script setup lang="ts">
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
