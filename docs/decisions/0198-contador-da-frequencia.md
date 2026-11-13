# ADR 0198: Contador com − e + para a frequência semanal, com aviso quando passa de 7 atividades

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0097](0097-frequencia-semanal-sem-dias-fixos.md), [ADR 0098](0098-frequencia-semanal-no-perfil.md), [ADR 0137](0137-outras-atividades-como-registro-de-carga.md) e [ADR 0197](0197-editar-perfil.md)

## Contexto

A frequência semanal é só quantidade: quantas corridas, quantas musculações (com a divisão em superiores e inferiores) e quantas vezes cada outra atividade, e o plano escolhe os dias (ADRs 0097 e 0137). No "Editar perfil" (ADR 0197) faltava o controle em alta fidelidade.

Foram comparadas três opções: contador com − e +; segmentos de 1 a 7 em cada linha; e seletor nativo, que abre uma roleta. Na escolha, o usuário pediu também uma mensagem para quando a soma passar de 7, avisando que o plano vai ter dias com mais de uma atividade.

## Decisão

- **Contador** à direita de cada atividade: botões redondos de 40 px (área de toque de 44 px), com `minus` e `plus` de 18 px em `primaria` e contorno de 1 px em `primaria`, e o número entre eles em 18 px, negrito, em `texto`, com largura fixa de 32 px.
- Cada contador vai de **0 a 7**. No limite, o botão do lado correspondente fica desativado: ícone em `borda-forte` e contorno em `borda`.
- As atividades ficam num **grupo sem contorno** (ADR 0165), uma por linha de 60 px, com o nome em 15 px, peso 500, à esquerda.
- **Divisão da musculação:** "Superiores" e "Inferiores" logo abaixo de "Musculação", recuadas 16 px, em `texto-secundario`, peso 400, com o fio de cima tracejado. A soma das duas é sempre o total da musculação: com a soma no total, o "+" das duas fica desativado.
- "Adicionar outra atividade" fecha o grupo, como LinhaDeAcao (ADR 0195).
- **Nota abaixo do grupo**, em legenda de 13 px, em `texto-secundario`:
  - com até 7 atividades por semana: "O plano escolhe os dias.";
  - com **mais de 7**, a nota muda, com o ícone `info` de 16 px: **"São 8 atividades por semana, então alguns dias vão ter duas. O plano escolhe quais."** O número acompanha a soma.
- A nota não é um aviso de risco: não usa vermelho nem bloqueia o "Salvar". As regras continuam evitando combinações ruins, como corrida intensa depois de inferiores (ADR 0097).
- Contrastes: botões ativos sobre `superficie` 7,1:1 (claro) e 7,9:1 (escuro); número 17,5:1 e 14,2:1; nota 6,4:1 e 8,1:1 sobre `fundo`.

## Consequências

- O valor fica sempre à vista, e cada toque muda uma unidade.
- O usuário sabe, antes de salvar, que uma semana cheia vai juntar atividades no mesmo dia.
- O design system Live Run ganha o componente Contador (ADR 0143).
