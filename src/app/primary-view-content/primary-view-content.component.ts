import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message, ThreadMessage } from '../shared/message';
import { MessageService } from '../shared/message.service';
@Component({
  selector: 'app-primary-view-content',
  templateUrl: './primary-view-content.component.html',
  styleUrls: ['./primary-view-content.component.scss']
})
export class PrimaryViewContentComponent implements OnInit {
  @Output() openThreadEvent = new EventEmitter<Message>();

  messages: Message[] = this.ms.messages;

  constructor(
    private ms: MessageService
  ) { }

  ngOnInit(): void {
  }

  openThread(message: Message) {
    this.openThreadEvent.emit(message);
  }

  addMessage(message: Message) {
    this.ms.addMessage(message);
  }

}
