// Config ESLint única do monorepo, no formato flat (ADR 0131).
// O app ganha o eslint-config-expo no card #17; os pacotes usam o typescript-eslint.
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['**/node_modules/', '**/dist/', '**/build/', '**/coverage/', '**/.expo/']),
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['*.{js,mjs,ts}', 'scripts/**/*.{js,mjs}'],
    languageOptions: { globals: globals.node },
  },
  prettier,
]);
