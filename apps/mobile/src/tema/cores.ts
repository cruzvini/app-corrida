// Cores do design system Live Run, nos temas claro e escuro (ADRs 0138 e 0142).
// Os valores vêm do tokens.json do design system e precisam ficar em sincronia com ele (ADR 0133).

const claro = {
  fundo: '#f6f8f8',
  superficie: '#ffffff',
  neutroSuave: '#eceff0',
  borda: '#d9dee0',
  bordaForte: '#939ca0',
  texto: '#161a1c',
  textoSecundario: '#545c60',
  primaria: '#3d5a80',
  primariaPress: '#2f4766',
  sobrePrimaria: '#ffffff',
  primariaSuave: '#e6ecf4',
  statusFeito: '#23854a',
  statusFeitoFundo: 'rgba(35, 133, 74, 0.12)',
  statusNaoFeito: '#a16207',
  statusNaoFeitoFundo: 'rgba(161, 98, 7, 0.12)',
  sobreStatus: '#ffffff',
  veu: 'rgba(15, 18, 19, 0.45)',
  risco: '#b3261e',
  riscoSuave: '#fbe7e5',
} as const;

export type Cores = { readonly [K in keyof typeof claro]: string };

const escuro: Cores = {
  fundo: '#0f1213',
  superficie: '#1b2022',
  neutroSuave: '#252b2d',
  borda: '#2f3639',
  bordaForte: '#6b7478',
  texto: '#eceff0',
  textoSecundario: '#a3acb0',
  primaria: '#9fb6d6',
  primariaPress: '#b8cae3',
  sobrePrimaria: '#0f1213',
  primariaSuave: '#1f2d42',
  statusFeito: '#4fc27a',
  statusFeitoFundo: 'rgba(79, 194, 122, 0.18)',
  statusNaoFeito: '#e8b339',
  statusNaoFeitoFundo: 'rgba(232, 179, 57, 0.18)',
  sobreStatus: '#0f1213',
  veu: 'rgba(0, 0, 0, 0.6)',
  risco: '#ff8a80',
  riscoSuave: '#3d1c1a',
};

export const cores: { readonly claro: Cores; readonly escuro: Cores } = { claro, escuro };
