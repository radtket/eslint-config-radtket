module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  rules: {
    'arrow-body-style': ['error', 'always'],
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': 1,
    'react/jsx-uses-react': 1,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 0,
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        printWidth: 80,
        jsxBracketSameLine: false,
        'number-leading-zero': null,
        arrowParens: 'avoid',
      },
    ],
  },
}
