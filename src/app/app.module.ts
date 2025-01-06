import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DoctorRegistrationComponent } from './pages/doctor-registration/doctor-registration.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoctorAppointmentsComponent } from './pages/doctor-appointments/doctor-appointments.component'
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { UserDetailsComponentComponent } from './pages/user-details-component/user-details-component.component';
import { DoctordetailsComponent } from './pages/doctordetails/doctordetails.component';
import { NgxStarsModule } from 'ngx-stars';
import { AdminpageComponent } from './pages/adminpage/adminpage.component';



@NgModule({
  declarations: [
    AppComponent,
    DoctorCardComponent,
    UserRegistrationComponent,
    ModalComponent,
    HomepageComponent,
    DoctorRegistrationComponent,
    DoctorAppointmentsComponent,
    AdminDashboardComponent,
    CategoriesListComponent,
    UserDetailsComponentComponent,
    DoctordetailsComponent,
    AdminpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
