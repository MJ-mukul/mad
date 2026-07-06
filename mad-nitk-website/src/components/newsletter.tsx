"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        toast.success("You are on the MAD update list.");
        setEmail("");
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">Email</label>
      <input
        id="newsletter-email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        type="email"
        placeholder="you@nitkkr.ac.in"
        className="h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none ring-cyan/40 placeholder:text-zinc-500 focus:ring-2"
      />
      <Button type="submit" variant="violet">Subscribe</Button>
    </form>
  );
}
