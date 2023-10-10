"use server";
import "server-only";

import { userHashedId, userSession } from "@/features/auth/helpers";
import { SqlQuerySpec } from "@azure/cosmos";
import { initDBContainer } from "../../common/cosmos";
import { AICODE_THREAD_ATTRIBUTE, AICODEThreadModel } from "./models";
import { nanoid } from "nanoid";

export const CreateAICODEThread = async () => {
  const modelToSave: AICODEThreadModel = {
    name: "new qa",
    useName: (await userSession())!.name,
    userId: await userHashedId(),
    createdAt: new Date(),
    isDeleted: false,
    chatType: "simple",
    model: "gpt-3.5",
    conversationStyle: "precise",
    type: AICODE_THREAD_ATTRIBUTE,
  };

  const container = await initDBContainer();
  const response = await container.items.create<AICODEThreadModel>(modelToSave);
  return response.resource;
};

export const FindAICODEThreadByID = async (id: string) => {
  const container = await initDBContainer();

  const querySpec: SqlQuerySpec = {
    query:
      "SELECT * FROM root r WHERE r.type=@type AND r.userId=@userId AND r.id=@id AND r.isDeleted=@isDeleted",
    parameters: [
      {
        name: "@type",
        value: AICODE_THREAD_ATTRIBUTE,
      },
      {
        name: "@userId",
        value: await userHashedId(),
      },
      {
        name: "@id",
        value: id,
      },
      {
        name: "@isDeleted",
        value: false,
      },
    ],
  };

  const { resources } = await container.items
    .query<AICODEThreadModel>(querySpec)
    .fetchAll();

  return resources;
};
export const CreateAiCodeThread = async () => {
  const modelToSave: AICODEThreadModel = {
    name: "new chat",
    useName: (await userSession())!.name,
    userId: await userHashedId(),
    id: nanoid(),
    createdAt: new Date(),
    isDeleted: false,
    chatType: "simple",
    model: "gpt-3.5",
    conversationStyle: "precise",
    type: AICODE_THREAD_ATTRIBUTE,
  };

  const container = await initDBContainer();
  const response = await container.items.create<AICODEThreadModel>(modelToSave);
  return response.resource;
};
