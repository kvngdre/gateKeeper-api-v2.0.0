import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";
import pluginPromise from "eslint-plugin-promise/index.js";

export default [
  {
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module"
      }
    }
  },
  { linterOptions: { reportUnusedDisableDirectives: "warn" } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["src/**/*.{ts,js}"] },
  { ignores: ["node_modules/**/*", "dist/**/*", "coverage/**/*", "eslint.config.js"] },
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin
    }
  },
  importPlugin.flatConfigs.recommended,
  pluginPromise.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": "error",
      "no-unused-vars": ["off", { args: "all", argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-vars": ["off", { args: "all", argsIgnorePattern: "^_" }],
      "import/order": [
        "error",
        {
          "newlines-between": "never",
          groups: [
            ["builtin", "external"],
            ["internal", "parent", "sibling", "index"]
          ]
        }
      ]
    }
  },
  {
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts"]
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["./tsconfig.json"]
        }
      }
    }
  }
];
