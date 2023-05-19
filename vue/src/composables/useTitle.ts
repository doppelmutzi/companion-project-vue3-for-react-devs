import { type MaybeRef, watchEffect, ref } from "vue";

export default (title: MaybeRef<string>): void => {
  const titleRef = ref(title);
  watchEffect(() => {
    document.title = titleRef.value;
  });
};
