import { useColorScheme } from 'react-native';

import { cores, type Cores } from './cores';

export type Tema = {
  readonly esquema: 'claro' | 'escuro';
  readonly cores: Cores;
};

const temaClaro: Tema = { esquema: 'claro', cores: cores.claro };
const temaEscuro: Tema = { esquema: 'escuro', cores: cores.escuro };

/**
 * Tema do esquema de cores do sistema: claro por padrão, escuro quando o sistema
 * está no modo escuro (ADRs 0133 e 0138).
 */
export function useTheme(): Tema {
  return useColorScheme() === 'dark' ? temaEscuro : temaClaro;
}
