import { Time } from "@angular/common";

export class Flight {
    Plane_Name : string;
    Travel_Date : Date;
    Source :string;
    Destination : string;
    Arrival_Time :Time;
    Departure_Time :Time;
    Price_B :number;
    Price_E :number;
    Duration : number;
    Day: string;
    RemainingSeats: number;
    Schedule_Id: string;
    selected:boolean = false;
}
