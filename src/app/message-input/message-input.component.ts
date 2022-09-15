import { Component, OnInit, ViewEncapsulation, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message, ThreadMessage } from '../shared/message';
import { MessageFactory } from '../shared/message-factory';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageInputComponent implements OnInit {

  message: Message = MessageFactory.empty();
  threadMessage: ThreadMessage = MessageFactory.emptyThread();

  @Input() thread: boolean = false;
  @Output() submitMessage = new EventEmitter<Message>();
  @Output() submitThreadMessage = new EventEmitter<ThreadMessage>();
  @ViewChild('messageForm') messageForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (!this.thread) {
      this.submitMessage.emit(this.message);
      this.message = MessageFactory.empty();
    } else {
      this.submitThreadMessage.emit(this.threadMessage);
      this.threadMessage = MessageFactory.emptyThread();
    }

    this.messageForm.reset();
  }
}
