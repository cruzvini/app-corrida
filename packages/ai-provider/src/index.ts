// Casca do provedor de IA (card #16). A interface e as implementações entram nos épicos de produto.

export const NOME_DO_PACOTE = '@app-corrida/ai-provider';

/** Função mínima para provar o import sem build (ADR 0134) e a pipeline de testes. */
export function identificar(): string {
  return NOME_DO_PACOTE;
}
