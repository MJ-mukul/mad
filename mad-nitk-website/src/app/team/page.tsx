import type { Metadata } from "next";
import { MemberCard } from "@/components/member-card";
import { Section } from "@/components/section";
import { members } from "@/lib/site";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  const groups = ["Executive Board", "Secretary", "Joint Secretary", "Heads", "Co-Heads", "Members", "Past Teams"];
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow="Team" title="Profiles built for people, work, contribution, and continuity.">
        <div className="mt-8 flex flex-wrap gap-2">
          {groups.map((group) => (
            <span key={group} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">{group}</span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => <MemberCard key={member.name} member={member} />)}
        </div>
      </Section>
    </main>
  );
}
