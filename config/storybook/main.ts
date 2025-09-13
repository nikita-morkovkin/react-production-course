import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  staticDirs: [
    '../../src/shared/assets/images',
    '../../src/shared/assets/icons',
  ],
  stories: [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/preset-scss",
    {
      name: 'storybook-preset-inline-svg',
      options: {
        include: /source\/.+\.svg$/,
        svgInlineLoaderOptions: {
          removeTags: true,
          removingTags: ['circle']
        }
      }
    }
  ],
  framework: {
    "name": "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    defaultName: 'Documentation',
  }
};
export default config;