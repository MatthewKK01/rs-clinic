import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DoctorRegistrationComponent } from './components/doctor-registration/doctor-registration.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'newuser', component: UserRegistrationComponent },
  { path: 'newdoctor', component: DoctorRegistrationComponent },
  { path: 'doctors/:id', component: DoctorAppointmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
