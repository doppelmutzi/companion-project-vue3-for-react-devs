export default {
  getPreferedLang: () => (navigator.language.startsWith("en") ? "en" : "de"),
  todoInput: {
    placeholder: {
      en: "What needs to be done?",
      de: "Was muss getan werden?",
    },
  },
};
