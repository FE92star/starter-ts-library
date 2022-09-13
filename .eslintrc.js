const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  // 自定义eslint preset扩展包
  extends: ['@fe92star/eslint-config-ts', '@fe92star/eslint-config-prettier'],
})
