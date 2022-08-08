module.exports = {
  extends: ['plugin:@iskl/vue-ts-typecheck', 'prettier'],
  overrides: [
    {
      // 根目录层级的*.ts没有纳入tsconfig的project，所以在这里设置为project为null，不进行type checking
      files: ['./*.ts', './scripts/*.ts', './dist/**/*'],
      env: {
        node: true,
      },
      parserOptions: {
        project: null,
      },
    },
  ],
};
