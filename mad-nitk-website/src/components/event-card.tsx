import Link from "next/link";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { formatDate } from "@/lib/utils";

type Event = {
  title: string;
  slug: string;
  date: string;
  venue: string;
  category: string;
  seats: number;
  description: string;
};

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="rounded-lg border border-white/10 bg-card p-6 transition hover:-translate-y-1 hover:border-cyan/50">
      <p className="text-sm font-semibold text-cyan">{event.category}</p>
      <h3 className="mt-3 text-2xl font-black text-white">{event.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{event.description}</p>
      <div className="mt-6 space-y-3 text-sm text-zinc-300">
        <p className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-cyan" />
          {formatDate(event.date)}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-cyan" />
          {event.venue}
        </p>
        <p className="flex items-center gap-2">
          <Users className="h-4 w-4 text-cyan" />
          {event.seats} participant capacity
        </p>
      </div>
      <Link href={`/events/${event.slug}`} className="mt-6 inline-flex text-sm font-bold text-white hover:text-cyan">
        View details
      </Link>
    </article>
  );
}
