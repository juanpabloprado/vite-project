module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended', // recommended ESLint configuration, which includes a set of common rules for JavaScript code.
    'plugin:react/recommended', // recommended ESLint configuration, which includes a set of common rules for React code.
    'plugin:react/jsx-runtime', // configuration for the React plugin that adds support for the new JSX transform in React 17.
    'plugin:react-hooks/recommended', // recommended configuration for the React Hooks plugin, which includes rules for React Hooks.
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
