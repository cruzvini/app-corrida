// globalSetup do projeto de integração (ADR 0229).
//
// Se SUPABASE_URL ou SUPABASE_SECRET_KEY não estiverem definidas, preenche com o `supabase status`
// do ambiente local. As variáveis definidas aqui chegam aos testes, porque o Jest cria os workers
// depois do globalSetup.
import { execSync } from 'node:child_process';

/** Campos do `supabase status -o json` que os testes usam. */
type StatusDoSupabase = {
  API_URL?: string;
  SECRET_KEY?: string;
};

const COMO_SUBIR =
  'Suba o Supabase local com `npx supabase start` (o Docker Desktop precisa estar rodando) ' +
  'ou defina SUPABASE_URL e SUPABASE_SECRET_KEY.';

function lerStatus(): StatusDoSupabase {
  try {
    const saida = execSync('npx supabase status -o json', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return JSON.parse(saida) as StatusDoSupabase;
  } catch (erro) {
    const detalhe = erro instanceof Error ? erro.message : String(erro);
    throw new Error(`Não consegui ler o \`supabase status\`. ${COMO_SUBIR}\n\n${detalhe}`);
  }
}

export default function globalSetup(): void {
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY) return;

  const status = lerStatus();
  if (!status.API_URL || !status.SECRET_KEY) {
    throw new Error(`O \`supabase status\` não trouxe a URL e a chave secreta. ${COMO_SUBIR}`);
  }

  process.env.SUPABASE_URL ??= status.API_URL;
  process.env.SUPABASE_SECRET_KEY ??= status.SECRET_KEY;
}
