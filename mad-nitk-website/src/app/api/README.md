# API Documentation

The live API index is available at `/api/docs`.

All write endpoints validate payloads with Zod. Production deployments should add rate limiting, audit logging, CSRF strategy for browser mutations, and explicit role checks per endpoint.

## Auth

- `POST /api/auth/register`: creates a user, hashes password, sends verification email, sets session cookie.
- `POST /api/auth/login`: validates credentials and sets an HTTP-only session cookie.
- `POST /api/auth/logout`: clears the session cookie.

## Events

- `GET /api/events`: returns stored events when MongoDB is configured, otherwise demo event data.
- `POST /api/events`: creates an event with schedule, venue, capacity, tags, and speaker data.

## Recruitment

- `POST /api/recruitment`: stores application, resume URL, portfolio, LinkedIn, answers, and status.

## Certificates

- `POST /api/certificates`: creates a unique certificate ID and QR verification URL.

## Attendance

- `POST /api/attendance`: records QR attendance scans.

## AI

- `POST /api/ai`: creates a draft for event descriptions, blogs, captions, alt text, email, and FAQ content.
