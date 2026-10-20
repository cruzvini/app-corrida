# ADR 0060: Ação pronta "adiar a prova" recalcula a estrutura pelas regras

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

No plano específico, "adiar a prova" é uma ação pronta da semana (ADRs 0018 e 0036) e precisa ser determinística. O plano tem uma estrutura até a data da prova (fases e volume semanal), separada das 1 a 2 semanas detalhadas (ADR 0023).

## Decisão

O usuário escolhe no calendário uma data **mais tarde** que a atual.

- As regras recalculam a estrutura até a nova data, sem IA: esticam as fases e redistribuem o volume semanal.
- As semanas já detalhadas não mudam.
- A ação é aplicada na hora, mostra o antes e o depois da estrutura e pode ser desfeita enquanto for o ajuste mais recente (ADR 0047).
- Se o novo prazo for arriscado (ex.: longo demais, com risco de perder forma), o app mostra um aviso, sem bloquear (ADR 0017).
- Para antecipar a prova ou trocar a meta, o usuário conversa com o Piu ou muda os dados no Perfil (critério 6.5).

## Consequências

- O motor de regras precisa de uma função determinística para esticar a estrutura, coberta por testes unitários com prazos variados.
- Os limites de prazo que geram aviso serão definidos no épico "Motor de regras".
- As próximas semanas detalhadas (ADR 0044) passam a seguir a nova estrutura.
- A ação não aparece no plano genérico, que não tem data final.
