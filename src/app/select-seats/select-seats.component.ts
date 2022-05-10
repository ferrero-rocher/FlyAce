import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Flight } from '../flight';
import { SharedServiceService } from '../shared-service.service';
import {Seat} from '../seat';

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.css']
})
export class SelectSeatsComponent implements OnInit {
    rowSeats : Array<Seat[]>;

    // rowSeats: Array<Seat[]> =[  
    //   [
    //     {row:1, letter : 'A', booked : false, check : false},
    //     {row:1, letter : 'B', booked : false, check : false},
    //     {row:1, letter : 'C', booked : false, check : false},
    //     {row:1, letter : 'D', booked : false, check : false},
    //   ],
    //   [
    //     {row:2, letter : 'A', booked : false, check : false},
    //     {row:2, letter : 'B', booked : false, check : false},
    //     {row:2, letter : 'C', booked : true, check : false},
    //     {row:2, letter : 'D', booked : false, check : false},
    //   ],
    //   [
    //     {row:3, letter : 'A', booked : true, check : false},
    //     {row:3, letter : 'B', booked : false, check : false},
    //     {row:3, letter : 'C', booked : false, check : false},
    //     {row:3, letter : 'D', booked : false, check : false},
    //   ],
    //   [
    //     {row:4, letter : 'A', booked : false, check : false},
    //     {row:4, letter : 'B', booked : false, check : false},
    //     {row:4, letter : 'C', booked : false, check : false},
    //     {row:4, letter : 'D', booked : true, check : false},
    //   ]
    // ]  
  selectedSeats:string[] = new Array();
  selectedSeatsClass:string[] = new Array();
  maxSeats:number;
  pickedSeats:number = 0;
  from:string;
  to:string;
  seats : Seat[] = new Array();
    pickSeat(seat:Seat)
    {
      if(seat.check)
      {
        this.selectedSeats.splice(this.selectedSeats.indexOf((seat.row+seat.letter)), 1);
        this.selectedSeatsClass.splice(this.selectedSeatsClass.indexOf(seat.seatClass) ,1);
        seat.check=false;
        this.seats.splice(this.seats.indexOf((seat)), 1);
        this.pickedSeats--;
      }
      else if(!seat.check && this.maxSeats> this.pickedSeats && seat.isAvailable)
      {
        this.selectedSeats.push(seat.row + seat.letter);
        this.selectedSeatsClass.push(seat.seatClass);
        seat.check=true;
        this.seats.push(seat);
        this.pickedSeats++;
      }
    }

    //Main Proceed
    proceedToSeats()
    {
      if(this.pickedSeats===this.maxSeats && this.RpickedSeats===this.RmaxSeats )
      {
        console.log(this.selectedSeats);
        this.sharedService.selectedSeatNos.next(this.selectedSeats);
        this.sharedService.selectedSeatClass.next(this.selectedSeatsClass);
        this.sharedService.seats.next(this.seats);
        this.sharedService.RselectedSeatNos.next(this.RselectedSeats);
        this.sharedService.RselectedSeatClass.next(this.RselectedSeatsClass);
        this.sharedService.Rseats.next(this.Rseats);
        this.router.navigate(['/passengerDetails']);
      }
      else
      {
        alert("Please select all " +this.maxSeats + " seats")
      }
    }
  constructor(private router: Router, private sharedService : SharedServiceService, public apiService: ApiService) { } 
    selectedFlight: Flight;
    RselectedFlight: Flight;
    tripType = 0;

    // Return Flight
    RrowSeats : Array<Seat[]>;
    RselectedSeats:string[] = new Array();
    RselectedSeatsClass:string[] = new Array();
    RmaxSeats:number =0;
    RpickedSeats:number = 0;
    Rseats: Seat[] = new Array();
    RpickSeat(seat:Seat)
    {
      if(seat.check)
      {
        this.RselectedSeats.splice(this.RselectedSeats.indexOf((seat.row+seat.letter)), 1);
        this.RselectedSeatsClass.splice(this.RselectedSeatsClass.indexOf(seat.seatClass) ,1);
        seat.check=false;
        this.Rseats.splice(this.Rseats.indexOf((seat)), 1);
        this.RpickedSeats--;
      }
      else if(!seat.check && this.maxSeats> this.RpickedSeats && seat.isAvailable)
      {
        this.RselectedSeats.push(seat.row + seat.letter);
        this.RselectedSeatsClass.push(seat.seatClass);
        seat.check=true;
        this.Rseats.push(seat);
        this.RpickedSeats++;
      }
    }
    // Return Flight

  ngOnInit(): void {

    this.sharedService.selectedFlight.subscribe((s)=>{
      this.selectedFlight = s;
    });

    this.sharedService.RselectedFlight.subscribe((s)=>{
      this.RselectedFlight = s;
    });

    this.sharedService.noPassengers.subscribe((n)=>{
      this.maxSeats = n;
    })

    this.sharedService.tripType.subscribe((fr)=>{
      this.tripType = fr;
    });

    this.sharedService.from.subscribe((fr)=>{
      this.from = fr;
    });
    this.sharedService.to.subscribe((to)=>{
      this.to = to;
    });

    this.apiService.getSeats(this.selectedFlight.Schedule_Id).subscribe((data : any)=>{
      console.log(data);
      this.rowSeats = data;
    }
    );
    if(this.tripType==1)
    {
      this.apiService.getSeats(this.RselectedFlight.Schedule_Id).subscribe((data : any)=>{
        console.log(data);
        this.RrowSeats = data;
      }
      );
      this.RmaxSeats = this.maxSeats;
    }

  }

}
// export class Seat {  
//   row : number;  
//   letter : string;  
//   booked : boolean;  
//   check : boolean;  
// } 
