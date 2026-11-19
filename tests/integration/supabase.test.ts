// Teste de fumaça da integração (ADRs 0136 e 0228). Sai quando o backend ganhar testes reais.
import { describe, expect, it } from '@jest/globals';

import { criarClienteAdmin } from './supabase';

describe('Supabase local', () => {
  it('responde pela API, passando pelo Auth e pelo Postgres', async () => {
    const supabase = criarClienteAdmin();

    // A API de admin do Auth lê os usuários no Postgres: a resposta só vem com a pilha toda no ar.
    const { data, error } = await supabase.auth.admin.listUsers({ perPage: 1 });

    expect(error).toBeNull();
    expect(Array.isArray(data.users)).toBe(true);
  });
});
