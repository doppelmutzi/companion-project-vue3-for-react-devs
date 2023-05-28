<template>
  <div class="action-bar" :style="theme">
    <Status />
    <div class="filter-buttons">
      <FilterButtons />
    </div>
    <ClearButton v-if="showClearButton" :on-click="handleClearClick" />
  </div>
  <div class="drop-shadow" />
</template>

<script setup lang="ts">
console.log("render <ActionBar />");

onUpdated(() => {
  console.log("updated <ActionBar />");
});

import Status from "./Status.vue";
import FilterButtons from "./FilterButtons.vue";
import ClearButton from "./ClearButton.vue";
import { useTodosStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import { computed, onUpdated } from "vue";

const { theme, todosChecked } = storeToRefs(useTodosStore());
const { clearCheckedTodos } = useTodosStore();
const showClearButton = computed(() => todosChecked.value);
const handleClearClick = () => clearCheckedTodos();
</script>

<style scoped lang="scss">
.action-bar {
  background: white;
  padding: 0 16px;
  height: 50px;
  display: flex;
  align-items: center;

  .filter-buttons {
    flex: 1;
    display: flex;
    justify-content: center;
  }
}

.drop-shadow {
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 25px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
}
</style>
