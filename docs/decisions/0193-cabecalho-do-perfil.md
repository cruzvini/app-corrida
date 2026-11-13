# ADR 0193: Cabeçalho do Perfil com avatar, nome e e-mail, e Conta só com "Sair"

- **Status:** Aceita
- **Data:** 2026-11-13
- **Revisa:** [ADR 0094](0094-perfil-so-com-dados-pessoais.md) (seção Conta)
- **Complementa:** [ADR 0099](0099-nome-no-perfil.md) e [ADR 0184](0184-cabecalho-da-conversa.md)

## Contexto

O ADR 0099 pôs o nome no topo do Perfil, com o e-mail abaixo, e o ADR 0094 manteve o e-mail também na seção Conta, junto do "Sair". O primeiro desenho em alta fidelidade seguia os dois: o e-mail aparecia duas vezes, e o topo ainda tinha a linha "No Live Run desde 26 out", que não ajuda em nada.

Foram comparadas três opções: avatar com a inicial, nome e e-mail no topo, e Conta só com "Sair"; o desenho como estava, com o e-mail repetido em Conta e a linha "desde"; e o nome como título da tela, sem avatar, no lugar de "Perfil".

## Decisão

- O Perfil mantém o título **"Perfil"** de 24 px, como as outras abas.
- Abaixo do título, o **cabeçalho**: avatar de **56 px** com a **inicial do nome** em 24 px, negrito, em `primaria`, sobre um círculo em `primaria-suave`, e, ao lado, o **nome** em 20 px, negrito, em `texto`, com o **e-mail** embaixo, em legenda de 13 px, em `texto-secundario`. 14 px entre o avatar e o texto.
- A inicial vem do campo "Como você quer ser chamado" (ADR 0099) e muda junto com ele. O avatar é decorativo para leitores de tela, porque o nome vem ao lado.
- **Sem a linha "desde".**
- **O e-mail aparece só no cabeçalho.** A seção **Conta** fica só com a ação **"Sair"**.
- O cabeçalho não é tocável. Para mudar o nome, o caminho é o "Editar perfil".
- O avatar do usuário é diferente do avatar do Piu (ADR 0184), que tem 28 px e um ícone, e não uma letra.
- Contrastes: nome sobre `fundo` 16,4:1 (claro) e 16,3:1 (escuro); e-mail 6,4:1 e 8,1:1; inicial sobre `primaria-suave` 5,9:1 e 6,7:1.

## Consequências

- O e-mail não se repete na tela, e a seção Conta fica com uma linha só.
- O ADR 0094 muda na seção Conta: era "e-mail e sair", passa a ser só "sair", com o e-mail no cabeçalho.
- O design system Live Run ganha o componente CabecalhoDoPerfil (ADR 0143).
