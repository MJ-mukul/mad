import QRCode from "qrcode";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { certificateSchema } from "@/lib/schemas";
import { absoluteUrl } from "@/lib/utils";

export async function POST(request: Request) {
  const input = certificateSchema.safeParse(await request.json());
  if (!input.success) return NextResponse.json({ error: "Invalid certificate request" }, { status: 400 });

  const certificateId = `MAD-${new Date().getFullYear()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const verifyUrl = absoluteUrl(`/verify-certificate/${certificateId}`);
  const qrUrl = await QRCode.toDataURL(verifyUrl);

  const certificate = await prisma.certificate.create({
    data: {
      certificateId,
      eventId: input.data.eventId,
      memberId: input.data.memberId,
      recipient: input.data.recipient,
      qrUrl
    }
  });

  return NextResponse.json({ certificate, verifyUrl }, { status: 201 });
}
