import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pages, sponsors } from "@/lib/site";

export const metadata: Metadata = { title: "Sponsors" };

export default function SponsorsPage() {
  return (
    <ContentPage {...pages.sponsors}>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {sponsors.map((sponsor) => (
          <div key={sponsor} className="grid h-28 place-items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 text-center text-sm font-bold text-zinc-200">
            {sponsor}
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
