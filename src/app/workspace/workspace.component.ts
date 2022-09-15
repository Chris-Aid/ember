import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/message';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  message!: Message;
  secondaryView: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSecondaryView() {
    this.secondaryView = true;
  }

  closeSecondaryView() {
    this.secondaryView = false;
  }

  openThread(message: Message) {
    this.openSecondaryView();
    this.message = message;
  }
}
