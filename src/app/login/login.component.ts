import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    // private _snackBar: MatSnackBar
    ) { }

  providers = AuthProvider;

  ngOnInit(): void {
  }

  printUser(event: any) {
    console.log(event);
    // this._snackBar.open(event, 'Close');

    this.router.navigate(['/workspace']);
  }

  printError(event: any) {
    console.log(event);
  }

}
