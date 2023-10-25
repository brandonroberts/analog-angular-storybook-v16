import type { StorybookConfig } from "@storybook/angular";
import { mergeConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

process.env.NODE_ENV = 'test';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [angular({ tsconfig: './tsconfig.app.json', jit: false })],
    });
  },  
  docs: {
    autodocs: "tag",
  },
};
export default config;
