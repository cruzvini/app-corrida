// Espaçamento, raios e medidas de componentes do Live Run (tokens.json e ADR 0147).
import { tipografia } from './tipografia';

export const espaco = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
} as const;

export const raio = {
  campo: 12,
  card: 16,
  pilula: 999,
} as const;

/** Alvo de toque mínimo (README do design system). */
export const alvoDeToqueMinimo = 44;

/** Medidas do componente BarraDeAbas do design system (ADRs 0138 e 0147). */
export const barraDeAbas = {
  divisor: 1,
  icone: 22,
  pilulaAltura: 28,
  pilulaLarguraMinima: 48,
  /** Respiro de baixo quando o aparelho não tem área segura (sem barra de gestos). */
  respiroInferiorMinimo: espaco[2],
  hojeDiametro: 52,
  /** Quanto o círculo do Hoje sobe acima da borda de cima da barra. */
  hojeElevacao: 30,
  hojeAnel: 4,
} as const;

/** Altura da barra de abas sem a área segura de baixo: divisor, respiro, pílula, espaço e rótulo. */
export const alturaDaBarraDeAbas =
  barraDeAbas.divisor +
  espaco[2] +
  barraDeAbas.pilulaAltura +
  espaco[1] +
  tipografia.aba.lineHeight;
