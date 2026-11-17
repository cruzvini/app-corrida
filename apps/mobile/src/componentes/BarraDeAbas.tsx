// Barra de abas do Live Run: Plano · Piu · [Hoje] · Notificações · Perfil (ADRs 0034, 0138 e 0147).
//
// O Android só entrega um toque a uma view se ele cair dentro dos limites de todos os pais dela.
// Por isso a barra fica sobreposta à tela, com uma faixa transparente em cima do tamanho da
// elevação do Hoje, e o círculo do Hoje é um Pressable próprio dentro dessa faixa, e não um filho
// que transborda da aba. A faixa deixa os toques passarem para a tela (pointerEvents="box-none").
import type { Tabs } from 'expo-router';
import { Bell, CalendarBlank, ChatCircle, User, type IconProps } from 'phosphor-react-native';
import type { ComponentProps, ComponentType } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import {
  alturaDaBarraDeAbas,
  barraDeAbas,
  espaco,
  raio,
  tipografia,
  useTheme,
  type Cores,
} from '../tema';
import { useRespiroInferiorDaBarra } from './useEspacoDaBarraDeAbas';

type PropsDaBarra = Parameters<NonNullable<ComponentProps<typeof Tabs>['tabBar']>>[0];

type Aba = {
  readonly rotulo: string;
  readonly testID: string;
  /** Ícone Phosphor. O Hoje não tem ícone: ele é o círculo com o número do dia. */
  readonly Icone: ComponentType<IconProps> | null;
};

/** Rota do Hoje, a aba central. */
export const ROTA_DO_HOJE = 'index';

/** Abas por nome de rota. A ordem na barra é a ordem das telas no layout das abas. */
const abas: Readonly<Record<string, Aba>> = {
  plano: { rotulo: 'Plano', testID: 'aba-plano', Icone: CalendarBlank },
  piu: { rotulo: 'Piu', testID: 'aba-piu', Icone: ChatCircle },
  [ROTA_DO_HOJE]: { rotulo: 'Hoje', testID: 'aba-hoje', Icone: null },
  notificacoes: { rotulo: 'Notificações', testID: 'aba-notificacoes', Icone: Bell },
  perfil: { rotulo: 'Perfil', testID: 'aba-perfil', Icone: User },
};

export function BarraDeAbas({ state, emitter, navigateToTab }: PropsDaBarra) {
  const { cores } = useTheme();
  const respiroInferior = useRespiroInferiorDaBarra();
  const diaDoMes = new Date().getDate();

  const tocarNaAba = (indice: number) => {
    const rota = state.routes[indice];
    if (!rota) return;
    // Mesmo protocolo da barra padrão do Expo Router: avisa o tabPress e só navega se
    // ninguém cancelou e a aba ainda não está aberta.
    const evento = emitter.emit({ type: 'tabPress', target: rota.key, canPreventDefault: true });
    if (state.index !== indice && !evento.defaultPrevented) {
      navigateToTab(rota.key);
    }
  };

  const indiceDoHoje = state.routes.findIndex((rota) => rota.name === ROTA_DO_HOJE);
  const hojeSelecionado = state.index === indiceDoHoje;

  return (
    <View style={estilos.raiz} pointerEvents="box-none">
      <View
        style={[
          estilos.barra,
          {
            backgroundColor: cores.superficie,
            borderTopColor: cores.borda,
            paddingBottom: respiroInferior,
          },
        ]}
      >
        {state.routes.map((rota, indice) => {
          const aba = abas[rota.name];
          if (!aba) return null;
          const selecionada = state.index === indice;

          return (
            <Pressable
              key={rota.key}
              testID={aba.testID}
              accessibilityRole="tab"
              accessibilityLabel={aba.rotulo}
              accessibilityState={{ selected: selecionada }}
              onPress={() => tocarNaAba(indice)}
              style={estilos.aba}
            >
              {aba.Icone ? (
                <IconeDaAba Icone={aba.Icone} selecionada={selecionada} cores={cores} />
              ) : (
                // Vaga do tamanho da pílula, para o rótulo do Hoje alinhar com os outros.
                <View style={estilos.vagaDoHoje} />
              )}
              <Text
                style={[
                  selecionada ? tipografia.abaSelecionada : tipografia.aba,
                  { color: selecionada ? cores.primaria : cores.textoSecundario },
                ]}
                numberOfLines={1}
              >
                {aba.rotulo}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {indiceDoHoje >= 0 && (
        <View style={estilos.posicaoDoHoje} pointerEvents="box-none">
          <Pressable
            onPress={() => tocarNaAba(indiceDoHoje)}
            // A aba Hoje da barra já é o elemento acessível; o círculo é só um alvo de toque maior.
            accessible={false}
            importantForAccessibility="no-hide-descendants"
            accessibilityElementsHidden
            style={[
              estilos.circuloDoHoje,
              {
                backgroundColor: hojeSelecionado ? cores.primaria : cores.primariaSuave,
                borderColor: cores.fundo,
              },
            ]}
          >
            <Text
              style={[
                tipografia.numeroDoHoje,
                { color: hojeSelecionado ? cores.sobrePrimaria : cores.primaria },
              ]}
            >
              {diaDoMes}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

type PropsDoIcone = {
  Icone: ComponentType<IconProps>;
  selecionada: boolean;
  cores: Cores;
};

function IconeDaAba({ Icone, selecionada, cores }: PropsDoIcone) {
  return (
    <View style={[estilos.pilula, selecionada && { backgroundColor: cores.primariaSuave }]}>
      <Icone
        size={barraDeAbas.icone}
        weight={selecionada ? 'fill' : 'regular'}
        color={selecionada ? cores.primaria : cores.textoSecundario}
      />
    </View>
  );
}

const diametroComAnel = barraDeAbas.hojeDiametro + 2 * barraDeAbas.hojeAnel;

const estilos = StyleSheet.create({
  raiz: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: barraDeAbas.hojeElevacao,
  },
  barra: {
    flexDirection: 'row',
    borderTopWidth: barraDeAbas.divisor,
    paddingTop: espaco[2],
    minHeight: alturaDaBarraDeAbas,
  },
  aba: {
    flex: 1,
    alignItems: 'center',
    gap: espaco[1],
  },
  pilula: {
    height: barraDeAbas.pilulaAltura,
    minWidth: barraDeAbas.pilulaLarguraMinima,
    borderRadius: raio.pilula,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vagaDoHoje: {
    height: barraDeAbas.pilulaAltura,
  },
  posicaoDoHoje: {
    position: 'absolute',
    // O círculo (sem o anel) começa hojeElevacao acima da borda de cima da barra, ou seja,
    // no topo da raiz. O anel fica de fora, como o box-shadow do design system.
    top: -barraDeAbas.hojeAnel,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  circuloDoHoje: {
    width: diametroComAnel,
    height: diametroComAnel,
    borderRadius: diametroComAnel / 2,
    borderWidth: barraDeAbas.hojeAnel,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
