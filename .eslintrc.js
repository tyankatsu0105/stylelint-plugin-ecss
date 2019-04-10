module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    "sourceType": "module",
},
  extends: ["eslint:recommended", "plugin:node/recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  }
};