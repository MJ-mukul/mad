import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";
import { Section } from "@/components/section";

export const metadata: Metadata = { title: "Authentication" };

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow="Auth" title="Google OAuth, email login, verification, forgot password, reset password, sessions, remember me, and logout.">
        <AuthForm />
      </Section>
    </main>
  );
}
