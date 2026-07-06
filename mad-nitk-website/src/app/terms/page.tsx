import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow="Terms" title="Terms of Use">
        <div className="mt-8 max-w-3xl space-y-5 text-zinc-400">
          <p>Use of this platform is limited to authentic club, campus, recruitment, event, and certificate workflows.</p>
          <p>Admins are responsible for accurate data, fair access, secure exports, and timely removal of outdated sensitive information.</p>
        </div>
      </Section>
    </main>
  );
}
