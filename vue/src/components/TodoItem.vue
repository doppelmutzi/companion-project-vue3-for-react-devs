<template>
  <div>
    <div class="todo-item" @mouseover="onMouseOver" @mouseout="onMouseOut">
      <button class="check-button" @click="handleCheckClick()">
        <span v-show="todo.checked" class="check">✔️</span>
      </button>
      <div class="item-label" :class="{ 'is-crossed-out': isCrossedOut }">
        {{ todo.label }}
        <div>{{ todo.date }}</div>
      </div>
      <DeleteButton v-show="hover" :on-click="handleDeleteClick" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DeleteButton from "./DeleteButton.vue";
import { useTodosStore } from "@/stores/todos";
import { computed, ref, type PropType } from "vue";

const hover = ref(false);

const onMouseOver = () => {
  return (hover.value = true);
};
const onMouseOut = () => {
  return (hover.value = false);
};

// const props = defineProps<Props>();

const { toggleCheckTodo, removeTodo } = useTodosStore();

const props = defineProps({
  todo: {
    type: Object as PropType<{
      id: number;
      label: string;
      date: string;
      checked: boolean;
    }>,
    required: true,
  },
});
const isCrossedOut = computed(() => props.todo.checked === true);

const handleDeleteClick = () => {
  removeTodo(props.todo);
};

const handleCheckClick = () => {
  toggleCheckTodo(props.todo);
};
</script>

<style scoped lang="scss">
.todo-item {
  background: white;
  padding: 16px;
  display: flex;
  align-items: center;
  border: 0 solid #e6e6e6;
  border-bottom-width: 1px;
}

.check-button {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #a0a0a0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.check {
  color: transparent;
  text-shadow: 0 0 0 #0dbe9b;
}

.item-label {
  flex: 1;
  font-size: 24px;
  margin: 0 24px;

  > div {
    display: block;
    font-size: 70%;
  }

  &.is-crossed-out {
    text-decoration: line-through;
  }
}
</style>
