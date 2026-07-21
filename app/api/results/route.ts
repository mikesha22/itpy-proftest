import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import type { ResultPayload } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ResultPayload;
    if (!payload || !(["0.1", "0.2"] as const).includes(payload.version) || !payload.scores || !payload.profileId) {
      return NextResponse.json({ error: "Некорректный результат" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json({ stored: false, reason: "Supabase не настроен" });
    }

    const id = randomBytes(8).toString("base64url");
    const { error } = await supabase.from("test_results").insert({ id, payload });
    if (error) throw error;

    return NextResponse.json({ stored: true, id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Не удалось сохранить результат" }, { status: 500 });
  }
}
