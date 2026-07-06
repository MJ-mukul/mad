# Deployment Guide

## 1. MongoDB Atlas

1. Create a MongoDB Atlas cluster.
2. Add a database user with a strong password.
3. Allow Vercel outbound access or configure the appropriate network rules.
4. Set `DATABASE_URL` in Vercel using the MongoDB connection string.
5. Run `pnpm prisma:push` once for schema synchronization.

## 2. Google OAuth

1. Create OAuth credentials in Google Cloud Console.
2. Add `http://localhost:3000/auth` for local testing.
3. Add the deployed Vercel auth callback URL.
4. Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

## 3. Resend Email

1. Verify a sending domain in Resend.
2. Set `RESEND_API_KEY`.
3. Update sender addresses in `src/lib/email.ts`.

## 4. Cloudinary

1. Create a Cloudinary cloud.
2. Set `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
3. Use signed uploads for admin workflows and unsigned presets only for constrained public uploads.

## 5. Analytics

1. Set `NEXT_PUBLIC_GA_ID` for Google Analytics.
2. Set `NEXT_PUBLIC_CLARITY_ID` for Microsoft Clarity.

## 6. Vercel

1. Import the repository into Vercel.
2. Select the Next.js framework preset.
3. Add all environment variables from `.env.example`.
4. Use `pnpm build` as the build command.
5. Deploy.

## 7. Security Checklist

- Use a strong `JWT_SECRET`.
- Keep cookies HTTP-only and secure in production.
- Add rate limiting at the edge or API gateway.
- Configure audit logging for admin actions.
- Review role permissions before launch.
- Verify email sender and OAuth callback domains.
