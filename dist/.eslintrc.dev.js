"use strict";

module.exports = {
  root: true,
  parser: 'babel-eslint',
  "extends": ['eslint:recommended', 'plugin:react/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:react-hooks/recommended', 'airbnb'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['node_modules/', '.next/'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [['@/homepage', './src/homepage/'], ['@/home', './src/home/'], ['@/homesList', './src/homesList/'], ['@/addHome', './src/addHome/'], ['@/editHome', './src/editHome/'], ['@/compare', './src/compare/'], ['@/shared', './src/shared/'], ['@/state', './src/state/'], ['@/pages', './src/pages/']],
        extensions: ['.js', '.jsx', '.json', '.jpg', '.png', '.ico']
      }
    }
  },
  plugins: ['import'],
  rules: {
    'object-curly-spacing': [2, 'never'],
    indent: ['error', 2, {
      ignoreComments: true,
      SwitchCase: 1
    }],
    'react/jsx-indent': ['error', 2],
    'no-tabs': 0,
    quotes: ['error', 'single'],
    'linebreak-style': 'off',
    'lineeslintreact/jsx-one-expression-per-line': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'as-needed': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'arrow-parens': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      pathGroups: [{
        pattern: '@/**',
        group: 'internal'
      }, {
        pattern: 'react',
        group: 'external',
        position: 'before'
      }],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'always'
    }]
  }
};