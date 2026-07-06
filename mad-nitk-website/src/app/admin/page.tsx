import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard-shell";
import { Card } from "@/components/ui/card";
import { adminModules } from "@/lib/site";

export const metadata: Metadata = { title: "Admin Panel" };

export default function AdminPage() {
  return (
    <DashboardShell title="Admin Panel" subtitle="A complete control room for analytics, members, teams, events, blogs, gallery, sponsors, recruitment, certificates, attendance, roles, notifications, logs, and exports.">
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {adminModules.map((module) => <Card key={module} className="p-4 text-sm font-semibold text-zinc-200">{module}</Card>)}
      </div>
    </DashboardShell>
  );
}
