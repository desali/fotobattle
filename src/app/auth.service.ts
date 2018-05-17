import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LoginResponse {
  success: boolean
}

interface RegistrationResponse {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username, password) {
    return this.http.post<LoginResponse>('http://192.168.100.9:3000/api/login', {
      username: username,
      password: password
    })
  }

  register(fullname, username, email, password, city, birthday, gender) {
    return this.http.post<RegistrationResponse>('http://192.168.100.9:3000/api/register', {
      username: username,
      fullname: fullname,
      email: email,
      password: password,
      city: city,
      birthday: birthday,
      gender: gender
    })
  }
}
