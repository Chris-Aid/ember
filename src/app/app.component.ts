import { Component, OnInit } from '@angular/core';
import { AuthProcessService } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthProcessService) {

  }

  ngOnInit(): void {
    console.log(this.auth)
  }

  title = 'ember';
}
