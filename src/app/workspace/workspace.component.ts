import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  opened: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  openSecondaryView() {
    this.opened = true;
  }

  closeSecondaryView() {
    this.opened = false;
  }

}
