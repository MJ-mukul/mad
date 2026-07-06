import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "Verify Certificate" };

export default async function VerifyCertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow="Verification" title="Certificate verification">
        <Card className="mt-10 max-w-2xl">
          <BadgeCheck className="h-10 w-10 text-cyan" />
          <h2 className="mt-5 text-2xl font-black text-white">{id}</h2>
          <p className="mt-3 text-zinc-400">Connect this page to the certificate API for live database verification and recipient metadata.</p>
        </Card>
      </Section>
    </main>
  );
}
