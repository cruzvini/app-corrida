# ADR 0095: Editar o perfil salva os dados e leva ao Piu com o que mudou

- **Status:** Aceita (revisada pelos ADRs 0098 e 0099)
- **Data:** 2026-11-10

## Contexto

Nível, idade, peso e lesões ou limitações podem mudar o plano (ADRs 0015, 0039 e 0042). O ADR 0061 fazia toda mudança no Perfil passar por uma tela de revisão própria, e os dados só mudavam se a proposta fosse aceita. Replanejar, porém, é conversar com o Piu (ADRs 0078 e 0085).

## Decisão

- O Perfil tem o botão **"Editar perfil"**, que abre um formulário com nível, idade, peso e lesões ou limitações. *Revisado pelos ADRs 0098 e 0099: o formulário também tem o nome e a frequência semanal; mudar só o nome não abre o Piu.*
- **Salvar** grava os dados na hora e abre o Piu com uma **mensagem pronta** no campo, descrevendo o que mudou (ex.: "Atualizei meu perfil: peso de 72 para 70 kg; lesões: joelho sensível em descidas").
- O usuário pode completar a mensagem ou enviá-la como está. O Piu analisa e, se for preciso, propõe um ajuste, que segue o fluxo de proposta (ADRs 0062 e 0085).
- Se o usuário sair sem enviar, os dados continuam salvos, e o plano só considera a mudança nos próximos detalhamentos e ajustes.

## Consequências

- Os dados pessoais são fatos: mudam na hora, e só o plano depende da aceitação de uma proposta.
- A mudança de perfil usa o mesmo caminho de qualquer replanejamento, sem tela de revisão própria.
- A mensagem enviada conta no limite diário do Piu (ADR 0093).
- Substitui o ADR 0061.
