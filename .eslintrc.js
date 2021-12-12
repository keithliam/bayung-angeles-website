module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'import/prefer-default-export': 0,
    'arrow-parens': ['error', 'as-needed'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    // printWidth in the .prettierrc.js file does not work, so we have to specify it here
    'prettier/prettier': ['warn', { printWidth: 100 }],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
