import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../auth.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmedPassword = control.get('confirmedPassword')?.value;

    if (password && confirmedPassword && password !== confirmedPassword) {
      return {
        passwordsDontMatch: true
      }
    }

    return null
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmedPassword: new FormControl('', Validators.required),
  }, { validators: passwordMatchValidator() })

  constructor(
    private auth: AuthService,
    public router: Router,
    public toast: HotToastService
  ) { }


  submit() {
    if (!this.signUpForm.valid) {
      return;
    }

    const { name, email, password, } = this.signUpForm.value;
    this.auth.signUp(name, email, password,).pipe(
      this.toast.observe({
        success: 'Concrats! You are signed Up',
        loading: 'Signing in ...',
        error: ({ message }) => `${message}`,
      })
    ).subscribe(() => {
      console.log('land')
      this.router.navigate(['/landing'])
    });
  }

  ngOnInit(): void {
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmedPassword() {
    return this.signUpForm.get('confirmedPassword');
  }

}
