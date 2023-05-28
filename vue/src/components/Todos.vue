<template>
  <div class="todos">
    <TodoInput />
    <!-- scoped slot with slot props 
      / "simulate" render prop in React -->
    <TodoList>
      <template #todo="{ todo }">
        <TodoItem :key="todo.id" :todo="todo" />
      </template>
    </TodoList>
    <ActionBar v-if="showActionBar" />
  </div>
</template>

<script setup lang="ts">
console.log("render <Todos />");

onUpdated(() => {
  console.log("updated <Todos />");
});

import { useTodosStore } from "@/stores/todos";
import { computed, onUpdated } from "vue";
import ActionBar from "@/components/ActionBar.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import TodoItem from "./TodoItem.vue";

const { todos } = useTodosStore();
const showActionBar = computed(() => todos.length > 0);
</script>

<style scoped lang="scss">
.todos {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
