import type { ChatMessage } from "./chat-message-interface";

export interface ChatApiService {
  canHandle(message: string): boolean;
  getResponse(message: string): Promise<ChatMessage>;
}