import { Component, OnInit } from '@angular/core';
// import { EmailData } from './mail-model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  // emaildata = new EmailData('',0)

  User = {
    email: '',
  };

  otp(){
    // console.log(this.emaildata.email)
    this._auth.addMail({"email":this.User.email}).subscribe((data)=>{
      console.log(data)
    })

    localStorage.setItem("email",this.User.email)
    this._router.navigate(['verification'])


  }

}
