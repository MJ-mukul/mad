import { timeline } from "@/lib/site";

export function Timeline() {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-4">
      {timeline.map((item) => (
        <article key={item.year} className="relative rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm font-bold text-cyan">{item.year}</p>
          <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
