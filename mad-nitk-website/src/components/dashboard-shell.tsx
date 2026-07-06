import { dashboardCards } from "@/lib/site";

export function DashboardShell({ title, subtitle, children }: { title: string; subtitle: string; children?: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-ink pt-24">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">Operations</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">{subtitle}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dashboardCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-white/10 bg-card p-6">
              <card.icon className="h-6 w-6 text-cyan" />
              <h2 className="mt-4 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm text-zinc-400">{card.value}</p>
            </article>
          ))}
        </div>
        {children}
      </section>
    </main>
  );
}
