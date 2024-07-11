const globals = require('globals')
const pluginJs = require('@eslint/js')

const config = [
  {
    ...pluginJs.configs.recommended,
    files: ['src/**/*.js'],
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: globals.browser,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
]

module.exports = config
