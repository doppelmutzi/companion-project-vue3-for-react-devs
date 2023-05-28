<template>
  <div class="filter-buttons">
    <FilterButton
      label="All"
      :active="filterIndex === FilterIndex.ALL"
      :on-click="handleAllClick"
    />
    <FilterButton
      label="Active"
      :active="filterIndex === FilterIndex.UNCHECKED"
      :on-click="handleActiveClick"
    />
    <FilterButton
      label="Completed"
      :active="filterIndex === FilterIndex.CHECKED"
      :on-click="handleCompletedClick"
    />
  </div>
</template>

<script setup lang="ts">
console.log("render <FilterButtons />");

onUpdated(() => {
  console.log("updated <FilterButtons />");
});

import FilterButton from "./FilterButton.vue";
import { useTodosStore } from "@/stores/todos";
import { FilterIndex } from "@/stores/todos";
import { storeToRefs } from "pinia";
import { onUpdated } from "vue";

const store = useTodosStore();
const { filterIndex } = storeToRefs(useTodosStore());

const handleAllClick = () => {
  store.setFilterIndex(FilterIndex.ALL);
};

const handleActiveClick = () => {
  store.setFilterIndex(FilterIndex.UNCHECKED);
};

const handleCompletedClick = () => {
  store.setFilterIndex(FilterIndex.CHECKED);
};
</script>

<style scoped lang="scss">
.filter-buttons {
  display: flex;

  > * + * {
    margin-left: 16px;
  }
}
</style>
