module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,

  env: {
    jest: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsx-a11y/strict',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@monorepo-template/react-fixable',
    '@monorepo-template/react-strict',
    '@monorepo-template/react-typescript',
    '@monorepo-template/typescript',
    '@monorepo-template/typescript-fixable',
    '@monorepo-template/typescript-strict',
    'prettier',
  ],

  overrides: [
    {
      files: ['*.cjs', '*.js', '*.jsx'],
      extends: '@monorepo-template/typescript/cjs',
    },

    {
      files: ['*.cjs', '*.js', '*.jsx', '*.mjs'],
      extends: [
        '@monorepo-template/typescript/js',
        '@monorepo-template/typescript-fixable/js',
      ],
    },

    {
      files: ['*.eslintrc.cjs'],
      extends: '@monorepo-template/typescript/eslint',
    },

    {
      files: ['*.json'],
      extends: [
        '@monorepo-template/react-typescript/json',
        '@monorepo-template/typescript/json',
        '@monorepo-template/typescript-fixable/json',
      ],
    },

    {
      files: ['*.ts', '*.tsx'],
      extends: ['@monorepo-template/typescript/ts'],
    },
  ],

  parserOptions: {
    extraFileExtensions: ['.json'],
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    useJSXTextNode: true,
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
    },
  },

  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },
};
