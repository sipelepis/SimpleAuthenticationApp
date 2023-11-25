import { Injectable, signal } from '@angular/core';
import { UserInterface, UserResponseInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // userLoggedIn is a signal that emits the user data
  userLoggedIn = signal<UserResponseInterface | undefined  | null>(undefined);
  constructor() { }
  // isAuth checks if the user is logged in
  isAuth(): boolean{
    return this.userLoggedIn() ? true : false;
  }
}
