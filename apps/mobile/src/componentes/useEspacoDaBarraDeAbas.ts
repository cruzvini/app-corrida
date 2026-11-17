import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { alturaDaBarraDeAbas, barraDeAbas } from '../tema';

/** Respiro de baixo da barra: a área segura do aparelho ou um mínimo. */
export function useRespiroInferiorDaBarra(): number {
  const { bottom } = useSafeAreaInsets();
  return Math.max(bottom, barraDeAbas.respiroInferiorMinimo);
}

/**
 * Espaço que o conteúdo de uma tela deixa embaixo para não ficar atrás da barra de abas,
 * incluindo o círculo do Hoje, que sobe acima dela (ADR 0147).
 */
export function useEspacoDaBarraDeAbas(): number {
  return alturaDaBarraDeAbas + useRespiroInferiorDaBarra() + barraDeAbas.hojeElevacao;
}
