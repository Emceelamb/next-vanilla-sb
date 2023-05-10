import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    // "../stories/**/*.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      optimization: {
        ...config.optimization,
        // https://github.com/vanilla-extract-css/vanilla-extract/issues/905
        splitChunks: false,
      },
      plugins: [
        ...config.plugins,
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin(),
      ],
    };
  },
};
export default config;
