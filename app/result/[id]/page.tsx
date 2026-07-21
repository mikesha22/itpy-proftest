import ResultView from "@/components/ResultView";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import type { ResultPayload } from "@/lib/types";

export default async function SharedResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = getSupabaseAdmin();
  let payload: ResultPayload | null = null;

  if (supabase) {
    const { data } = await supabase.from("test_results").select("payload").eq("id", id).single();
    payload = (data?.payload as ResultPayload | undefined) ?? null;
  }

  if (!payload) {
    return (
      <main className="site-shell result-shell">
        <section className="notice-card"><h1>Результат не найден</h1><p>Ссылка устарела или хранилище ещё не подключено.</p></section>
      </main>
    );
  }

  return <ResultView payload={payload} shared />;
}
