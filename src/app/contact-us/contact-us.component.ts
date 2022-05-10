import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public apiService : ApiService) { }

  queryForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email,Validators.required]),
    location: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    querry: new FormControl('',[Validators.required]),
   
  })

get username() {
    return this.queryForm.get('username');
  } 
  get email() {
    return this.queryForm.get('email');
  } 
  get phone(){
    return this.queryForm.get('phone');
  } 
  get location(){
    return this.queryForm.get('location');
  } 
  get querry(){
    return this.queryForm.get('querry');
  }

  onSubmit() {
    this.apiService.postQuerry(this.queryForm.value).subscribe(res => {
      alert('Submited!')
    });  
  }

  ngOnInit(): void {
  }

}
