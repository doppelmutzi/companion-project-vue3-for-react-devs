module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-prettier"],
  rules: {
    "selector-list-comma-newline-before": "never-multi-line",
    "color-function-notation": "legacy",
    "alpha-value-notation": "number",
  },
};
