import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard-shell";

export const metadata: Metadata = { title: "Member Portal" };

export default function PortalPage() {
  return <DashboardShell title="Member Portal" subtitle="A role-based workspace for members, volunteers, core team, heads, secretary, admin, and super admin users." />;
}
