import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarClock, Quote, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { EventCard } from "@/components/event-card";
import { MagneticButton } from "@/components/magnetic-button";
import { Newsletter } from "@/components/newsletter";
import { Section } from "@/components/section";
import { StatGrid } from "@/components/stat-grid";
import { Timeline } from "@/components/timeline";
import { Card } from "@/components/ui/card";
import { events, features, gallery, sponsors } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="bg-ink">
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
        <AnimatedBackground />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <Sparkles className="h-4 w-4 text-cyan" />
              Managing and Directing Club
            </div>
            <h1 className="mt-8 max-w-4xl text-6xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
              <span className="block">Managing.</span>
              <span className="block bg-gradient-to-r from-white via-accent to-cyan bg-clip-text text-transparent">Directing.</span>
              <span className="block">Leading.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
              A premium operating platform for the biggest management club at NIT Kurukshetra, built for events, members,
              sponsors, recruitment, certificates, analytics, and campus leadership.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href="/recruitment">Apply to MAD</MagneticButton>
              <Link href="/events" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-bold text-white hover:bg-white/10">
                Explore events <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <Card className="self-end p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating during a leadership event"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-sm font-semibold text-cyan">Live command center</p>
                <p className="mt-2 text-2xl font-black text-white">Registrations, attendance, and certificates in one flow.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Section eyebrow="Impact" title="Built for scale, clarity, and the kind of execution people remember.">
        <div className="mt-10"><StatGrid /></div>
      </Section>

      <Section eyebrow="Why Join MAD" title="Learn the invisible skills that make ambitious work actually happen.">
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <feature.icon className="h-6 w-6 text-cyan" />
              <h3 className="mt-5 text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Upcoming" title="Upcoming events with registrations, schedules, volunteers, and certificates.">
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {events.map((event) => <EventCard key={event.slug} event={event} />)}
        </div>
      </Section>

      <Section eyebrow="Gallery" title="A visual archive of the rooms, stages, and teams behind the work.">
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 3).map((asset) => (
            <div key={asset.title} className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <Image src={asset.image} alt={asset.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan">{asset.category}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{asset.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Sponsors" title="Trusted by campus partners, alumni networks, and innovation communities.">
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {sponsors.map((sponsor) => (
            <div key={sponsor} className="grid h-28 place-items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 text-center text-sm font-bold text-zinc-200">
              {sponsor}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Journey" title="From a student collective to a leadership operating system.">
        <Timeline />
      </Section>

      <Section eyebrow="Testimonials" title="The quiet signal: students trust MAD with serious responsibility.">
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {["MAD made leadership measurable for me.", "The most professional event culture I have seen on campus.", "Sponsors get clarity, students get opportunity."].map((quote) => (
            <Card key={quote}>
              <Quote className="h-6 w-6 text-cyan" />
              <p className="mt-5 text-lg font-semibold leading-7 text-white">{quote}</p>
              <p className="mt-5 text-sm text-zinc-400">Verified community feedback</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Stay Updated" title="Get event launches, recruitment windows, and certificate updates.">
        <div className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
          <BadgeCheck className="h-4 w-4 text-cyan" />
          No noise. Only useful club updates.
        </div>
        <Newsletter />
        <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
          <CalendarClock className="h-4 w-4" />
          Live announcement banner and birthday notifications are modeled in the notification module.
        </div>
      </Section>
    </main>
  );
}
