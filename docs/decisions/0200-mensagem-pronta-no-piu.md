# ADR 0200: Mensagem pronta do perfil no campo do Piu, que cresce para mostrar o texto todo

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0095](0095-editar-perfil-leva-ao-piu.md), [ADR 0158](0158-rodape-fixo-do-detalhe.md), [ADR 0174](0174-contexto-do-plano-no-piu.md) e [ADR 0199](0199-campo-que-mudou.md)

## Contexto

Salvar o perfil abre o Piu com uma mensagem pronta no campo, descrevendo o que mudou, que o usuário completa ou envia como está (ADR 0095). A mensagem costuma ter duas ou três linhas, e o campo do rodapé tem uma linha só (ADR 0158). Faltava a forma em alta fidelidade.

Foram comparadas três opções: o campo em pílula cresce até mostrar o texto todo; a mensagem como um balão de rascunho, com "Editar" e "Enviar"; e o campo de uma linha, com o texto cortado.

## Decisão

- Salvar abre a **aba Piu** com a conversa no fim e, logo acima do rodapé, o **contexto do Perfil**: o mesmo bloco do contexto do plano (ADR 0174), com o ícone `user` da aba Perfil, **"Perfil atualizado"** em negrito e, embaixo, em legenda, o que mudou ("Peso e lesões").
- A **mensagem pronta** fica no **campo do rodapé**, em `texto`, com o cursor no fim, pronta para completar ou enviar.
- **O campo cresce** para mostrar o texto todo: até 6 linhas de 20 px; a partir daí, rola por dentro. Com mais de uma linha, o raio passa a 22 px, e o botão de enviar fica alinhado à última linha.
- O texto usa os mesmos valores de antes do "Editar perfil" (ADR 0199): "Atualizei meu perfil: peso de 72 para 70 kg; lesões: joelho sensível em descidas."
- Vale para qualquer mensagem longa digitada no campo do Piu, não só para a pronta.
- Se o usuário sai sem enviar, o campo guarda o rascunho, e os dados do perfil continuam salvos (ADR 0095).
- Contrastes: os do campo do rodapé (ADR 0158); texto 16,4:1 (claro) e 16,3:1 (escuro) sobre `fundo`.

## Consequências

- O usuário lê o que vai enviar sem peças novas na conversa.
- O rodapé do Piu ganha altura variável, e a conversa sobe junto.
- O RodapeDoTreino e o ContextoDoTreino do design system Live Run ganham as regras do campo que cresce e da variante do Perfil (ADR 0143).
