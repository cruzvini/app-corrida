// Cliente do Supabase para os testes de integração (ADRs 0228 e 0229).
//
// A URL e a chave secreta vêm de SUPABASE_URL e SUPABASE_SECRET_KEY. Quando elas não existem, o
// globalSetup do projeto de integração preenche com o `supabase status` do ambiente local.
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/** Lê uma variável obrigatória e explica o que fazer quando ela falta. */
function lerVariavel(nome: 'SUPABASE_URL' | 'SUPABASE_SECRET_KEY'): string {
  const valor = process.env[nome];
  if (!valor) {
    throw new Error(
      `${nome} não definida. Suba o Supabase local com \`npx supabase start\` ou defina a variável.`,
    );
  }
  return valor;
}

/**
 * Cliente com a chave secreta, que ignora a RLS. Serve para preparar e conferir dados nos testes,
 * e nunca deve ser usado pelo app.
 */
export function criarClienteAdmin(): SupabaseClient {
  return createClient(lerVariavel('SUPABASE_URL'), lerVariavel('SUPABASE_SECRET_KEY'), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
