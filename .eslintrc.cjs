module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-base",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
