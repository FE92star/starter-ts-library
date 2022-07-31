const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  // TODO: 整理自己的eslint配置规范,然后直接引用自己的npm包
  extends: ['@sxzz/eslint-config-ts', '@sxzz/eslint-config-prettier'],
})
