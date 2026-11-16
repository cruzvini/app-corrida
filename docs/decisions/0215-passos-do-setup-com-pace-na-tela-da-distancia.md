# ADR 0215: Passos do setup completos, com o pace alvo na tela da distância e da data

- **Status:** Aceita
- **Data:** 2026-11-16
- **Complementa:** [ADR 0021](0021-pace-alvo-sugerido-pelo-strava.md), [ADR 0039](0039-lesoes-e-limitacoes-no-setup.md), [ADR 0043](0043-data-de-inicio-escolhida-no-setup.md), [ADR 0099](0099-nome-no-perfil.md), [ADR 0207](0207-progresso-do-setup.md) e [ADR 0208](0208-opcoes-de-escolha.md)

## Contexto

Na validação do design (card 6, issue #25), os critérios 2.2, 2.6 e 2.8 não tinham estado desenhado: "Sobre você", o pace alvo e a data de início ficaram só citados na tela do onboarding. Além disso, a contagem "x de 7" não fechava: no "Melhorar o tempo", com o pace numa tela própria, o setup teria 8 passos. Foram comparadas duas opções: o pace alvo na própria tela da distância e da data, ou numa tela própria. O usuário escolheu a primeira.

## Decisão

- **Ordem do setup:** 1 nível, 2 sobre você, 3 frequência, 4 objetivo, 5 distância, data e pace alvo (só no "Melhorar o tempo"), 6 data de início e 7 resumo.
- **Contagem:** 7 passos no "Melhorar o tempo" e 6 nos outros objetivos, porque o "Completar uma distância" resolve a distância dentro do card e os demais não têm distância. Até a escolha do objetivo, a contagem mostra 7; depois, passa a valer o total do caminho escolhido.
- **Sobre você:** uma tela com os campos do Editar perfil. O nome vem sugerido pelo primeiro nome do Strava, com uma nota em legenda (ADR 0099); sem o Strava, vem vazio. Idade (10 a 100 anos, ADR 0042) e peso são obrigatórios; lesões ou limitações são opcionais, em texto livre (ADR 0039). "Continuar" só fica ativo com nome, idade e peso.
- **Pace alvo:** campo logo abaixo da distância e da data, sugerido pelas regras numa nota com `info` e o link "Ajustar" (ADR 0209). É recalculado quando a distância ou a data mudam, inclusive por uma alternativa do aviso de risco. Sem histórico suficiente, ou sem o Strava, o campo some e a nota diz que o plano começa sem meta de pace (ADR 0021).
- **Data de início:** hoje e os próximos 5 dias em cards da OpcaoDeEscolha numa grade de 3 colunas, sem rádio, com "Hoje" marcado. "Outro dia" abre o seletor de data nativo (ADR 0172). Uma nota diz até quando vai o plano. Início que deixe o prazo curto gera o AvisoDeRisco, sem bloquear (ADRs 0017 e 0210).
- Os três estados ficam em [`telas/index.html`](../telas/index.html), na tela de onboarding e setup.

## Consequências

- Todos os passos do setup ficam desenhados, e os critérios 2.2, 2.6 e 2.8 passam a ter estado.
- Nenhum componente novo: CampoDoFormulario, OpcaoDeEscolha, SeletorDeData e a nota das regras já existem. A grade de 3 colunas é uma variação da OpcaoDeEscolha, sem rádio, a registrar no design system.
- A contagem muda depois do passo 4, o que precisa de cuidado na implementação da ProgressoDoSetup.
