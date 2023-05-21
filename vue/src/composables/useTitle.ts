import { type MaybeRef, type Ref, watchEffect, ref } from "vue";

type Options = {
  observe?: boolean;
  prefix?: string;
};

export default (title: MaybeRef<string>, options?: Options) => {
  const titlePrefix = options?.prefix ?? "";
  const observe = options?.observe ?? true;
  const titleRef = ref(title);
  if (observe) {
    watchEffect(() => {
      console.log("watch effect");
      document.title = titlePrefix + titleRef.value;
    });
  } else {
    console.log("else");
    document.title = titlePrefix + titleRef.value;
  }
  return {
    setTitle: (newTitle: string) => {
      console.log("setTitle");
      document.title = titlePrefix + newTitle;
    },
    titleRef,
  };
};

export const useTitleSimple = (title: Ref<string>) => {
  watchEffect(() => {
    document.title = title.value;
  });
};
