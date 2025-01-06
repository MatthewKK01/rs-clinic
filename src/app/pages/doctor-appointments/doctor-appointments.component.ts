import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IDoctors } from 'src/app/models/idoctors';
import { DoctorsService } from 'src/app/services/doctors.service';
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component';

@Component({
    selector: 'app-doctor-appointments',
    templateUrl: './doctor-appointments.component.html',
    styleUrls: ['./doctor-appointments.component.scss'],
    standalone: true,
    imports: [CategoriesListComponent]
})
export class DoctorAppointmentsComponent implements OnInit {
  public myDoctor: IDoctors | null = null;

  public id: string;

  constructor(private _doc: DoctorsService, private route: ActivatedRoute,) {
    this.id = ""
  }
  ngOnInit(): void {

    // Subscribe to query parameters separately
    this.route.queryParams.subscribe(params => {
      this.id = params['id']; // Extracting the 'id' parameter from query params
    });


  }
}
