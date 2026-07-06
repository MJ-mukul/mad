import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    authentication: ["POST /api/auth/register", "POST /api/auth/login", "POST /api/auth/logout"],
    events: ["GET /api/events", "POST /api/events"],
    recruitment: ["POST /api/recruitment"],
    certificates: ["POST /api/certificates", "GET /verify-certificate/:id"],
    attendance: ["POST /api/attendance"],
    ai: ["POST /api/ai"],
    analytics: ["GET /api/analytics"],
    security: ["HTTP-only cookies", "Zod validation", "role middleware", "audit log ready"]
  });
}
