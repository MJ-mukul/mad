import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  eventId: z.string(),
  email: z.string().email(),
  memberId: z.string().optional()
});

export async function POST(request: Request) {
  const input = schema.safeParse(await request.json());
  if (!input.success) return NextResponse.json({ error: "Invalid attendance scan" }, { status: 400 });

  const attendance = await prisma.attendance.create({ data: input.data });
  return NextResponse.json({ attendance }, { status: 201 });
}
