import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {CardInputs} from '../card-inputs';
import {SharedServiceService} from '../shared-service.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  passenger: any;
  CardInfo : CardInputs;
  PaymentForm = new FormGroup({
    Card_No: new FormControl('',[Validators.required]),
    Card_HolderName: new FormControl('',[Validators.required]),
    Card_Type: new FormControl('',[Validators.required]),
    CVV: new FormControl('',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]),
    Expires: new FormControl('',[Validators.required]),
  });
    
    constructor(
      public fb:FormBuilder,
      private router: Router,
      public UserApiService:ApiService,
      public sharedService:SharedServiceService
      ) { }
      tripType = 0;
      finalAmount : number =0;
  ngOnInit(): void {
    this.sharedService.passengerinfo.subscribe(resu=>{
      this.passenger = resu;
      console.log(this.passenger);
    });
    this.sharedService.tripType.subscribe((fr)=>{
      this.tripType = fr;
    });
    this.sharedService.finalAmount.subscribe((fr)=>{
      this.finalAmount = fr;
    });
  }

  onSubmit(){
    if(this.PaymentForm.valid)
 {
   this.CardInfo=this.PaymentForm.value;
   this.CardInfo.TansactionType="Booking";   
   this.CardInfo.amount=this.finalAmount;
   this.CardInfo.email= localStorage.getItem('email');
   this.sharedService.passengerinfo.subscribe(pas =>{
     this.CardInfo.passengersinfo = pas;
   });



        if(this.tripType==1)
        {
          
          this.sharedService.Rpassengerinfo.subscribe(pas =>{
            this.CardInfo.passengersinfo =  this.CardInfo.passengersinfo.concat(pas);
            // console.log("hi");
            console.log(this.CardInfo.passengersinfo);
          });
          // this.UserApiService.passengerandpayment(this.CardInfo).subscribe(res =>{
          //   console.log(this.CardInfo);
          //         alert(res); 
          //         this.router.navigateByUrl('tickets'); }) ; 
        }

        this.UserApiService.passengerandpayment(this.CardInfo).subscribe(res =>{
          console.log(this.CardInfo);
                alert(res); 
                this.router.navigateByUrl('tickets'); }) ; 


  }
        else{alert("Invalid")}

      }

        get Card_No() {
          return this.PaymentForm.get('Card_No');
        } 
        get Card_HolderName() {
          return this.PaymentForm.get('Card_HolderName');
        } 
        get Card_Type() {
          return this.PaymentForm.get('Card_Type');
        } 
        get Expires() {
          return this.PaymentForm.get('Expire');
        } 
        get CVV() {
          return this.PaymentForm.get('CVV');
        } 
      }


























//   PaymentForm = new FormGroup({
//     CardType: new FormControl('',[Validators.required]),
//     OwnerName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
//     CVV: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{4}$")]),
//     cardNumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{12}$")]),
//     expirationMonth: new FormControl('',[Validators.required]),
//     expirationYear: new FormControl('',[Validators.required]),
//    })

//   constructor(
//     public fb:FormBuilder,
//     private router: Router
//     ) { }

//   ngOnInit(): void {
//   }
//   onSubmit(){
//     if(this.PaymentForm.valid)
//     {
//       console.log(this.PaymentForm.value);
//       alert("Booked");
//       this.router.navigate(['/']);
//     }
//     else
//     {
//       alert("Invalid Entry");
//     }
//   } 
//   get CardType()
//   {
//     return this.PaymentForm.get('CardType');
//   }
//   get OwnerName()
//   {
//     return this.PaymentForm.get('OwnerName');
//   }
//   get CVV()
//   {
//     return this.PaymentForm.get('CVV');
//   }
//   get cardNumber()
//   {
//     return this.PaymentForm.get('cardNumber');
//   }
//   get expirationMonth()
//   {
//     return this.PaymentForm.get('expirationMonth');
//   }
//   get expirationYear()
//   {
//     return this.PaymentForm.get('expirationYear');
//   }
// }
