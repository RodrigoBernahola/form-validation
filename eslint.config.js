import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  // Configuración base recomendada de ESLint
  js.configs.recommended,

  // Ignorar archivos y carpetas que no queremos analizar
  {
    ignores: ["dist/**", "node_modules/**", "*.min.js", "coverage/**"],
  },

  // Configuración para archivos de código fuente (ES modules)
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2024,
      globals: {
        // Variables globales del navegador
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Reglas básicas de ESLint
      "no-unused-vars": "error",
      "no-debugger": "error",

      // Ejecutar Prettier como regla de ESLint
      "prettier/prettier": "error",
    },
  },

  // Configuración específica para archivos de configuración (CommonJS)
  {
    files: ["webpack.config.js", "webpack.*.js", "*.config.js"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "commonjs",
      globals: {
        // Variables globales de Node.js
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "writable",
        require: "readonly",
        process: "readonly",
        Buffer: "readonly",
        global: "readonly",
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Reglas más relajadas para archivos de configuración
      "no-console": "off",
      "no-unused-vars": "error",

      // Ejecutar Prettier como regla de ESLint
      "prettier/prettier": "error",
    },
  },

  // Aplicar la configuración de prettier (debe ir al final)
  // Esto desactiva las reglas de ESLint que pueden conflictuar con Prettier
  prettierConfig,
];
