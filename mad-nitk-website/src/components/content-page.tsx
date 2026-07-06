import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export function ContentPage({
  eyebrow,
  title,
  text,
  sections,
  children
}: {
  eyebrow: string;
  title: string;
  text: string;
  sections: { title: string; text: string }[];
  children?: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow={eyebrow} title={title} className="pb-12">
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{text}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title}>
              <h2 className="text-2xl font-black text-white">{section.title}</h2>
              <p className="mt-3 leading-7 text-zinc-400">{section.text}</p>
            </Card>
          ))}
        </div>
        {children}
      </Section>
    </main>
  );
}
