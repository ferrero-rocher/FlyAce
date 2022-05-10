import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from './flight';
import {Seat} from './seat';
import {PassengersDetail} from './card-inputs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  from : BehaviorSubject<string> = new BehaviorSubject("");
  to : BehaviorSubject<string> = new BehaviorSubject("");
  trvdate : BehaviorSubject<Date> = new BehaviorSubject(null);
  returndate : BehaviorSubject<Date> = new BehaviorSubject(null);
  tripType : BehaviorSubject<number> = new BehaviorSubject(0);
  selectedFlight : BehaviorSubject<Flight> = new BehaviorSubject(null);
  RselectedFlight : BehaviorSubject<Flight> = new BehaviorSubject(null);
  noPassengers : BehaviorSubject<number> = new BehaviorSubject(0);
  selectedSeatNos : BehaviorSubject<string[]> = new BehaviorSubject(null);
  RselectedSeatNos : BehaviorSubject<string[]> = new BehaviorSubject(null);
  RselectedSeatClass : BehaviorSubject<string[]> = new BehaviorSubject(null);
  selectedSeatClass : BehaviorSubject<string[]> = new BehaviorSubject(null);
  passengerinfo : BehaviorSubject<PassengersDetail[]> = new BehaviorSubject(null);
  Rpassengerinfo : BehaviorSubject<PassengersDetail[]> = new BehaviorSubject(null);
  seats : BehaviorSubject<Seat[]> = new BehaviorSubject(null);
  Rseats : BehaviorSubject<Seat[]> = new BehaviorSubject(null);
  finalAmount : BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }
}
