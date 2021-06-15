import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  registerUser(user: User) {
    user.id = Math.floor(Math.random() * 1000000000);
    return this.http.post<User>(this.baseUrl, user);
  }

  getUser(userId: string) {
    return this.http.get<User>(this.baseUrl + '/' + userId);
  }
}
