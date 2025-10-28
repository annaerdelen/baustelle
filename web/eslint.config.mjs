import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'no-console': 1,
    'no-undef': 1,
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0,
    'vue/require-explicit-emits': 0,
    'vue/no-unused-vars': 1,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
  },
});
