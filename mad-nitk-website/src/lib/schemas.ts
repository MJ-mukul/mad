import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  description: z.string().min(20),
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
  venue: z.string().min(3),
  capacity: z.number().int().positive(),
  tags: z.array(z.string()).default([])
});

export const recruitmentSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  department: z.string().min(2),
  year: z.string().min(1),
  resumeUrl: z.string().url().optional(),
  portfolio: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  answers: z.record(z.string())
});

export const certificateSchema = z.object({
  eventId: z.string(),
  recipient: z.string().min(2),
  memberId: z.string().optional()
});

export const aiSchema = z.object({
  task: z.enum(["event", "blog", "caption", "alt-text", "email", "faq"]),
  prompt: z.string().min(5)
});
