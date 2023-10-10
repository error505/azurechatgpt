import { AICodePromptGPT } from "@/features/chat/chat-services/ai-code";

export async function POST(req: Request) {
  const body = await req.json();
  let aicodePromptGPT = await AICodePromptGPT(body);
  return aicodePromptGPT;
}
