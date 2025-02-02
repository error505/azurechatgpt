import { userHashedId } from "@/features/auth/helpers";
import { LangChainStream, StreamingTextResponse } from "ai";
import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { QAPromptGPTProps } from "@/features/chat/chat-services/models";
import { transformConversationStyleToTemperature } from "@/features/chat/chat-services/utils";

export const AICode = async (props: QAPromptGPTProps) => {
  const { prompt, model, chatType, conversationStyle, task, language } = props;

  const { stream, handlers } = LangChainStream();

  const userId = await userHashedId();

  const llm = new ChatOpenAI({
    temperature: transformConversationStyleToTemperature(conversationStyle),
    streaming: true,
  });

  let codeExplanationSystemMessage = `- You are an intelligent software developer. \
  - You will be provided with with that task which you should write in the ${language}, and you will respond by creating the what was asked from you like a code in the ${language}. \
  - If the prompt is not suted to be created in code in the ${language}, respond that your task is only to create source code in that ${language}.`;

  let systemMessage = codeExplanationSystemMessage;

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(systemMessage),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
  ]);

  const chain = new LLMChain({
    prompt: chatPrompt,
    llm: llm,
  });

  chain.call({ input: prompt }, [handlers]);

  return new StreamingTextResponse(stream);
};
