<template>
  <button
    :style="{
      borderColor: active ? theme.color : 'transparent',
      backgroundColor,
      color,
    }"
    @click="onClick()"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import { storeToRefs } from "pinia";

interface ButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

defineProps<ButtonProps>();

const { theme } = storeToRefs(useTodosStore());
const { backgroundColor, color } = theme.value;
</script>
<style scoped lang="scss">
button {
  border-style: solid;
  border-width: 1px;
  padding: 7px;
  border-radius: 3px;
  background: none;
  cursor: pointer;
  display: block;
}
</style>
