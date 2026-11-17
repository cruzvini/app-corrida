// Casca do motor de regras (card #16). As regras reais entram nos épicos de produto.

export const NOME_DO_PACOTE = '@app-corrida/rules-engine';

/** Função mínima para provar o import sem build (ADR 0134) e a pipeline de testes. */
export function identificar(): string {
  return NOME_DO_PACOTE;
}
