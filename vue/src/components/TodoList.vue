<template>
  <div class="todo-list">
    <slot v-for="todo in filteredTodos" name="todo" :todo="todo"></slot>
  </div>
</template>

<script setup lang="ts">
console.log("render <TodoList />");

onUpdated(() => {
  console.log("updated <TodoList />");
});

import { useTodosStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import { onUpdated } from "vue";

const { filteredTodos } = storeToRefs(useTodosStore());
</script>
