module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true},
  extends: [
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies' : 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
}