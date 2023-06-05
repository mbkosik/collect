module.exports = {
  env: { browser: true, es2020: true, amd: true, node: true },
  extends: [
    'mantine',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'react-hooks', 'react-refresh', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'import/prefer-default-export': 'off',
  },
}
