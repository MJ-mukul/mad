import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { pages } from "@/lib/site";

export const metadata: Metadata = { title: "Blogs" };

export default function BlogsPage() {
  return <ContentPage {...pages.blogs} />;
}
