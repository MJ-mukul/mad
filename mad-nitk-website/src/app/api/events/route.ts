import { NextResponse } from "next/server";
import { events } from "@/lib/site";
import { prisma } from "@/lib/prisma";
import { eventSchema } from "@/lib/schemas";

export async function GET() {
  if (!process.env.DATABASE_URL) return NextResponse.json({ events });
  const storedEvents = await prisma.event.findMany({ orderBy: { startsAt: "asc" } });
  return NextResponse.json({ events: storedEvents });
}

export async function POST(request: Request) {
  const input = eventSchema.safeParse(await request.json());
  if (!input.success) return NextResponse.json({ error: "Invalid event data" }, { status: 400 });

  const event = await prisma.event.create({
    data: {
      ...input.data,
      startsAt: new Date(input.data.startsAt),
      endsAt: new Date(input.data.endsAt),
      speakers: [],
      capacity: input.data.capacity
    }
  });
  return NextResponse.json({ event }, { status: 201 });
}
