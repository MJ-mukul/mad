import type { Metadata } from "next";
import { RecruitmentForm } from "@/components/recruitment-form";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { recruitmentSteps } from "@/lib/site";

export const metadata: Metadata = { title: "Recruitment" };

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow="Recruitment" title="A transparent application portal with tracking, resume upload, portfolio, and interview questions.">
        <div className="mt-10 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <h2 className="text-2xl font-black text-white">Selection Process</h2>
            {recruitmentSteps.map((step, index) => (
              <p key={step} className="mt-4 rounded-lg bg-white/5 p-4 text-sm text-zinc-300">{index + 1}. {step}</p>
            ))}
          </Card>
          <RecruitmentForm />
        </div>
      </Section>
    </main>
  );
}
