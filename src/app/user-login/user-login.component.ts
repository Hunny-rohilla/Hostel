import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from './../registrationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private registrationservice:RegistrationserviceService, private router: Router) { }

  //Variable Declaring of JSON Data
  logindata:any;
  UserName:any;
  Password:any;

  //Variable Declation of the if else condition
  errorLogin:any;
  confirmation:any;


  //Variable declaration of the subscribe funtion
  response:any;

  login(){

    if (this.UserName == null || this.Password == null){
      this.errorLogin = true;
      this.confirmation = "Please Enter UserName and Password"
    } else

    {
    this.logindata ={
      "UserName":this.UserName,
      "Password":this.Password
    }
    console.log(this.logindata);

    this.registrationservice.checklogin(this.logindata)
        .subscribe(login_data => {
          this.response = login_data;
          console.log(this.response);
          if (this.response['status'] == false) {
            this.errorLogin = true;
            this.confirmation = this.response['data'];
          } else {
            this.errorLogin = false;
            localStorage.setItem('success_login', "true");
            localStorage.setItem('UserName', this.UserName);
            this.router.navigate(['dashboard']);
          }
        });
  
  }
}

  ngOnInit() {
  }

}