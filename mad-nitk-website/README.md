# MAD NIT Kurukshetra Website

Premium full-stack website for MAD (Managing and Directing Club), NIT Kurukshetra.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Shadcn-style component primitives
- Framer Motion and GSAP-ready animation layer
- React Hook Form and Zod
- TanStack Query
- Prisma with MongoDB Atlas
- JWT sessions with HTTP-only cookies
- Cloudinary, Resend, Google Analytics, Microsoft Clarity

## Features

- Public pages: Home, About, Team, Events, Gallery, Sponsors, Achievements, Blogs, Resources, Recruitment, Contact
- Member areas: Dashboard, Member Portal, Profile
- Admin area: analytics, members, teams, events, blogs, gallery, sponsors, recruitment, certificates, attendance, roles, notifications, logs, exports
- Event system: registration, QR attendance, participant limits, schedules, speakers, volunteers, certificates
- Certificate system: unique certificate IDs, QR verification, issue endpoint, verification route
- Recruitment system: application form, resume and portfolio fields, application tracking schema
- Auth: email signup, email login, verification hook, logout, Google OAuth placeholders
- AI helpers: event, blog, caption, alt text, email, and FAQ draft endpoint
- SEO: metadata, Open Graph, Twitter cards, sitemap, robots
- Security: HTTP-only cookies, validation, security headers, role model, middleware boundary

## Getting Started

```bash
pnpm install
pnpm prisma:generate
pnpm dev
```

Copy `.env.example` to `.env` and fill the values before connecting live services.

## Key Routes

- `/` premium public homepage
- `/events` event listing
- `/events/[slug]` event detail and registration shell
- `/recruitment` recruitment portal
- `/dashboard` member dashboard
- `/admin` admin panel
- `/api/docs` API index
- `/verify-certificate/[id]` certificate verification

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/events`
- `POST /api/events`
- `POST /api/recruitment`
- `POST /api/certificates`
- `POST /api/attendance`
- `POST /api/ai`
- `GET /api/analytics`
- `GET /api/health`

## Production Notes

The project is intentionally structured so production integrations can be activated by environment variables. In a real deployment, enable MongoDB Atlas, configure Google OAuth callback URLs, set Resend sender verification, lock Cloudinary upload presets, and connect AI generation through a moderated server-side workflow.
