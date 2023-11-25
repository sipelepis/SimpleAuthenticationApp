import { AuthService } from './../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, MatInputModule,
    MatFormFieldModule, MatButtonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  //* Properties *//
  formBuilder = inject(FormBuilder);
  apiService = inject(ApiService);
  authService = inject(AuthService);
  router = inject(Router);
  //* Form *//
  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  //* Methods *//
  //
  isValidate(){
    return (this.form.valid) ? true : false;
  }
  onLogin(){
    if(this.isValidate()){
      this.apiService.loginUser(this.form.getRawValue()).subscribe(
        (res) => {
          sessionStorage.setItem('token', res.user.token);
          this.authService.userLoggedIn.set(res.user);
          console.log(this.authService.userLoggedIn());
          this.router.navigateByUrl('/home');
        },(err) => console.log(err)
      )
    }
  }
}
