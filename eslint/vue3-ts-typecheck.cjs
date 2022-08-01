module.exports = {
  extends: [
    require.resolve('./vue3-ts.cjs'),
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    project: 'tsconfig.json',
  },
  // 对所有的js文件，忽略project设置
  // 并且给env node，因为这些文件一般都是构建配置，会使用的node能力
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      env: {
        node: true,
      },
      parserOptions: {
        project: null,
      },
    },
  ],
};
