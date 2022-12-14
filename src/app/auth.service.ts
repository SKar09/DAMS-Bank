import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName!:any;
  constructor(private router:Router) { }
  isUserLoggedIn(){
    this.userName = sessionStorage.getItem("userName");
    if(this.userName === "adpandey"){
      return true;
    }
    else if(this.userName === "adminuser"){
      this.router.navigate(['admin']);
      return true;
    }
    else{
      return false;
    }
  }
}
