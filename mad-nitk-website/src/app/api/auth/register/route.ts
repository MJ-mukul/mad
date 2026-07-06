import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createSessionToken, sessionCookie, signupSchema } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const input = signupSchema.safeParse(await request.json());
  if (!input.success) return NextResponse.json({ error: "Invalid signup data" }, { status: 400 });

  const passwordHash = await bcrypt.hash(input.data.password, 12);
  const user = await prisma.user.create({
    data: {
      name: input.data.name,
      email: input.data.email.toLowerCase(),
      passwordHash,
      role: "MEMBER"
    }
  });

  await sendVerificationEmail(user.email, crypto.randomUUID());
  const token = await createSessionToken({ id: user.id, email: user.email, role: user.role });
  const response = NextResponse.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } }, { status: 201 });
  response.cookies.set(sessionCookie, token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/" });
  return response;
}
