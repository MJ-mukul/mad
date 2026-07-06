import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    registrations: 1280,
    attendanceRate: 0.94,
    volunteerHours: 4260,
    certificatesIssued: 935,
    sponsorReach: 75000
  });
}
