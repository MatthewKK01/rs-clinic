import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

const routes: Routes = [
  { path: 'user', component: UserRegistrationComponent },
  { path: 'doctor', component: UserRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
