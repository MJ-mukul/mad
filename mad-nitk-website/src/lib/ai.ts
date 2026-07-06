export type AiTask = "event" | "blog" | "caption" | "alt-text" | "email" | "faq";

export async function generateAiDraft(task: AiTask, prompt: string) {
  if (!process.env.OPENAI_API_KEY) {
    return {
      title: "AI draft unavailable",
      body: `Set OPENAI_API_KEY to generate ${task} content. Prompt received: ${prompt}`
    };
  }

  return {
    title: "AI draft queued",
    body: "Connect the Responses API here for production generation with moderation and audit logging."
  };
}
