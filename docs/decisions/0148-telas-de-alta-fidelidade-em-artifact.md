# ADR 0148: Telas de alta fidelidade em artifact próprio, com o código no repositório

- **Status:** Aceita
- **Data:** 2026-11-11
- **Complementa:** [ADR 0063](0063-wireframes-em-artifact-html.md) e [ADR 0143](0143-alta-fidelidade-no-design-system.md)

## Contexto

O item 6 do card 5 aplica a identidade visual sobre os wireframes: 7 telas e cerca de 40 estados. O ADR 0143 colocou os tokens e componentes no design system Live Run, mas deixou em aberto onde ficam as telas de alta fidelidade.

Foram avaliados: um artifact novo com o código no repositório; converter o próprio artifact dos wireframes; ou criar as telas como páginas dentro do design system.

## Decisão

- As telas de alta fidelidade ficam num **artifact HTML próprio, "Live Run — Telas"**, no mesmo padrão dos wireframes (ADR 0063).
- O código-fonte fica versionado em **`docs/telas/index.html`**, e o artifact publicado é a forma de visualizar.
- Cada tela mostra os mesmos estados dos wireframes, nos dois temas, e indica os ADRs e os componentes do design system que usa.
- Os **wireframes de baixa fidelidade continuam** em `docs/wireframes/index.html` e no artifact deles, como referência de estrutura e fluxo.
- Os **tokens do design system são copiados** para um bloco no topo de `docs/telas/index.html`, com os mesmos nomes. Quando um token mudar no design system, a cópia é atualizada no mesmo passo.
- As telas são feitas uma por vez, na ordem dos wireframes: Hoje, detalhe do treino, Plano, Notificações, Piu, Perfil e onboarding.

## Consequências

- O histórico das telas fica no git, e o artifact evolui por republicação no mesmo link.
- Há duas cópias dos tokens (design system e telas), com risco de divergir. A regra de atualizar no mesmo passo reduz o risco, e o card 6 confere as duas.
- O HTML não vira código do app: as telas serão refeitas em React Native, com os tokens do ADR 0133.
