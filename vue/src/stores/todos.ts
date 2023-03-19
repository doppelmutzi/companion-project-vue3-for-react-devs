import theme from "@/theme";
import { defineStore } from "pinia";
import { toRaw } from "vue";

export interface Todo {
  id: number;
  label: string;
  date: string;
  checked: boolean;
}

// eslint-disable-next-line no-unused-vars
export enum FilterIndex {
  // eslint-disable-next-line no-unused-vars
  ALL = 0,
  // eslint-disable-next-line no-unused-vars
  CHECKED = 1,
  // eslint-disable-next-line no-unused-vars
  UNCHECKED = 2,
}

export const useTodosStore = defineStore("todos", {
  state: () => ({
    theme: theme.DARK,
    todos: [
      {
        id: 1,
        label: "checked todo",
        date: "today",
        checked: false,
      },
      {
        id: 2,
        label: "unchecked todo",
        date: "today",
        checked: true,
      },
    ] as Array<Todo>,
    filterIndex: FilterIndex.ALL,
  }),
  getters: {
    todosLeft: (state) =>
      state.todos.reduce((count, todo) => {
        if (!todo.checked) return count + 1;
        return count;
      }, 0),
    filteredTodos: (state) => {
      if (state.filterIndex === FilterIndex.ALL) {
        return state.todos;
      } else if (state.filterIndex === FilterIndex.UNCHECKED) {
        return state.todos.filter((todo) => !todo.checked);
      } else {
        return state.todos.filter((todo) => todo.checked);
      }
    },
    todosChecked(): boolean {
      return this.todosLeft !== this.todos.length;
    },
  },
  actions: {
    toggleDarkMode() {
      const currentTheme = toRaw(this.theme);
      if (currentTheme === theme.DARK) this.theme = theme.LIGHT;
      else this.theme = theme.DARK;
    },
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    toggleTodos() {
      const toggledTodos = this.todos.map((todo) => ({
        ...todo,
        checked: this.todosLeft > 0,
      }));
      this.todos = toggledTodos;
    },
    toggleCheckTodo(todo: Todo) {
      const index = this.todos.findIndex((item) => item.id === todo.id);
      const updatedTodos = [...this.todos];
      updatedTodos[index] = {
        ...todo,
        checked: !todo.checked,
      };
      this.todos = updatedTodos;
    },
    removeTodo(todo: Todo) {
      this.todos = [...this.todos.filter((item) => item.id != todo.id)];
    },
    clearCheckedTodos() {
      const uncheckedTodos = this.todos.filter((todo) => !todo.checked);
      this.todos = [...uncheckedTodos];
    },
    setFilterIndex(index: FilterIndex) {
      this.filterIndex = index;
    },
  },
});
