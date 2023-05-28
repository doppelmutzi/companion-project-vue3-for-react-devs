<template>
  <LeftItems :label="label" :todos-left="todosLeft" />
</template>

<script setup lang="ts">
console.log("render <Status />");

onUpdated(() => {
  console.log("updated <Status />");
});

import { useTodosStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import { computed, onUpdated } from "vue";
import LeftItems from "./LeftItems.vue";

const { todosLeft } = storeToRefs(useTodosStore());
// this is an example where view (label) does not update without computed
const label = computed(() =>
  todosLeft.value > 1 ? "items left" : "item left"
);
</script>
