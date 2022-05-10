import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

import {ApiService} from '../api.service';
import {Ticket} from '../ticket';
import { SharedServiceService } from '../shared-service.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  constructor(public apiService : ApiService, private sharedService : SharedServiceService) { }
  email:string;
  Tickets : Ticket[];
  modal: boolean = false;
  ticket : Ticket = new Ticket();
  showModal(t : Ticket)
  {
    this.modal =true;
    this.ticket = t;
  }
  selectedFlight: Flight = new Flight();
  amount = 1500;
  cancelTicket(t : Ticket)
  {
    // this.sharedService.selectedFlight.subscribe((s)=>{
    //   this.selectedFlight = s;
    // });
    // if(t.Class==="business")
    // {
    //   this.amount = this.selectedFlight.Price_B;
    // }
    // else{
    //   this.amount - this.selectedFlight.Price_E;
    // }

    this.apiService.cancelTicket(t.Ticket_id, this.amount).subscribe(data=>{
      alert(data);
    })

    console.log(t, this.amount);
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.apiService.gettickets(this.email)
    .subscribe
     (
     (data:Ticket[])=>
     { 
       this.Tickets=data;
       console.log(data);
     }
     );
  }

}
