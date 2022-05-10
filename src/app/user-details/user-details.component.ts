import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Profile} from '../profile';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(public apiService : ApiService) { }
profile : Profile = new Profile();
  ngOnInit(): void {
    this.apiService.getProfile(localStorage.getItem('email'))
    .subscribe
     (
     (data:Profile)=>
     { 
       this.profile=data;
       console.log(this.profile);
     }
     );
  }

}
