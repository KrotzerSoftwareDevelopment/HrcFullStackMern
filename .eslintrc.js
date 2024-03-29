module.exports =
{
  env: { browser: true, es6: true, node: true },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions:
  {
    ecmaFeatures:
    {
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    "no-underscore-dangle": 0
  }
}