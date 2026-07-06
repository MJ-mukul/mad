"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const form = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <form
      className="mt-8 grid gap-4 rounded-lg border border-white/10 bg-card p-5"
      onSubmit={form.handleSubmit(() => toast.success("Message queued for the MAD team."))}
    >
      <input className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white" placeholder="Name" {...form.register("name")} />
      <input className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white" placeholder="Email" {...form.register("email")} />
      <textarea className="min-h-36 rounded-lg border border-white/10 bg-white/5 p-4 text-white" placeholder="Message" {...form.register("message")} />
      <Button variant="violet" type="submit">Send message</Button>
    </form>
  );
}
