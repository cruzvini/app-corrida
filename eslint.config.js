// Config ESLint única do monorepo, no formato flat (ADRs 0131 e 0224).
// O app ganha o eslint-config-expo no card #17; os pacotes usam o typescript-eslint.
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['**/node_modules/', '**/dist/', '**/build/', '**/coverage/', '**/.expo/']),
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    // Cada arquivo só importa o que o package.json mais próximo declara (ADR 0131).
    plugins: { import: importPlugin },
    rules: {
      'import/no-extraneous-dependencies': 'error',
    },
  },
  {
    files: ['*.{js,mjs,ts}', 'scripts/**/*.{js,mjs}'],
    languageOptions: { globals: globals.node },
  },
  prettier,
]);
