import { Injectable } from '@angular/core';
// import { HttpClinet } fro
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  addMail(email:any){
    console.log(email)
    alert("email send successfully")
    return this.http.post("http://localhost:3000/email",email);
    
  }

  checkOTP(otp:any){
    return this.http.post("http://localhost:3000/otp",otp)
  }
}

