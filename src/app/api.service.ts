import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import {FlightDetails} from './flight-details';
import {Schedule} from './schedule';
import { Flight } from './flight';
import {Registers} from './registers';
import {Logins} from './registers';
import {Ticket} from './ticket';
import {Seat} from './seat';
import {CardInputs} from './card-inputs';
import {Profile} from './profile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiServer = "http://localhost:51141//api";// /Admin
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  addFlight(details): Observable<FlightDetails>{
    return this.httpClient.post<FlightDetails>(this.apiServer + '/Admin/' ,JSON.stringify(details), this.httpOptions)
  }

  viewSchedule(): Observable<Schedule[]>{
    return this.httpClient.get<Schedule[]>(this.apiServer + '/Admin/')
  }

  deleteSchedule(id) : Observable<Schedule[]>{
    return this.httpClient.put<Schedule[]>(this.apiServer + '/Admin?scheduleId=' + id , this.httpOptions)
  }

  searchFlight(from, to, trvDate) : Observable<Flight[]>{
    return this.httpClient.get<Flight[]>(this.apiServer + '/Search?from=' +from+ '&to=' +to+ '&trvDate=' +trvDate)
  }

register(registers): Observable<Registers> {
    return this.httpClient.post<Registers>(this.apiServer + '/register/', JSON.stringify(registers), this.httpOptions)
}  
 
loginuser(Loginuser): Observable<any> {
  return this.httpClient.post<any>(this.apiServer + '/Login/', JSON.stringify(Loginuser), this.httpOptions)
}

gettickets(email):Observable<Ticket[]>{
  //let param1=new HttpParams().set('email',"jeffb@gmail.com");
  return this.httpClient.get<Ticket[]>(this.apiServer + '/Tickets?email='+ email)
}

getSeats(scheduleId):Observable<Array<Seat[]>>{
  return this.httpClient.get<Array<Seat[]>>(this.apiServer + '/Search?scheduleId=' + scheduleId)
}

passengerandpayment(card): Observable<CardInputs>{
  return this.httpClient.post<CardInputs>(this.apiServer + '/Payment/'  , JSON.stringify(card)  ,this.httpOptions)
}

cancelTicket(id, amount) : Observable<any>{
  return this.httpClient.get<any>(this.apiServer + '/Payment?TicketId=' + id+'&refundamount='+amount)
}

  getProfile(email): Observable<Profile> {
      return this.httpClient.get<Profile>(this.apiServer + '/Profile?email='+ email)
    }

    postEmail(emails): Observable<any> {
      return this.httpClient.post<any>(this.apiServer + '/Subscription/', JSON.stringify(emails), this.httpOptions)  
  }

  postQuerry(querry): Observable<any> {
    return this.httpClient.post<any>(this.apiServer + '/profile/', JSON.stringify(querry), this.httpOptions)
  }

}