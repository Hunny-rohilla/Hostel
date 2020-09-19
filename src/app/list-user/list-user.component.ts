import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from './../registrationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private registrationservice:RegistrationserviceService, private router: Router) { 

    
  }

  //Declare variables of user_list function
  userdata:any;
  record:any;

  UserName:any;

  isDelete:any;
  delconfrimation:any;
  
  
  list_user() {
  this.userdata = {};
  this.registrationservice.list_user(this.userdata)
  .subscribe(list => { this.record = list });
  }
  
  delete_user(UserName) {
    this.userdata = {
      "UserName": UserName
    }
    this.record.data = this.record.data.filter(re => re.UserName !== UserName);
    this.registrationservice.delete_user(this.userdata).subscribe();
  
    this.isDelete = true;
    this.delconfrimation = "Data deleted successfully";

  }

  ngOnInit() {
    this.UserName=localStorage.getItem('UserName');
    if(localStorage.getItem('success_login')==null){
         this.router.navigate(['']);
    }
    this.list_user();
  }
}
