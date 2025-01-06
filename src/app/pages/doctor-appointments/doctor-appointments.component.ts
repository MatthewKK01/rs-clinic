import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DocumentData } from 'firebase/firestore';
import { Observable, switchMap } from 'rxjs';
import { IDoctors } from 'src/app/models/idoctors';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent implements OnInit {
  public myDoctor: IDoctors | null = null;

  public id: string;
  myForm!: FormGroup
  constructor(private _doc: DoctorsService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.id = ""
  }
  ngOnInit(): void {

    this.myForm = this.fb.group({
      rating: [null, Validators.required],
    })

    // Subscribe to query parameters separately
    this.route.queryParams.subscribe(params => {
      this.id = params['id']; // Extracting the 'id' parameter from query params
    });


  }
}
