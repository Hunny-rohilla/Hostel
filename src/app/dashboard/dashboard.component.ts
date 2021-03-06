import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Declare variable of ng OnInit
  UserName: any;

  constructor(private router: Router) { }


  ngOnInit() {

    this.UserName = localStorage.getItem("UserName");
    if (localStorage.getItem('success_login') == null) {
      this.router.navigate(['']);
    }

  }
}