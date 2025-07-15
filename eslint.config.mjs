import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable specific rules
      "@typescript-eslint/no-explicit-any": "off", // Allows usage of 'any'
      "@typescript-eslint/no-unused-vars": "off", // Allows unused variables
      "react-hooks/exhaustive-deps": "off", // Disables exhaustive-deps check for React Hooks
      "no-var": "off", // Allows usage of 'var'
      "prefer-const": "off", // Allows 'let' even if 'const' could be used
      "@next/next/no-img-element": "off", // Allows <img> tag instead of <Image /> component
    },
  },
];

export default eslintConfig;
