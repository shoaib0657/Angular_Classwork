import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  login(data:any) //post
  {
    console.log("Login Data", data);
    return this.http.post('http://109.106.255.69:2208/student/login', data);
  }

  signup(data:any) //post
  {
    return this.http.post('http://109.106.255.69:2208/student/register', data);
  }
}
