# ADR 0214: "Outro" em "Qual é o seu objetivo?", com o texto levado ao Piu para virar proposta

- **Status:** Aceita
- **Data:** 2026-11-13
- **Revisa:** [ADR 0103](0103-objetivo-em-tres-opcoes.md)
- **Complementa:** [ADR 0008](0008-modelo-de-planos-em-duas-camadas.md), [ADR 0062](0062-proposta-do-piu-na-conversa.md), [ADR 0106](0106-dados-do-strava-nunca-vao-para-a-ia.md), [ADR 0200](0200-mensagem-pronta-no-piu.md) e [ADR 0208](0208-opcoes-de-escolha.md)

## Contexto

O ADR 0103 deu três opções à pergunta "Qual é o seu objetivo?" e mandou os objetivos que não cabem nelas (ex.: "correr 30 minutos sem parar") para uma conversa com o Piu depois do onboarding, deixando o objetivo em texto livre, interpretado pela IA, para depois do MVP. Ao revisar a tela, o usuário pediu uma opção "Outro" que abra um campo para digitar. Foram comparadas três opções: "Outro" com o texto levado ao Piu, que transforma em proposta depois que o plano de regularidade é gerado; "Outro" com a IA interpretando o texto e gerando um plano específico já no onboarding; e nenhuma opção nova, só um aviso na tela. O usuário escolheu a primeira.

## Decisão

- "Qual é o seu objetivo?" ganha a quarta opção **"Outro"**, depois de "Sem objetivo definido", com a descrição "Escreva o seu objetivo, e o Piu combina o plano com você.", no mesmo padrão da OpcaoDeEscolha (ADR 0208).
- Marcada, ela abre dentro do card um **campo de texto** (CampoDoFormulario) com o rótulo "Seu objetivo" e o exemplo "Correr 30 minutos sem parar", e uma nota em legenda: "Começamos com um plano de regularidade, e o Piu combina o resto com você."
- O "Continuar" só fica ativo com o campo preenchido.
- Ao gerar, o app monta o **plano genérico**, sem data final (ADR 0008).
- Depois do onboarding, a **primeira conversa com o Piu** já vem com o objetivo escrito, como a mensagem pronta do Editar perfil (ADR 0200): "Meu objetivo: correr 30 minutos sem parar." O usuário envia, e o Piu responde com uma proposta de plano, que só vale depois de aceita (ADR 0062).
- O Piu recebe só o texto que o usuário escreveu e o plano, **nunca dados do Strava** (ADR 0106).
- O resumo do setup mostra "Outro: correr 30 minutos sem parar, combinado com o Piu".

## Consequências

- Objetivos fora das três opções entram no próprio onboarding, sem a IA gerar o plano sozinha e sem revisão (ADR 0102 continua valendo).
- A interpretação do objetivo em texto livre acontece na conversa com o Piu, com proposta e aceite; a geração direta pela IA no setup continua fora do MVP.
- A OpcaoDeEscolha do design system Live Run ganha o caso com campo de texto (ADR 0143).
