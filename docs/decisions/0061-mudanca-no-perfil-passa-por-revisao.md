# ADR 0061: Mudança nos dados do setup passa por revisão antes de valer

- **Status:** Aceita
- **Data:** 2026-10-20

## Contexto

O critério 6.5 diz que o usuário pode mudar os dados do setup a qualquer momento (dias, meta, prazo, nível, lesões), em Perfil > Meu treino (ADRs 0038 e 0041), e que o plano é reajustado a partir de hoje. Faltava definir se o reajuste entra direto ou passa por revisão.

## Decisão

O reajuste passa por revisão, como na geração do plano (jornada 3).

- Ao salvar a mudança, o app mostra "Ajustando seu plano", e a proposta é montada pelo fluxo "IA propõe, regras validam" (ADR 0022).
- O usuário vê o antes e o depois da estrutura e das semanas detalhadas, com os avisos de risco (ADR 0017), e decide se aceita, edita com o Piu (ADR 0053) ou descarta.
- Se descartar, os dados do Perfil voltam ao que eram, e o plano não muda.
- Enquanto o usuário não decide, o plano atual continua valendo.
- Se a IA falhar, o app avisa e oferece tentar de novo, com a mudança preservada. Os dados do Perfil só mudam de fato quando a proposta é aceita.

## Consequências

- O ADR 0041 ("o plano é reajustado a partir de hoje") passa a seguir esse fluxo de revisão.
- Os treinos passados não mudam (critério 6.6).
- Se a proposta ficar pendente, ela segue a regra de vencimento do ADR 0052.
- Quando o Piu oferece atualizar os dias no Perfil depois de uma troca definitiva (ADR 0041), a confirmação do usuário também abre essa revisão para as semanas seguintes.
