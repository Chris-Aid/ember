import { Message, ThreadMessage } from "./message";

export class MessageFactory {

  static empty(): Message {
    return {
      id: '100',
      channel: '',
      author: '',
      message: '',
      threadMessages: []
    }
  }

  static emptyThread(): ThreadMessage {
    return {
      id: '101',
      channel: '',
      author: '',
      message: ''
    }
  }
}
