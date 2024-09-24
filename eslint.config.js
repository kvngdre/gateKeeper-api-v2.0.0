import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node, sourceType: "module" } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ["node_modules", "dist"] },
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
