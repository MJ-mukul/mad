import { footerLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <p className="text-2xl font-black text-white">MAD</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
            Managing and Directing Club of NIT Kurukshetra. Built for leadership, execution, and measurable campus impact.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {footerLinks.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-zinc-400">
              <item.icon className="h-4 w-4 text-cyan" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
