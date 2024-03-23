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
import { HttpClientModule } from '@angular/common/http';
import { DoctorAppointmentsComponent } from './components/doctor-appointments/doctor-appointments.component'

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
