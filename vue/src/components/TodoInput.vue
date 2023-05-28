<template>
  <div class="todo-input">
    <ToggleButton />
    <input
      ref="inputRef"
      v-model="inputValue"
      :placeholder="placeholder"
      @keyup.enter="onEnter"
    />
  </div>
</template>

<script setup lang="ts">
console.log("render <TodoInput />");

onUpdated(() => {
  console.log("updated <TodoInput />");
});

import { useTodosStore } from "@/stores/todos";
import ToggleButton from "./ToggleButton.vue";
import translation from "@/translation";
import { ref, onMounted, type Ref, onUpdated } from "vue";
import useTitle, { useTitleSimple } from "@/composables/useTitle";

const { todoInput, getPreferedLang } = translation;
const lang: string = getPreferedLang();
// FIXME how to type this?
const placeholder = todoInput.placeholder[lang];

const inputRef: Ref<HTMLInputElement | null> = ref(null);

onMounted(() => {
  if (inputRef.value != null) {
    inputRef.value.focus();
  }
});

const inputValue = ref("");

const recentTodo = ref<string>(document.title);

// useTitleSimple(recentTodo);

useTitle(recentTodo, { prefix: "🚀 " });

// const { titleRef } = useTitle(document.title, { prefix: "🚀 " });

// const recentTodo: Ref<string> = titleRef;

// const { setTitle } = useTitle("init", { observe: false });

const { addTodo } = useTodosStore();

const onEnter = (evt: Event) => {
  const { value } = <HTMLInputElement>evt.target;
  if (value.trim() !== "") {
    addTodo({
      id: Date.now(),
      date: new Date(Date.now()).toDateString(),
      label: value.trim(),
      checked: false,
    });

    recentTodo.value = inputValue.value;

    // setTitle(inputValue.value);
    inputValue.value = "";
  }
};
</script>

<style scoped lang="scss">
.todo-input {
  --text-color: rgba(175, 47, 47);

  display: flex;
  border: 0 solid #e6e6e6;
  border-bottom-width: 1px;
  padding: 5px 0;

  > * {
    height: 50px;
  }

  > input {
    flex: 1;
    border: 0;
    font-size: 24px;
    caret-color: var(--text-color);
    padding: 3px 10px;

    &::placeholder {
      color: #d9d9d9;
      font-style: italic;
    }

    &:focus-visible {
      outline-color: var(--text-color);
    }
  }
}
</style>
