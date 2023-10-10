"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { CreateAiCodeThread } from "../chat-services/aicode-thread-service";

export const AICODE = () => {
  const router = useRouter();


  const startNewAICode = async () => {
    try {
      const newAiCodeThread = await CreateAiCodeThread();
      if (newAiCodeThread) {
        router.push("/aicode/" + newAiCodeThread.id);
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Button
      className="gap-2"
      variant={"outline"}
      size={"sm"}
      onClick={() => startNewAICode()}
    >
      <PlusCircle size={16} /> New AI Code
    </Button>
  );
};
