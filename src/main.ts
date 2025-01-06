import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {withInterceptorsFromDi, provideHttpClient} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import {routes} from "./app/app-routes";
import {provideRouter} from "@angular/router";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, ReactiveFormsModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
  ],


})
  .catch(err => console.error(err));
