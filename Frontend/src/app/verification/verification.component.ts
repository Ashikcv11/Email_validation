import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private _auth:AuthService,private _route:Router) { }

  ngOnInit(): void {
  }

  User = {
    otp: '',
  };

  Verify(){
    this._auth.checkOTP({email:localStorage.getItem("email"),otp:this.User.otp}).subscribe((data)=>{
      if(data != null){
        alert("Sign up Successfully")
        this._route.navigate(['welcome'])
      }
      else{
        alert("Failed")
      }
      
    })


  }

}
