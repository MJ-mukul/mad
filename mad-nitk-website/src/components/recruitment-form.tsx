"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  department: z.string().min(2),
  year: z.string().min(1),
  linkedin: z.string().url().optional().or(z.literal("")),
  portfolio: z.string().url().optional().or(z.literal("")),
  answer: z.string().min(20)
});

type FormValues = z.infer<typeof schema>;

export function RecruitmentForm() {
  const form = useForm<FormValues>({ resolver: zodResolver(schema) });
  return (
    <form
      className="grid gap-4 rounded-lg border border-white/10 bg-card p-5"
      onSubmit={form.handleSubmit(() => toast.success("Application submitted. Track status from the member portal."))}
    >
      {["name", "email", "phone", "department", "year", "linkedin", "portfolio"].map((field) => (
        <input
          key={field}
          className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white"
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          {...form.register(field as keyof FormValues)}
        />
      ))}
      <textarea className="min-h-32 rounded-lg border border-white/10 bg-white/5 p-4 text-white" placeholder="What would you improve about a campus event you attended?" {...form.register("answer")} />
      <Button type="submit" variant="violet">Submit application</Button>
    </form>
  );
}
