import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Timer, Users } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  return { title: event?.title ?? "Event" };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow={event.category} title={event.title}>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{event.description}</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          <Card><CalendarDays className="h-5 w-5 text-cyan" /><p className="mt-3 text-sm text-zinc-300">{formatDate(event.date)}</p></Card>
          <Card><MapPin className="h-5 w-5 text-cyan" /><p className="mt-3 text-sm text-zinc-300">{event.venue}</p></Card>
          <Card><Users className="h-5 w-5 text-cyan" /><p className="mt-3 text-sm text-zinc-300">{event.seats} seats</p></Card>
          <Card><Timer className="h-5 w-5 text-cyan" /><p className="mt-3 text-sm text-zinc-300">Countdown enabled</p></Card>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <Card>
            <h2 className="text-2xl font-black text-white">Schedule</h2>
            {["Check-in and QR scan", "Opening keynote", "Live rounds", "Networking", "Certificates"].map((item, index) => (
              <p key={item} className="mt-4 rounded-lg bg-white/5 p-4 text-sm text-zinc-300">{index + 1}. {item}</p>
            ))}
          </Card>
          <Card>
            <h2 className="text-2xl font-black text-white">Register</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">Participant limit, waitlist, email notifications, QR registration, and certificate issue are wired through API routes.</p>
            <Button className="mt-6 w-full" variant="violet">Register now</Button>
          </Card>
        </div>
      </Section>
    </main>
  );
}
