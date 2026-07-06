import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  children,
  className
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className="max-w-3xl">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">{eyebrow}</p> : null}
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
