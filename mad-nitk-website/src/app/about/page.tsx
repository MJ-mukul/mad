import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { Timeline } from "@/components/timeline";
import { pages } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <ContentPage {...pages.about}>
      <Timeline />
    </ContentPage>
  );
}
