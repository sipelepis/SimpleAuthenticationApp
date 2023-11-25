import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { UserInterface, UserLoginInterface, UserResponseInterface } from '../interfaces/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);
  constructor() { }
  // get
  getUser(){
    return this.http.get(`${environment.apiUrl}/api/user`);
  }
  // Registration
  registerUser(data: UserInterface): Observable<{user: UserResponseInterface}>{
    return this.http.post<{user: UserResponseInterface}>(`${environment.apiUrl}/api/users`, {user: data});
  }
  // Login
  loginUser(data: UserLoginInterface): Observable<{user: UserResponseInterface}>{
    return this.http.post<{user: UserResponseInterface}>(`${environment.apiUrl}/api/users/login`, {user: data});
  }
}
