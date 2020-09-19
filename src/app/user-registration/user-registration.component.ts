import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from './../registrationservice.service';
import { StaticInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private registrationservice:RegistrationserviceService) { }
  //Variables for the JSON data
  registrationdata:any;
  FirstName:string;
  Middlename:string;
  LastName:string;
  gender:string;
  HouseNo:string;
  Street:string;
  City:string;
  District:string;
  State:string;
  Pincode:any;
  PhoneNo:any;
  EmailId:string;
  DOB:string;
  BloodGroup:string;
  FatherName:string;
  MotherName:string;
  FatherEmailID:string;
  MotherEmailID:string;
  FatherPhoneNo:any;
  MotherPhoneNo:any;
  InstituteName:string;
  CourseName:string;
  Contactno:any;
  GuardianName:string;
  GuardianAddress:string;
  GuardianPhoneNo:string;
  UserName:string;
  Password:any;
  check:any;
  submit:any;
 
  
  //variable of service of service function
  response:any;
  conformation:any;

  registration()
  {
    this.registrationdata={
      "FirstName":this.FirstName,
      "Middlename":this.Middlename,
      "LastName":this.LastName,
      "gender":this.gender,
      "HouseNo":this.HouseNo,
      "Street":this.Street,
      "City":this.City,
      "District":this.District,
      "State":this.State,
      "Pincode":this.Pincode,
      "PhoneNo":this.PhoneNo,
      "EmailId":this.EmailId,
      "DOB":this.DOB,
      "BloodGroup":this.BloodGroup,
      "FatherName":this.FatherName,
      "MotherName":this.MotherName,
      "FatherEmailID":this.FatherEmailID,
      "MotherEmailID":this.MotherEmailID,
      "FatherPhoneNo":this.FatherPhoneNo,
      "MotherPhoneNo":this.MotherPhoneNo,
      "InstituteName":this.InstituteName,
      "CourseName":this.CourseName,
      "Contactno":this.Contactno,
      "GuardianName":this.GuardianName,
      "GuardianAddress":this.GuardianAddress,
      "GuardianPhoneNo":this.GuardianPhoneNo,
      "UserName":this.UserName,
      "Password":this.Password,
      "check":this.check
    }

    this.registrationservice.insertData(this.registrationdata)
    .subscribe(registration => {
    this.response = registration;
    this.conformation = "Student data inserted successfully";
    this.FirstName="";
    this.Middlename="";
    this.LastName="";
    this.gender="";
    this.HouseNo="";
    this.Street="";
    this.City="";
    this.District="";
    this.State="";
    this.Pincode="";
    this.PhoneNo="";
    this.EmailId="";
    this.DOB="";
    this.BloodGroup="";
    this.FatherName="";
    this.MotherName="";
    this.FatherEmailID="";
    this.MotherEmailID="";
    this.FatherPhoneNo="";
    this.MotherPhoneNo="";
    this.InstituteName="";
    this.CourseName="";
    this.Contactno="";
    this.GuardianName="";
    this.GuardianAddress="";
    this.GuardianPhoneNo="";
    this.UserName="";
    this.Password="";
    this.check="";
    });



  }


  ngOnInit() {
  }

}

