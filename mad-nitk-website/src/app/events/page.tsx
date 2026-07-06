import type { Metadata } from "next";
import { EventCard } from "@/components/event-card";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { events } from "@/lib/site";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow="Events" title="Every event has registration, countdowns, schedules, attendance, volunteers, and certificates.">
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {["Search", "Filters", "Calendar View", "Certificates"].map((item) => (
            <Card key={item} className="p-4 text-sm font-semibold text-zinc-200">{item}</Card>
          ))}
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {events.map((event) => <EventCard key={event.slug} event={event} />)}
        </div>
      </Section>
    </main>
  );
}
