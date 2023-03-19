<template>
  <LeftItems :label="label" :todos-left="todosLeft" />
</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import LeftItems from "./LeftItems.vue";

const { todosLeft } = storeToRefs(useTodosStore());
// this is an example where view (label) does not update without computed
const label = computed(() =>
  todosLeft.value > 1 ? "items left" : "item left"
);
</script>
