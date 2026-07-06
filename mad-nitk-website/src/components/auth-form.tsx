"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function AuthForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <Card className="mt-10 max-w-xl">
      <div className="mb-5 flex gap-2">
        <Button type="button" variant={mode === "login" ? "primary" : "ghost"} onClick={() => setMode("login")}>Login</Button>
        <Button type="button" variant={mode === "signup" ? "primary" : "ghost"} onClick={() => setMode("signup")}>Signup</Button>
      </div>
      <form
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          toast.success(`${mode === "login" ? "Login" : "Signup"} request sent.`);
        }}
      >
        {mode === "signup" ? <input className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white" placeholder="Name" /> : null}
        <input className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white" placeholder="Email" type="email" />
        <input className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white" placeholder="Password" type="password" />
        <label className="flex items-center gap-2 text-sm text-zinc-400">
          <input type="checkbox" className="h-4 w-4 accent-primary" />
          Remember me
        </label>
        <Button variant="violet" type="submit">{mode === "login" ? "Login" : "Create account"}</Button>
        <Button variant="ghost" type="button">Continue with Google</Button>
      </form>
    </Card>
  );
}
