// Abas do app, nesta ordem: Plano · Piu · [Hoje] · Notificações · Perfil (ADRs 0034 e 0132).
// O Hoje é a rota index: o app abre nele, e o voltar do Android retorna a ele.
import { Tabs } from 'expo-router';

import { BarraDeAbas, ROTA_DO_HOJE } from '../../src/componentes';
import { useTheme } from '../../src/tema';

export const unstable_settings = {
  anchor: ROTA_DO_HOJE,
};

export default function LayoutDasAbas() {
  const { cores } = useTheme();

  return (
    <Tabs
      backBehavior="initialRoute"
      tabBar={(props) => <BarraDeAbas {...props} />}
      screenOptions={{
        headerShown: false,
        // Trocar de aba não anima (ADR 0140).
        animation: 'none',
        sceneStyle: { backgroundColor: cores.fundo },
      }}
    >
      <Tabs.Screen name="plano" options={{ title: 'Plano' }} />
      <Tabs.Screen name="piu" options={{ title: 'Piu' }} />
      <Tabs.Screen name={ROTA_DO_HOJE} options={{ title: 'Hoje' }} />
      <Tabs.Screen name="notificacoes" options={{ title: 'Notificações' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
