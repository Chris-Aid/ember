export interface Message {
  id: string;
  channel: string;
  author: string;
  message: string;
  threadMessages: ThreadMessage[];
}

export interface ThreadMessage {
  id: string;
  channel: string;
  author: string;
  message: string;
}
