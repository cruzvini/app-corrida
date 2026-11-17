// Tipografia do Live Run: DM Sans, com algarismos tabulares nos números (ADR 0138).
import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import type { TextStyle } from 'react-native';

/** Arquivos da DM Sans carregados no layout raiz com o useFonts do expo-font. */
export const arquivosDeFonte = { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold };

/** No React Native, cada peso de uma fonte carregada é uma família própria. */
export const familias = {
  regular: 'DMSans_400Regular',
  media: 'DMSans_500Medium',
  negrito: 'DMSans_700Bold',
} as const;

type EstiloDeTexto = Pick<TextStyle, 'fontFamily' | 'fontSize' | 'lineHeight' | 'fontVariant'>;

const algarismosTabulares: TextStyle['fontVariant'] = ['tabular-nums'];

/** Escala do design system (grupo "Texto" do tokens.json). */
export const tipografia = {
  titulo: { fontFamily: familias.negrito, fontSize: 24, lineHeight: 30 },
  numero: {
    fontFamily: familias.negrito,
    fontSize: 30,
    lineHeight: 36,
    fontVariant: algarismosTabulares,
  },
  numeroMedio: {
    fontFamily: familias.negrito,
    fontSize: 24,
    lineHeight: 30,
    fontVariant: algarismosTabulares,
  },
  subtitulo: { fontFamily: familias.negrito, fontSize: 18, lineHeight: 24 },
  tituloSecao: { fontFamily: familias.negrito, fontSize: 16, lineHeight: 22 },
  texto: { fontFamily: familias.regular, fontSize: 15, lineHeight: 22 },
  botao: { fontFamily: familias.media, fontSize: 16, lineHeight: 20 },
  legenda: { fontFamily: familias.regular, fontSize: 13, lineHeight: 18 },
  aba: { fontFamily: familias.media, fontSize: 11, lineHeight: 14 },
  abaSelecionada: { fontFamily: familias.negrito, fontSize: 11, lineHeight: 14 },
  /** Número do dia no círculo do Hoje (ADR 0147). */
  numeroDoHoje: {
    fontFamily: familias.negrito,
    fontSize: 20,
    lineHeight: 24,
    fontVariant: algarismosTabulares,
  },
} as const satisfies Record<string, EstiloDeTexto>;
