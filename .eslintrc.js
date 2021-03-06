module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'no-unused-vars': ['warn'],
    'import/prefer-default-export': 0,
    'arrow-parens': ['error', 'as-needed'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    // printWidth in the .prettierrc.js file does not work, so we have to specify it here
    'prettier/prettier': ['warn', { printWidth: 100 }],
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaversion: 6,
  },
  env: {
    browser: true,
    node: true,
  },
};
