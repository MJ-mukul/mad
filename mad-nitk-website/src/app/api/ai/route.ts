import { NextResponse } from "next/server";
import { generateAiDraft } from "@/lib/ai";
import { aiSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const input = aiSchema.safeParse(await request.json());
  if (!input.success) return NextResponse.json({ error: "Invalid AI request" }, { status: 400 });

  const draft = await generateAiDraft(input.data.task, input.data.prompt);
  return NextResponse.json({ draft });
}
