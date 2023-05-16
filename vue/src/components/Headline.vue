<template>
  <div><!-- useless; just for demo purposes --></div>
  <h1 :class="$attrs.class" :style="{ color }">{{ text }}</h1>
</template>
<script lang="ts" setup>
import { type PropType, computed } from "vue";

export type HeadlineColor = "green" | "red" | "gray";

const prop = defineProps({
  fontColor: {
    type: String as PropType<HeadlineColor>,
    default: "red",
  },
  text: {
    type: String,
    required: true,
  },
});

const color = computed(() => {
  switch (prop.fontColor) {
    case "green":
      return "#0dbe9b";
    case "gray":
      return `rgb(109, 117, 130)`;
    default:
      return `rgba(175, 47, 47`;
  }
});
</script>
