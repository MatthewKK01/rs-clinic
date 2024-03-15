import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DoctorRegistrationComponent } from './components/doctor-registration/doctor-registration.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DoctorCardComponent,
    UserRegistrationComponent,
    ModalComponent,
    HomepageComponent,
    DoctorRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarRatingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
