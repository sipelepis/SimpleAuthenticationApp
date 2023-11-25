import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, MatInputModule,
    MatFormFieldModule, MatButtonModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})

export class RegisterComponent {
  //* Properties *//

  formBuilder = inject(FormBuilder);
  apiService = inject(ApiService);
  authService = inject(AuthService);
  router = inject(Router);

  //* Form *//
  form: FormGroup = this.formBuilder.group({
    username:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  //* Methods *//

  // isValidated?
  isValidated(): boolean{
    return (this.form.valid) ? true: false;
  }
  // onRegister posts the form data to the API
  onRegister(){
    if(this.isValidated()){
      this.apiService.registerUser(this.form.getRawValue()).subscribe(
        res => {
          console.log(res);
          sessionStorage.setItem('token', res.user.token);
          this.authService.userLoggedIn.set(res.user);
          this.router.navigateByUrl('/home');
        },
        err => console.log(err)
      );
    }
  }
}
