<template>
  <div class="todos">
    <TodoInput />
    <TodoList />
    <ActionBar v-if="showActionBar" />
  </div>
</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import { computed } from "vue";
import ActionBar from "@/components/ActionBar.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

const { todos } = useTodosStore();
const showActionBar = computed(() => todos.length > 0);
</script>

<style scoped lang="scss">
.todos {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
