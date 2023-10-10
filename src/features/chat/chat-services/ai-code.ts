import { AICode } from "@/features/qa/qa-simple/ai-code";
import { QAPromptGPTProps } from "./models";

export const AICodePromptGPT = async (props: QAPromptGPTProps) => {
  let aiCode = await AICode(props);
  return aiCode;
};
