import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  userName!:any;
  ngOnInit(): void {
  }

  gotoDashboard(loginForm){
    this.userName=loginForm.UserName;
    console.log(loginForm);
    sessionStorage.setItem("userName", this.userName);
    this.router.navigate(["dashboard"]);
  }
}
