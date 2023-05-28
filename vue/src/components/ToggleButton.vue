<template>
  <div
    class="toggle-button"
    :class="{ 'all-checked': allChecked, 'is-visible': isVisible }"
    @click="onToggle"
  >
    <button>&or;</button>
  </div>
</template>

<script setup lang="ts">
console.log("render <ToggleButton />");

onUpdated(() => {
  console.log("updated <ToggleButton />");
});

import { useTodosStore } from "@/stores/todos";
import { computed, onUpdated } from "vue";

const store = useTodosStore();
const allChecked = computed(() => store.todosLeft === 0);
const isVisible = computed(() => store.todos.length > 0);
const onToggle = () => store.toggleTodos();
</script>

<style scoped lang="scss">
.toggle-button {
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  > button {
    font-size: 24px;
    font-weight: bold;
    border: 0;
    background: none;
    color: inherit;
    display: none;
    cursor: pointer;
  }

  &.is-visible > button {
    display: block;
  }

  &.all-checked > button {
    color: #e6e6e6;
  }
}
</style>
