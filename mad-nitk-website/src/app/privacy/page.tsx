import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow="Privacy" title="Privacy Policy">
        <div className="mt-8 max-w-3xl space-y-5 text-zinc-400">
          <p>MAD collects account, application, event, attendance, certificate, and communication data only to operate the club platform.</p>
          <p>Production deployments should configure retention windows, audit logs, consent records, and export or deletion workflows.</p>
        </div>
      </Section>
    </main>
  );
}
