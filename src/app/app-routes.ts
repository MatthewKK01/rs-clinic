import {Routes} from '@angular/router';
import {UserRegistrationComponent} from './pages/user-registration/user-registration.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {DoctorRegistrationComponent} from './pages/doctor-registration/doctor-registration.component';
import {DoctorAppointmentsComponent} from './pages/doctor-appointments/doctor-appointments.component';
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component';
import {UserDetailsComponentComponent} from './pages/user-details-component/user-details-component.component';
import {DoctordetailsComponent} from './pages/doctordetails/doctordetails.component';
import {AdminpageComponent} from './pages/adminpage/adminpage.component';


export const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'newuser', component: UserRegistrationComponent},
  {path: 'newdoctor', component: DoctorRegistrationComponent},
  {path: 'user/:id', component: UserDetailsComponentComponent},
  {path: 'doctor/:id', component: DoctordetailsComponent},
  {path: 'doctors/:name', component: DoctorAppointmentsComponent},
  {path: 'admin', component: AdminpageComponent},
  {path: 'categories', component: AdminDashboardComponent},
  {path: '**', component: HomepageComponent},
];
