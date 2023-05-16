<template>
  <MailForm @subscribe-newsletter="onSubscribeNewsletter" />
  <Headline font-color="red" text="todos" class="headline" />
  <Todos />
</template>

<script setup lang="ts">
import Headline from "./components/Headline.vue";
import MailForm from "./components/MailForm.vue";
import Todos from "./views/Todos.vue";

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
