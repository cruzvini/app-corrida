// Config única do Jest no monorepo (ADRs 0119, 0124, 0135 e 0225).
//
// Projetos:
// - unit:pacotes  testes de tests/unit/<pacote>, no Node.
// - unit:app      testes de tests/unit/mobile, com o preset jest-expo e o React Native Testing Library.
// - integration   testes de tests/integration, no Node (o Supabase local entra no card #19).
//
// Tudo é compilado pelo Babel com o babel-preset-expo, o mesmo do Metro (ADR 0225).

/** @typedef {import('jest').Config} Config */

/** Babel com o preset do Expo, sem ler outro arquivo de config do Babel. */
const babel = /** @type {[string, unknown]} */ ([
  'babel-jest',
  { presets: ['babel-preset-expo'], babelrc: false, configFile: false },
]);

/** @type {Config} */
const noNode = {
  rootDir: import.meta.dirname,
  testEnvironment: 'node',
  transform: { '\\.[jt]sx?$': babel },
};

/** @type {Config} */
const config = {
  projects: [
    {
      ...noNode,
      displayName: 'unit:pacotes',
      testMatch: ['<rootDir>/tests/unit/{rules-engine,ai-provider}/**/*.test.ts'],
    },
    {
      displayName: 'unit:app',
      rootDir: import.meta.dirname,
      preset: 'jest-expo',
      testMatch: ['<rootDir>/tests/unit/mobile/**/*.test.{ts,tsx}'],
    },
    {
      ...noNode,
      displayName: 'integration',
      testMatch: ['<rootDir>/tests/integration/**/*.test.ts'],
    },
  ],

  // Cobertura medida pelo código coberto, e não pela pasta dos testes (ADR 0135).
  // Configuração, tipos e barrels ficam fora da conta (ADR 0124). Os index.ts dos pacotes ainda
  // têm lógica (a casca do card #16); quando virarem barrels, entram nesta lista.
  collectCoverageFrom: [
    'packages/*/src/**/*.{ts,tsx}',
    'apps/mobile/src/**/*.{ts,tsx}',
    '!apps/mobile/src/**/index.ts',
    '!**/*.d.ts',
  ],
  coverageReporters: ['text', 'text-summary'],

  // Mínimo de linhas e de branches por pacote (ADR 0124). A chave é uma pasta, então o Jest
  // soma os arquivos dela, em vez de cobrar o mínimo de cada arquivo.
  coverageThreshold: {
    // Sem mínimo para o monorepo inteiro: só por pacote.
    global: {},
    './packages/rules-engine/src/': { lines: 90, branches: 90 },
    './packages/ai-provider/src/': { lines: 80, branches: 80 },
    './apps/mobile/src/': { lines: 60, branches: 60 },
  },
};

export default config;
