import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'prettier/prettier': ['error', {
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        printWidth: 100,
        bracketSpacing: true,
        endOfLine: 'auto',
      }],
    },
  },
  prettier,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
];

export default eslintConfig;