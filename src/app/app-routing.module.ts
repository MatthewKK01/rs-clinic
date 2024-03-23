import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DoctorRegistrationComponent } from './components/doctor-registration/doctor-registration.component';
import { DoctorAppointmentsComponent } from './components/doctor-appointments/doctor-appointments.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'newuser', component: UserRegistrationComponent },
  { path: 'newdoctor', component: DoctorRegistrationComponent },
  { path: 'user/:id', component: DoctorAppointmentsComponent },
  { path: 'doctor/:id', component: DoctorAppointmentsComponent },
  { path: 'admin', component: AdminDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
