import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DoctorRegistrationComponent } from './components/doctor-registration/doctor-registration.component';
import { DoctorAppointmentsComponent } from './components/doctor-appointments/doctor-appointments.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDetailsComponentComponent } from './components/user-details-component/user-details-component.component';
import { DoctordetailsComponent } from './components/doctordetails/doctordetails.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'newuser', component: UserRegistrationComponent },
  { path: 'newdoctor', component: DoctorRegistrationComponent },
  { path: 'user/:id', component: UserDetailsComponentComponent },
  { path: 'doctor/:id', component: DoctordetailsComponent },
  { path: 'doctors/:name', component: DoctorAppointmentsComponent },
  { path: 'admin', component: AdminpageComponent },
  { path: 'categories', component: AdminDashboardComponent },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
