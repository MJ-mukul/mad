import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pages } from "@/lib/site";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return <ContentPage {...pages.achievements} />;
}
