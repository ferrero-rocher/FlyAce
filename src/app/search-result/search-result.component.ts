import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

import {ApiService} from '../api.service';
import { SearchFlight } from '../search-flight';
import {Flight} from '../flight';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  tripType = 0;
  trip:boolean = true;
  from:string;
  to:string;
  trvDate:Date;
  returnDate:Date;
  changeTrip(t:boolean)
  {
    this.trip = t;
  }
  details:boolean = false;
  showDetails()
  {
    this.details = !this.details;
  }

  searchFlight : SearchFlight;
  flights : Flight[] = [];
  returnflights : Flight[] = [];
  selectedFlight: Flight;
  RselectedFlight: Flight;
  selected :boolean = false;
  Rselected :boolean = false;
  totalAmount: number =0;
  selectflight(flight : Flight)
  {
    this.selected = true;
    if(flight.selected)
    {
      // this.flights[this.flights.indexOf(flight)]
    }
  else{
    this.selected =true;
    flight.selected = true;
    this.selectedFlight = flight;
    this.totalAmount = this.totalAmount + this.selectedFlight.Price_E;
  }
  }
  Rselectflight(flight)
  {
    this.Rselected = true;
    if(flight.selected)
    {

    }
    else{
      this.selected =true;
      flight.selected = true;
    this.RselectedFlight = flight;
    this.totalAmount = this.totalAmount + this.RselectedFlight.Price_E;
    }
  }

  constructor(private sharedService :SharedServiceService, public apiService : ApiService) { }
  book()
  {
    this.sharedService.selectedFlight.next(this.selectedFlight);
    this.sharedService.RselectedFlight.next(this.RselectedFlight);
  }
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
    this.sharedService.tripType.subscribe((fr)=>{
      this.tripType = fr;
      console.log(this.from, this.to, this.trvDate, this.returnDate);
    });
    this.apiService.searchFlight(this.from, this.to, this.trvDate).subscribe((data : any)=>{
      this.flights = data;
    }
    )
    if(this.tripType==1)
    {
      this.apiService.searchFlight(this.to, this.from, this.returnDate).subscribe((data : any)=>{
        this.returnflights = data;
      }
      )
    }
  }
  
}
