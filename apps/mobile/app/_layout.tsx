// Layout raiz: carrega a DM Sans, segura a splash até a fonte carregar e aplica o tema.
import { identificar as identificarAiProvider } from '@app-corrida/ai-provider';
import { identificar as identificarRulesEngine } from '@app-corrida/rules-engine';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { arquivosDeFonte, useTheme } from '../src/tema';

// Fumaça do import dos pacotes internos como TypeScript fonte, sem build (ADR 0134).
// Sai quando o app passar a usar os pacotes de verdade.
if (__DEV__) {
  console.info(`Pacotes carregados: ${identificarRulesEngine()}, ${identificarAiProvider()}`);
}

void SplashScreen.preventAutoHideAsync();

export default function LayoutRaiz() {
  const { cores } = useTheme();
  const [fontesCarregadas, erroDasFontes] = useFonts(arquivosDeFonte);
  const pronto = fontesCarregadas || erroDasFontes !== null;

  useEffect(() => {
    if (pronto) void SplashScreen.hideAsync();
  }, [pronto]);

  if (!pronto) return null;

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{ headerShown: false, contentStyle: { backgroundColor: cores.fundo } }}
      />
    </>
  );
}
