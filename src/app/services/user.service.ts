import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  // user : {firstName, lastName, email .....}
  signup(user: any, file: File) {
    let formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("role", user.role);
    formData.append("img", file);
    if (user.tel) {
      formData.append("tel", user.tel);
    }
    return this.http.post<{ message: boolean }>
      (this.userUrl + "/signup", formData);
  }

  // user : { email, pwd}
  login(user) {
    return this.http.post<{ message: string, user: any }>(this.userUrl + "/login", user);
  }

  getUserById(id) {
    return this.http.get<{ user: any }>(`${this.userUrl}/${id}`);
  }
}
