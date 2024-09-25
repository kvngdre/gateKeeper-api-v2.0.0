import globals from "globals";
import tseslint from "typescript-eslint";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended
});

export default [
  { languageOptions: { globals: globals.node } },
  // ...compat.extends("standard-with-typescript"),
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin
    }
  },
  {
    rules: {
      ...prettier.rules,
      "prettier/prettier": "error",
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
  }
];
