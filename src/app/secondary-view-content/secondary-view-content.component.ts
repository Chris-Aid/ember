import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Message, ThreadMessage } from '../shared/message';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-secondary-view-content',
  templateUrl: './secondary-view-content.component.html',
  styleUrls: ['./secondary-view-content.component.scss']
})
export class SecondaryViewContentComponent implements OnInit {

  @Output() closeThreadEvent = new EventEmitter<any>;
  @Input() message!: Message;

  constructor(
    private ms: MessageService
  ) { }

  ngOnInit(): void {
  }

  closeThread() {
    this.closeThreadEvent.emit();
  }

  addThreadMessage(threadMessage: ThreadMessage) {
    this.ms.addThreadMessage(threadMessage, this.message.id);
  }
}
