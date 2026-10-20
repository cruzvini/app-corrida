# Decisões de arquitetura (ADRs)

Cada decisão relevante é registrada aqui antes de ser implementada, no formato: título, status, contexto, decisão, consequências.

**Status possíveis:** Proposta, Aceita, Adiada, Substituída, Rejeitada.

| # | Decisão | Status |
|---|---------|--------|
| 0001 | [Monorepo com pasta dedicada de testes](0001-monorepo-com-pasta-de-testes.md) | Aceita |
| 0002 | [Stack do app: React Native + Expo + TypeScript, iOS primeiro](0002-stack-react-native-expo-typescript.md) | Aceita |
| 0003 | [Backend: Supabase com Postgres, auth e RLS](0003-backend-supabase.md) | Aceita |
| 0004 | [Motor de regras como pacote isolado](0004-motor-de-regras-isolado.md) | Aceita |
| 0005 | [Provedor de IA agnóstico, com Claude como primeira implementação e fake para testes](0005-provedor-de-ia-agnostico.md) | Aceita |
| 0006 | [Strava como fonte inicial, com polling agendado e pull-to-refresh](0006-strava-polling-e-pull-to-refresh.md) | Aceita |
| 0007 | [Feedback em caixa de entrada no app, sem push](0007-feedback-em-caixa-de-entrada.md) | Aceita |
| 0008 | [Modelo de planos em duas camadas (genérico e específico)](0008-modelo-de-planos-em-duas-camadas.md) | Aceita |
| 0009 | [Protótipo pessoal primeiro, depois Health Connect / Apple Health ao abrir para amigos e família](0009-prototipo-pessoal-depois-health.md) | Aceita |
| 0010 | [Execução via Expo Go no iPhone, sem assinatura Apple Developer por enquanto](0010-expo-go-sem-apple-developer.md) | Aceita |
| 0011 | [Estratégia de testes: pirâmide com quality gates de CI](0011-estrategia-de-testes-piramide.md) | Aceita |
| 0012 | [Design e wireframes feitos no Claude (design mode), sem Figma](0012-design-no-claude-sem-figma.md) | Aceita |
| 0013 | [Adiados: questionário de prontidão para saúde e registro manual de treinos](0013-adiados-prontidao-e-registro-manual.md) | Adiada |
| 0014 | [Musculação entra no plano como carga que afeta a corrida](0014-musculacao-como-carga-no-plano.md) | Aceita |
| 0015 | [Nível de corrida sugerido pelo Strava e confirmado pelo usuário](0015-nivel-de-corrida-sugerido-e-confirmado.md) | Aceita |
| 0016 | [Plano específico com distância livre](0016-plano-especifico-com-distancia-livre.md) | Aceita |
| 0017 | [Avisar sobre riscos da meta sem bloquear a criação do plano](0017-avisar-riscos-sem-bloquear-plano.md) | Aceita |

## Como criar um novo ADR

1. Copie o formato de um ADR existente com o próximo número (`NNNN-slug.md`).
2. Preencha contexto, decisão e consequências.
3. Adicione uma linha nesta tabela.
