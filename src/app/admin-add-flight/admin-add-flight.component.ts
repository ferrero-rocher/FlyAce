import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators ,NgForm,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-admin-add-flight',
  templateUrl: './admin-add-flight.component.html',
  styleUrls: ['./admin-add-flight.component.css']
})
export class AdminAddFlightComponent implements OnInit {

  addflightsForm = new FormGroup({
    plane_name: new FormControl('',[Validators.required]),
    no_seats: new FormControl(20,[Validators.required]),
    source: new FormControl('',[Validators.required]),
    destination: new FormControl('',[Validators.required]),
    dept_time: new FormControl('',[Validators.required]),
    arr_time: new FormControl('',[Validators.required]),
    price_B: new FormControl('',[Validators.required]),
    price_E: new FormControl('',[Validators.required]), 
    day:new FormControl('',[Validators.required]),
    no_weeks: new FormControl(1,[Validators.required])
  }) 

  checkCheckBoxvalue(event:any){
    console.log(event.target.id)
 }

  constructor(public apiservice : ApiService,public router : Router) { }

  ngOnInit(): void {
  }
  get plane_name() {
    return this.addflightsForm.get('plane_name');
  } 
  get no_seats() {
    return this.addflightsForm.get('no_seats');
  } 
  get source() {
    return this.addflightsForm.get('source');
  } 
  get destination() {
    return this.addflightsForm.get('destination');
  } 
  get dept_time() {
    return this.addflightsForm.get('dept_time');
  } 
  get arr_time() {
    return this.addflightsForm.get('arr_time');
  } 
  get price_B() {
    return this.addflightsForm.get('price_B');
  } 
  get price_E() {
    return this.addflightsForm.get('price_E');
  } 
  get no_weeks(){
    return this.addflightsForm.get('price_E');
  } 

  onSubmit() {
    this.apiservice.addFlight(this.addflightsForm.value).subscribe(res =>{
      console.log(res.toString());
      alert("Flight Added!");
      this.router.navigate(['/adminHome']);
    })
    console.log(this.addflightsForm.value); 
  } 
//   checkCheckBoxvalue(event){
//     console.log(event.target.id)
//  }

}
