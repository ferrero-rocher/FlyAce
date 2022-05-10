import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    departDate: new FormControl('', Validators.required),
    returnDate: new FormControl({value: '', disabled: true}, Validators.required),
    passengers: new FormControl(1,[Validators.required, Validators.min(1)]),
    tripType: new  FormControl(0)
  });
  //to enable/disable returnDate based on checkbox
  returnDateEnable(){
    this.bookingForm.get('returnDate').enable() ;
  }
  returnDateDisEnable(){
    this.bookingForm.get('returnDate').disable() ;
  }
  //get Methods
  get from()
  {
    return this.bookingForm.get('from');
  }
  get to()
  {
    return this.bookingForm.get('to');
  }
  get departDate()
  {
    return this.bookingForm.get('departDate');
  }
  get returnDate()
  {
    return this.bookingForm.get('returnDate');
  }
  get passengers()
  {
    return this.bookingForm.get('passengers');
  }
  get tripType()
  {
    return this.bookingForm.get('tripType');
  }
  //Form Submit method
  onSubmit() {
    if(this.bookingForm.valid)
    {
      console.log(this.bookingForm.value);
      this.sharedService.from.next(this.from.value);
      this.sharedService.to.next(this.to.value);
      this.sharedService.trvdate.next(this.departDate.value);
      this.sharedService.returndate.next(this.returnDate.value);
      this.sharedService.tripType.next(this.tripType.value);
      this.sharedService.noPassengers.next(this.passengers.value);
      alert("Searching");
      this.router.navigate(['/Search']);
    }
    else
    {
      alert("Invalid Entry");
    }
  }
//NewsLetter
  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  EmailSubmit()
      {
        this.apiService.postEmail(this.emailForm.value).subscribe(res => {
          alert('Submited!')
        });  
      }

  constructor(private router: Router, private sharedService : SharedServiceService, public apiService : ApiService) { }

  ngOnInit(): void {
  }

}
