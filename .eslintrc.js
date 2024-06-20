module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],

  env: {
    node: true,
  },
};
