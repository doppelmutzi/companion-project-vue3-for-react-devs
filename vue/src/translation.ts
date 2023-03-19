export default {
  getPreferedLang: (): string =>
    navigator.language.startsWith("en") ? "en" : "de",
  todoInput: {
    placeholder: {
      en: "What needs to be done?",
      de: "Was muss getan werden?",
    },
  },
};
