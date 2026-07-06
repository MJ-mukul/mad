import { Resend } from "resend";

export const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendVerificationEmail(email: string, token: string) {
  if (!resend) return { skipped: true };
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify?token=${token}`;
  return resend.emails.send({
    from: "MAD NITK <noreply@madnitk.org>",
    to: email,
    subject: "Verify your MAD account",
    html: `<p>Welcome to MAD. Verify your account here: <a href="${url}">${url}</a></p>`
  });
}
