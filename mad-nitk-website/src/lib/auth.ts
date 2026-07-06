import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { z } from "zod";
import type { AppRole } from "@/lib/rbac";

const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? "development-secret-change-me");
export const sessionCookie = "mad_session";

export const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean().optional()
});

export async function createSessionToken(payload: { id: string; email: string; role: AppRole }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function readSession() {
  const token = (await cookies()).get(sessionCookie)?.value;
  if (!token) return null;
  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload as { id: string; email: string; role: AppRole };
  } catch {
    return null;
  }
}
