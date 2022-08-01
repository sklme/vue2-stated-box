module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
  },
  extends: [require.resolve('./base.cjs'), 'plugin:vue/vue3-recommended'],
};
