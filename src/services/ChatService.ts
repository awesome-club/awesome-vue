export enum Type {
  In = "in",
  Out = "out",
}

export interface MessageDto {
  id: number;
  data: string;
  type: Type;
}

export interface ChatDto {
  key: string;
  title: string;
  messages: MessageDto[];
}

export const ChatService = {
  getChatList: function (): Promise<ChatDto[]> {
    return Promise.resolve(Values);
  },
  getChatDetails: function (key: string): Promise<ChatDto | undefined> {
    const found = Values.find((it) => it.key === key);
    return Promise.resolve(found);
  },
};

export function uniqueId() {
  return new Date().getTime();
}

const Values = [
  {
    key: "@peter",
    title: "Chat with Peter",
    messages: [
      { id: 1, data: "Hi!", type: Type.In },
      { id: 2, data: "How are you?", type: Type.In },
    ],
  },
  {
    key: "@olivia",
    title: "Chat with Olivia",
    messages: [
      { id: 3, data: "Hello!", type: Type.Out },
      { id: 4, data: "👋", type: Type.Out },
    ],
  },
];
