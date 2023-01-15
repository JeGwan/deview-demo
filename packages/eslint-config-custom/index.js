module.exports = {
  extends: ['prettier'],
  plugins: ['prettier', 'unused-imports'],
  rules: {
    'no-console': 'warn',
    'consistent-return': 'warn',
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'warn',
  },
}
