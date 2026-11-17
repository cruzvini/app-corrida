// Casca de uma tela de aba: fundo do tema, área segura de cima e o título (card #17).
import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { espaco, tipografia, useTheme } from '../tema';
import { useEspacoDaBarraDeAbas } from './useEspacoDaBarraDeAbas';

type Props = {
  titulo: string;
  testID: string;
  children?: ReactNode;
};

export function Tela({ titulo, testID, children }: Props) {
  const { cores } = useTheme();
  const espacoDaBarra = useEspacoDaBarraDeAbas();

  return (
    <SafeAreaView edges={['top']} style={[estilos.tela, { backgroundColor: cores.fundo }]}>
      <View testID={testID} style={[estilos.conteudo, { paddingBottom: espacoDaBarra }]}>
        <Text accessibilityRole="header" style={[tipografia.titulo, { color: cores.texto }]}>
          {titulo}
        </Text>
        {children}
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    paddingTop: espaco[1],
    paddingHorizontal: espaco[4],
    gap: espaco[4],
  },
});
