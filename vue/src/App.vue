<template>
  <AppLayout>
    <template #newsletter>
      <MailForm @subscribe-newsletter="onSubscribeNewsletter" />
    </template>
    <template #headline>
      <Headline font-color="red" text="todos.vue" class="headline" />
    </template>
    <template #default>
      <Todos />
    </template>
  </AppLayout>
</template>

<script setup lang="ts">
console.log("render <App />");

onUpdated(() => {
  console.log("updated <App />");
});

import { onUpdated } from "vue";
import Headline from "./components/Headline.vue";
import MailForm from "./components/MailForm.vue";
import Todos from "./components/Todos.vue";
import AppLayout from "./components/AppLayout.vue";

const onSubscribeNewsletter = (firstName: string) => {
  console.log(`Subscribe newsletter for ${firstName}`);
};
</script>
<style lang="scss">
.headline {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
}
</style>
