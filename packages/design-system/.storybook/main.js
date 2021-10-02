const path = require("path");

const resolvePath = (_path) => path.join(process.cwd(), '../../node_modules/', _path);

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  typescript: {
    check: true,
  },
  "webpackFinal": async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@emotion/styled": resolvePath("@emotion/styled"),
        "@emotion/styled": resolvePath("@emotion/styled"),
        "emotion-theming": resolvePath("@emotion/react"),
      }
    }
  })
}