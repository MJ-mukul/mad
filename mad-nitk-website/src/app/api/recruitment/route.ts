import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { recruitmentSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const input = recruitmentSchema.safeParse(await request.json());
  if (!input.success) return NextResponse.json({ error: "Invalid application" }, { status: 400 });

  const application = await prisma.application.create({
    data: input.data
  });
  return NextResponse.json({ application }, { status: 201 });
}
