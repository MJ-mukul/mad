import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow="Profile" title="A complete member identity with contribution history and verified credentials.">
        <Card className="mt-10 overflow-hidden p-0">
          <div className="relative h-48">
            <Image src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80" alt="Campus leadership cover" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-black text-white">MAD Member</h2>
            <p className="mt-3 max-w-2xl text-zinc-400">Photo, cover image, bio, social links, skills, projects, achievements, attendance, certificates, badges, contribution score, and gallery are modeled for production profiles.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Contribution Score 4,820", "Certificates 12", "Badges 9"].map((item) => (
                <div key={item} className="rounded-lg bg-white/5 p-4 text-sm font-semibold text-zinc-200">{item}</div>
              ))}
            </div>
          </div>
        </Card>
      </Section>
    </main>
  );
}
