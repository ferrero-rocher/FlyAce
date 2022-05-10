import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {ApiService} from '../api.service';
import { Schedule } from '../schedule';
@Component({
  selector: 'app-admin-view-schedule',
  templateUrl: './admin-view-schedule.component.html',
  styleUrls: ['./admin-view-schedule.component.css']
})
export class AdminViewScheduleComponent implements OnInit {
  @ViewChild('closebutton') closebutton;

  constructor(public apiService : ApiService) { }
  schedule:Schedule;
  schedules : Schedule[] = [];
  modal: boolean = false;
  confirmDeleteSchedule(s : Schedule)
  {
    if(s.Seats_Booked>0)
    {
      alert("Cannot delete a flight with booked Seats");
    }
    else{
    this.schedule = s;
    this.modal =true;
    }
  }

  deleteSchedule(id : string)
  {
    this.apiService.deleteSchedule(id).subscribe((data : Schedule[])=>{
      this.schedules = data;
      // alert("Deleted!");
      // window.location.reload();
    })
  }
  ngOnInit(): void {
    this.apiService.viewSchedule().subscribe((data : Schedule[])=>{
      this.schedules = data;
    }
    )
  }

}
