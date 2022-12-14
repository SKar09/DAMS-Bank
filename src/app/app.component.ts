import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'DAMS-Bank';
// }
export class AppComponent implements OnInit {
  title = 'DAMS-Bank';
  constructor(private router: Router) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  gotoHome(){
      this.router.navigate(['/homePage']);  // define your component where you want to go
  }

}