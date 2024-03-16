import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDoctors } from '../models/idoctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  getDoctors() {
    return this.http.get<IDoctors[]>("http://localhost:3000/doctors")
  }
}
