import { Time } from "@angular/common"

export class CardInputs {
    passengersinfo : PassengersDetail[]
    Card_No: Number
    Card_HolderName: string
    Card_Type: string
    Expires: string
    CVV: Number
    email : string
    amount : Number
    TansactionType: string
}

export class PassengersDetail
{
   passenger_name: string 
   seatNo: string 
   document_type : string 
    document_no :string 
    Schedule_Id :string 
    Passenger_type : string 
}

export class viewtickets{
    Arrival_Time: Time
    Departure_Time: Time
    Source: string
    Destination: string
    Ticket_id: string
    Ticket_status: string
    Travel_Date: Date
    passenger_name: string
    Passenger_type : string  
    seatNo: string 
}
