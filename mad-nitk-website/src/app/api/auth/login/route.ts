import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createSessionToken, loginSchema, sessionCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const input = loginSchema.safeParse(await request.json());
  if (!input.success) return NextResponse.json({ error: "Invalid login data" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email: input.data.email.toLowerCase() } });
  if (!user?.passwordHash) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const valid = await bcrypt.compare(input.data.password, user.passwordHash);
  if (!valid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = await createSessionToken({ id: user.id, email: user.email, role: user.role });
  const response = NextResponse.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  response.cookies.set(sessionCookie, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: input.data.remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7
  });
  return response;
}
