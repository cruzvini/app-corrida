// Config ESLint única do monorepo, no formato flat (ADRs 0131 e 0224).
// O app usa o eslint-config-expo; os pacotes e a raiz usam o typescript-eslint.
import js from '@eslint/js';
import expoConfig from 'eslint-config-expo/flat.js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const APP = 'apps/mobile/**/*.{js,jsx,ts,tsx}';

export default defineConfig([
  globalIgnores([
    '**/node_modules/',
    '**/dist/',
    '**/build/',
    '**/coverage/',
    '**/.expo/',
    '**/expo-env.d.ts',
  ]),
  {
    // Raiz, pacotes e testes.
    ignores: [APP],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    plugins: { import: importPlugin },
  },
  {
    // App: regras oficiais do Expo, incluindo React e React Hooks (ADR 0131).
    files: [APP],
    extends: [expoConfig],
  },
  {
    // Cada arquivo só importa o que o package.json mais próximo declara (ADR 0131).
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
