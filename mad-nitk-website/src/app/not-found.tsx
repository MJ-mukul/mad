import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">404</p>
        <h1 className="mt-4 text-5xl font-black text-white">This page drifted off schedule.</h1>
        <p className="mt-4 text-zinc-400">Return to the MAD command center.</p>
        <Button asChild className="mt-8" variant="violet">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </main>
  );
}
