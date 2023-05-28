<template>
  <div>{{ todosLeft }} {{ label }}</div>
</template>

<script setup lang="ts">
import { onUpdated } from "vue";

console.log("render <LeftItems />");

onUpdated(() => {
  console.log("updated <LeftItems />");
});

interface Props {
  todosLeft: number;
  label: string;
}
defineProps<Props>();
</script>
