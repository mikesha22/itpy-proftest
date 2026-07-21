import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const supabase = getSupabaseAdmin();
  if (!supabase) return NextResponse.json({ error: "Хранилище не настроено" }, { status: 503 });

  const { data, error } = await supabase.from("test_results").select("payload").eq("id", id).single();
  if (error || !data) return NextResponse.json({ error: "Результат не найден" }, { status: 404 });

  return NextResponse.json(data.payload);
}
