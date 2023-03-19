<template>
  <div>{{ todosLeft }} {{ label }}</div>
</template>

<script setup lang="ts">
interface Props {
  todosLeft: number;
  label: string;
}
defineProps<Props>();
</script>
