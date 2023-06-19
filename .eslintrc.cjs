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
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'prettier',
    'import',
    '@typescript-eslint',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    "import/extensions": "off",
    "react-refresh/only-export-components": "off",
  },
  root: true,
};
