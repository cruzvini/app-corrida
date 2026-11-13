# ADR 0210: Risco no setup com o AvisoDeRisco abaixo dos campos e as alternativas em botões secundários

- **Status:** Aceita
- **Data:** 2026-11-13
- **Complementa:** [ADR 0017](0017-avisar-riscos-sem-bloquear-plano.md), [ADR 0103](0103-objetivo-em-tres-opcoes.md) e [ADR 0190](0190-aviso-de-risco-na-proposta.md)

## Contexto

Se as regras acharem o objetivo arriscado, o app explica e sugere alternativas, sem bloquear; seguir fica registrado (ADR 0017). Na conversa com o Piu, o risco aparece no AvisoDeRisco dentro do card da proposta (ADR 0190). Faltava a forma no setup. O usuário aceitou a proposta desenhada.

## Decisão

- O **AvisoDeRisco** (ADR 0190) aparece logo abaixo dos campos de distância e data: `risco-suave`, contorno em `risco`, `warning` e uma frase com o risco e a pergunta ("Prazo curto para 21 km: em 5 semanas, o volume teria que subir rápido para o seu nível. Que tal uma destas?").
- Logo abaixo, as **alternativas em botões secundários** ("10 km em 29 nov", "21 km em 21 fev"), que preenchem os campos com um toque. O aviso some quando o objetivo deixa de ser arriscado.
- **Não bloqueia:** o "Continuar" segue ativo, com a nota embaixo: "Continuar com 21 km em 29 nov fica registrado no plano."
- Sem o link "Seguir mesmo assim" do wireframe: o "Continuar" já é seguir.
- Contrastes: os do AvisoDeRisco (ADR 0190); botões secundários sobre `fundo` 6,6:1 (claro) e 9,1:1 (escuro).

## Consequências

- O risco usa o mesmo aviso no setup e na conversa com o Piu.
- O AvisoDeRisco do design system Live Run ganha o caso do setup (ADR 0143).
