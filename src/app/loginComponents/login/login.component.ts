import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private auth: AuthService,
    public router: Router,
    public toast: HotToastService
  ) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password, } = this.loginForm.value;
    this.auth.login(email, password).pipe(
      this.toast.observe({
        success: 'logged in successfully',
        loading: 'Logged in ...',
        error: 'There was an error',
      })
    ).subscribe(() => {
      console.log('land')
      this.router.navigate(['/landing'])
    });
  }
}
