import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard-shell";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <DashboardShell title="Member Dashboard" subtitle="Profile, attendance, certificates, achievements, events joined, tasks, leaderboard, notifications, downloads, badges, and activity timeline.">
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {["Volunteer Points: 1,280", "Badges: 9", "Attendance: 94%", "Tasks Due: 3", "Certificates: 12", "Leaderboard Rank: 4"].map((item) => (
          <Card key={item} className="text-sm font-semibold text-zinc-200">{item}</Card>
        ))}
      </div>
    </DashboardShell>
  );
}
