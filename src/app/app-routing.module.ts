import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminAddFlightComponent } from './admin-add-flight/admin-add-flight.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewScheduleComponent } from './admin-view-schedule/admin-view-schedule.component';
import { AuthenticationGuard } from './authentication.guard';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingComponent } from './booking/booking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DealsComponent } from './deals/deals.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { YourTicketsComponent } from './your-tickets/your-tickets.component';


const routes: Routes = [
  { path:"", component: BookingComponent},
  { path: 'menu', component: MenuComponent},
  { path:'Login',component : LoginComponent},
  { path:'Login/Register',component : RegistrationComponent},
  { path: 'About', component: AboutUsComponent},
  { path: 'Contact', component: ContactUsComponent},
  { path: 'Search', component: SearchResultComponent},
  { path: 'SelectSeats', component: SelectSeatsComponent , canActivate:[AuthenticationGuard]},
  { path: 'bookindDetails', component: BookingDetailsComponent , canActivate:[AuthenticationGuard]},
  { path: 'payment', component: PaymentComponent,canActivate:[AuthenticationGuard] },  
  { path: 'tickets', component:  ViewTicketComponent , canActivate:[AuthenticationGuard]},
  { path: 'viewTicket', component: ViewTicketComponent , canActivate:[AuthenticationGuard]},
  { path: 'userDetails', component: UserDetailsComponent , canActivate:[AuthenticationGuard]},
  { path: 'passengerDetails', component: PassengerDetailsComponent , canActivate:[AuthenticationGuard]},
  { path: 'deals', component: DealsComponent , canActivate:[AuthenticationGuard]},
  { path: 'adminlogin', component: AdminLoginComponent},
  { path: 'adminHome', component: AdminHomeComponent,
  children:[
    { 
      path:"", component: AdminViewScheduleComponent,
    },
    {
        path:"viewschedule",component:AdminViewScheduleComponent,
    },
   {
      path:"addflight",component:AdminAddFlightComponent,
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
