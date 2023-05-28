<template>
  <div class="todo-list">
    <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup lang="ts">
console.log("render <TodoList />");

onUpdated(() => {
  console.log("updated <TodoList />");
});

import { useTodosStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import TodoItem from "./TodoItem.vue";
import { onUpdated } from "vue";

const { filteredTodos } = storeToRefs(useTodosStore());
</script>
