import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { createElement, type ReactElement } from "react";
import ResultPdfDocument from "@/components/ResultPdfDocument";
import type { ResultPayload } from "@/lib/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = await request.json() as ResultPayload;
    const document = createElement(ResultPdfDocument, { payload }) as ReactElement<DocumentProps>;
    const buffer = await renderToBuffer(document);

    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=itpy-result.pdf",
        "Cache-Control": "no-store",
      },
    });
  } catch (reason) {
    console.error("Failed to render result PDF", reason);
    return Response.json({ error: "Не удалось подготовить PDF." }, { status: 500 });
  }
}
