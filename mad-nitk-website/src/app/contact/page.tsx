import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContentPage } from "@/components/content-page";
import { pages } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <ContentPage {...pages.contact}>
      <ContactForm />
      <div className="mt-8 aspect-[16/6] rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(124,58,237,0.25),rgba(6,182,212,0.12))] p-6 text-zinc-300">
        Google Maps embed slot for NIT Kurukshetra.
      </div>
    </ContentPage>
  );
}
