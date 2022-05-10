import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookingComponent } from './booking/booking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PaymentComponent } from './payment/payment.component';
import { YourTicketsComponent } from './your-tickets/your-tickets.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { AdminAddFlightComponent } from './admin-add-flight/admin-add-flight.component';

import {HttpClientModule} from '@angular/common/http';
import { AdminViewScheduleComponent } from './admin-view-schedule/admin-view-schedule.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TryComponent } from './try/try.component';
import { DealsComponent } from './deals/deals.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistrationComponent,
    BookingComponent,
    AboutUsComponent,
    ContactUsComponent,
    SearchResultComponent,
    SelectSeatsComponent,
    BookingDetailsComponent,
    PaymentComponent,
    YourTicketsComponent,
    ViewTicketComponent,
    UserDetailsComponent,
    PassengerDetailsComponent,
    AdminAddFlightComponent,
    AdminViewScheduleComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    TryComponent,
    DealsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
