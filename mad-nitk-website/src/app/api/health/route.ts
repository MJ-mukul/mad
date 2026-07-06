import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "mad-nitk-website",
    timestamp: new Date().toISOString()
  });
}
