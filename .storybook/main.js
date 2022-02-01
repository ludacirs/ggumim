const path = require("path");

module.exports = {
  stories: ["../src/components/"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app"],
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules", "styles"];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "../src/styles/"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@assets": path.resolve(__dirname, "../src/assets/"),
    };
    return config;
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
