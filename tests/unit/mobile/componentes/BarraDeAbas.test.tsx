// Barra de abas do Live Run (ADRs 0034, 0138 e 0147): rótulos, aba selecionada e o protocolo
// de toque igual ao da barra padrão do Expo Router.
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react-native';
import type { ComponentProps } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { BarraDeAbas } from '../../../../apps/mobile/src/componentes';

type Props = ComponentProps<typeof BarraDeAbas>;

const ROTAS = ['plano', 'piu', 'index', 'notificacoes', 'perfil'];
const INDICE_DO_HOJE = 2;

const DIA_DO_MES = String(new Date().getDate());
/** O círculo do Hoje é escondido da acessibilidade; a aba Hoje da barra é o elemento acessível. */
const INCLUIR_OCULTOS = { includeHiddenElements: true };

const emit = jest.fn<(evento: object) => { defaultPrevented: boolean }>();
const navigateToTab = jest.fn();

async function renderizarBarra(indiceSelecionado = INDICE_DO_HOJE) {
  const props = {
    state: {
      index: indiceSelecionado,
      routes: ROTAS.map((nome) => ({ key: `${nome}-chave`, name: nome })),
    },
    emitter: { emit },
    navigateToTab,
  } as unknown as Props;

  await render(
    <SafeAreaProvider
      initialMetrics={{
        frame: { x: 0, y: 0, width: 390, height: 844 },
        insets: { top: 47, right: 0, bottom: 34, left: 0 },
      }}
    >
      <BarraDeAbas {...props} />
    </SafeAreaProvider>,
  );
}

beforeEach(() => {
  emit.mockReset();
  emit.mockImplementation(() => ({ defaultPrevented: false }));
  navigateToTab.mockReset();
});

describe('BarraDeAbas', () => {
  it('mostra as 5 abas na ordem Plano · Piu · Hoje · Notificações · Perfil', async () => {
    await renderizarBarra();

    const rotulos = screen.getAllByRole('tab').map((aba) => aba.props.accessibilityLabel);
    expect(rotulos).toEqual(['Plano', 'Piu', 'Hoje', 'Notificações', 'Perfil']);
  });

  it('marca como selecionada só a aba aberta', async () => {
    await renderizarBarra(0);

    expect(screen.getByRole('tab', { name: 'Plano' })).toBeSelected();
    expect(screen.getByRole('tab', { name: 'Hoje' })).not.toBeSelected();
  });

  it('mostra o dia do mês no círculo do Hoje, fora da árvore de acessibilidade', async () => {
    await renderizarBarra();

    expect(screen.getByText(DIA_DO_MES, INCLUIR_OCULTOS)).toBeOnTheScreen();
    expect(screen.queryByText(DIA_DO_MES)).toBeNull();
  });

  it('avisa o tabPress e navega ao tocar numa aba fechada', async () => {
    await renderizarBarra();

    await fireEvent.press(screen.getByRole('tab', { name: 'Perfil' }));

    expect(emit).toHaveBeenCalledWith({
      type: 'tabPress',
      target: 'perfil-chave',
      canPreventDefault: true,
    });
    expect(navigateToTab).toHaveBeenCalledWith('perfil-chave');
  });

  it('não navega ao tocar na aba que já está aberta', async () => {
    await renderizarBarra();

    await fireEvent.press(screen.getByRole('tab', { name: 'Hoje' }));

    expect(emit).toHaveBeenCalledTimes(1);
    expect(navigateToTab).not.toHaveBeenCalled();
  });

  it('não navega se alguém cancelou o tabPress', async () => {
    emit.mockImplementation(() => ({ defaultPrevented: true }));
    await renderizarBarra();

    await fireEvent.press(screen.getByRole('tab', { name: 'Piu' }));

    expect(navigateToTab).not.toHaveBeenCalled();
  });

  it('navega para o Hoje ao tocar no círculo do dia', async () => {
    await renderizarBarra(0);

    await fireEvent.press(screen.getByText(DIA_DO_MES, INCLUIR_OCULTOS));

    expect(navigateToTab).toHaveBeenCalledWith('index-chave');
  });
});
