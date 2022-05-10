import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { PassengersDetail } from '../card-inputs';
import { Flight } from '../flight';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  Passengers : PassengersDetail[] = new Array;
  RPassengers : PassengersDetail[] = new Array;
  selectedFlight: Flight;
  RselectedFlight: Flight;

  PassengerForm = new FormGroup({
    seatNo: new FormControl({value :'',  disabled: true},[Validators.required]),
    passenger_name: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
    Contact: new FormControl('',[Validators.required, Validators.pattern("[789]{1}[0-9]{9}$")]),
    Gender: new FormControl('',[Validators.required]),
    Passenger_type: new FormControl('',[Validators.required]),
    DOB: new FormControl('',[Validators.required]),
    document_type: new FormControl('',[Validators.required]),
    document_no: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]*$")])
   })

  constructor(
    public fb:FormBuilder,
    private router: Router,
    private sharedService : SharedServiceService
    ) { }

    tripType = 0;
    seatNos: string[] = new Array();
    RseatNos: string[] = new Array();
    from:string;
    to:string;

  ngOnInit(): void {

    this.sharedService.tripType.subscribe((fr)=>{
      this.tripType = fr;
    });

    this.sharedService.selectedSeatNos.subscribe((fr)=>{
      this.seatNos = fr;
    });

    if(this.tripType==1)
    {
      this.sharedService.RselectedSeatNos.subscribe((fr)=>{
        this.RseatNos = fr;
      });
    }

    this.sharedService.from.subscribe((fr)=>{
      this.from = fr;
    });
    this.sharedService.to.subscribe((to)=>{
      this.to = to;
    });

    this.sharedService.selectedFlight.subscribe((s)=>{
      this.selectedFlight = s;
    });

    this.sharedService.RselectedFlight.subscribe((s)=>{
      this.RselectedFlight = s;
    });

  }

  get seatNo()
  {
    return this.PassengerForm.get('seatNo');
  }
  get passenger_name()
{
  return this.PassengerForm.get('passenger_name');
}
get Contact()
{
  return this.PassengerForm.get('Contact');

}
get Gender()
{
  return this.PassengerForm.get('Gender');
}
get Passenger_type()
{
  return this.PassengerForm.get('Passenger_type');
}
get DOB()
{
  return this.PassengerForm.get('DOB');
}
get document_type()
{
  return this.PassengerForm.get('document_type');
}
get document_no()
{
  return this.PassengerForm.get('document_no');
}
// onSubmit(){
//   if(this.PassengerForm.valid)
//   {
//     console.log(this.PassengerForm.value);
//     this.router.navigate(['/bookindDetails']);
//   }
//   else
//   {
//     alert("Invalid Entry");
//   }
// } 

onSubmit(s : string, i : number ){
  if(this.PassengerForm.valid)
  {
    this.Passengers.push(this.PassengerForm.value)
    this.Passengers[i].seatNo = s;
    this.Passengers[i].Schedule_Id = this.selectedFlight.Schedule_Id;
    console.log(this.Passengers);
    if(this.Passengers.length === this.seatNos.length)
    {
      this.sharedService.passengerinfo.next(this.Passengers);
      if(this.tripType==0)
    {
      this.router.navigate(['/bookindDetails'])
    }
    }

} 
else
  {
    alert("Invalid Entry");
  }

}

RonSubmit(s : string, i : number ){
  if(this.PassengerForm.valid)
  {
    this.RPassengers.push(this.PassengerForm.value)
    this.RPassengers[i].seatNo = s;
    this.RPassengers[i].Schedule_Id = this.RselectedFlight.Schedule_Id;
    console.log(this.RPassengers);
    if(this.RPassengers.length === this.RseatNos.length)
    {
      this.sharedService.Rpassengerinfo.next(this.RPassengers);
      this.router.navigate(['/bookindDetails']);
    }
} 
else
  {
    alert("Invalid Entry");
  }

}


}