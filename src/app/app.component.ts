import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlyaceAirline';
  loggedin()
  { 
    //this.UserName=localStorage.getItem("UserName");
    return localStorage.getItem("UserName");
  } 
}
