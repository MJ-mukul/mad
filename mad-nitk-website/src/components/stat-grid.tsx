import { stats } from "@/lib/site";

export function StatGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p className="text-3xl font-black text-white">{stat.value}</p>
          <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
