import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDoctors } from 'src/app/models/idoctors';
import { DoctorsService } from 'src/app/services/doctors.service';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public docData!: IDoctors[]
  public myForm: FormGroup

  constructor(private _doc: DoctorsService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      rating: [null, Validators.required],
    })

    this._doc.fetchDocs().subscribe({
      next: res => {
        this.docData = res;
      }
    });
  }

  editDoctor(doctor: IDoctors) { }
  deleteDoctor(docId: string) {
    this._doc.deleteDoctor(docId).then((res) => console.log(res)).catch(err => console.log(err))
  }
}
