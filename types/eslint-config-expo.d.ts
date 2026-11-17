// O eslint-config-expo não publica tipos. A config flat é um array de configs do ESLint.
declare module 'eslint-config-expo/flat.js' {
  import type { Linter } from 'eslint';

  const config: Linter.Config[];
  export default config;
}
