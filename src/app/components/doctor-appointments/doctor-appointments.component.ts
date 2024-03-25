import { Component, OnInit } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { IDoctors } from 'src/app/models/idoctors';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent implements OnInit {
  myDoctor!: IDoctors
  constructor(private _doc: DoctorsService) {

  }
  ngOnInit(): void {
    this._doc.getDoctor("iXsgJTVNnLM5lOLan6F4erUvsoV2").then((res) => this.myDoctor = res).catch(err => console.log(err))
  }
}
