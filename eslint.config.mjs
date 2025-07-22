const config = [
  js.configs.recommended,
  ...next(),
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {},
  },
  {
    files: ["*.stories.@(js|jsx|ts|tsx)"],
    plugins: {
      storybook,
    },
    rules: {
      ...storybook.configs.recommended.rules,
    },
  },
  prettier,
];

export default config;
