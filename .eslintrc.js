module.exports = {
  globals: {
    React: true,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import-helpers", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // new line between groups
        groups: ["/^react/", "module", "/^@//", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "no-case-declarations": "off",
    "no-useless-constructor": "off",
  },
};
