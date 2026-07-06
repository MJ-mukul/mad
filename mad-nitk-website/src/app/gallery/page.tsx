import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { gallery } from "@/lib/site";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-ink pt-24">
      <Section eyebrow="Gallery" title="Photos, videos, albums, categories, infinite scroll, lightbox, search, and lazy loading.">
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((asset) => (
            <article key={asset.title} className="group overflow-hidden rounded-lg border border-white/10 bg-card">
              <div className="relative aspect-[4/3]">
                <Image src={asset.image} alt={asset.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-sm text-cyan">{asset.category}</p>
                <h2 className="mt-1 text-xl font-bold text-white">{asset.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
