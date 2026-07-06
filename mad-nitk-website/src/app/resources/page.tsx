import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pages, searchTargets } from "@/lib/site";

export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <ContentPage {...pages.resources}>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {searchTargets.map((target) => (
          <div key={target.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-card p-5 text-zinc-200">
            <target.icon className="h-5 w-5 text-cyan" />
            {target.label}
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
