import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import {defineConfig} from "eslint/config";
import i18next from 'eslint-plugin-i18next';

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {js,},
    extends: [
      "js/recommended",
      i18next.configs['flat/recommended'],
    ],
    languageOptions: {globals: globals.browser}
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "react/button-has-type": "error",
      'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
    }
  }
]);