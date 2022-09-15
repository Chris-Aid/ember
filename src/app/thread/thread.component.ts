import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../shared/message';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  @Input() message!: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
