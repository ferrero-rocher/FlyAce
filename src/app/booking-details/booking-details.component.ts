import { Component, OnInit } from '@angular/core';
import { PassengersDetail } from '../card-inputs';
import { Flight } from '../flight';
import { SharedServiceService } from '../shared-service.service';
import {Seat} from '../seat';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})

export class BookingDetailsComponent implements OnInit {

  constructor(private sharedService :SharedServiceService) { }
  selectedFlight: Flight;
  RselectedFlight: Flight;
  tripType = 0;
  totalAmount : number =0;
  economyPrice: number;
  businessPrice : number;
  ReconomyPrice: number;
  RbusinessPrice : number;
  gstTax : number = 0;
  baggageCharge : number =0;
  finalAmount : number =0;
  passengersinfo : PassengersDetail[] = new Array;
  Rpassengersinfo : PassengersDetail[] = new Array;
  selectedSeatClass : string[] = new Array();
  RselectedSeatClass : string[] = new Array();
  seats : Seat[] = new Array();
  Rseats : Seat[] = new Array(); 

  from:string;
  to:string;
  trvDate:Date;
  returnDate:Date;
  ngOnInit(): void {
    this.sharedService.from.subscribe((fr)=>{
      this.from = fr;
    });
    this.sharedService.to.subscribe((to)=>{
      this.to = to;
    });
    this.sharedService.trvdate.subscribe((td)=>{
      this.trvDate = td;
    });
    this.sharedService.returndate.subscribe((td)=>{
      this.returnDate = td;
    });
    this.sharedService.selectedFlight.subscribe((s)=>{
      this.selectedFlight = s;
    });

    this.sharedService.RselectedFlight.subscribe((s)=>{
      this.RselectedFlight = s;
    });

    this.sharedService.tripType.subscribe((fr)=>{
      this.tripType = fr;
    });

    this.sharedService.passengerinfo.subscribe(pas =>{
      this.passengersinfo = pas;
    });

    this.sharedService.seats.subscribe(pas =>{
      this.seats = pas;
    });

    if(this.tripType==1)
    {
      this.sharedService.Rpassengerinfo.subscribe(pas =>{
        this.Rpassengersinfo = pas;
      });
      this.sharedService.RselectedSeatClass.subscribe(pas =>{
        this.RselectedSeatClass  = pas;
      });
      this.sharedService.Rseats.subscribe(pas =>{
        this.Rseats = pas;
      });

      this.RselectedSeatClass.forEach(element => {
        if(element=="business")
        {
          this.totalAmount = this.totalAmount + this.RselectedFlight.Price_B;
          this.RbusinessPrice = this.RselectedFlight.Price_B;
        }
        else{
          this.totalAmount = this.totalAmount + this.RselectedFlight.Price_E;
          this.ReconomyPrice = this.RselectedFlight.Price_E;
        }
      });

    }

    this.sharedService.selectedSeatClass.subscribe(pas =>{
      this.selectedSeatClass  = pas;
    });

    this.selectedSeatClass.forEach(element => {
      if(element=="business")
      {
        this.totalAmount = this.totalAmount + this.selectedFlight.Price_B;
        this.businessPrice = this.selectedFlight.Price_B;
      }
      else{
        this.totalAmount = this.totalAmount + this.selectedFlight.Price_E;
        this.businessPrice = this.selectedFlight.Price_B;
      }
    });

    this.gstTax = this.totalAmount * 0.1;
    this.baggageCharge = this.totalAmount *0.07;
    this.finalAmount = this.totalAmount + this.gstTax + this.baggageCharge;
    this.sharedService.finalAmount.next(this.finalAmount);

  }
  

}
