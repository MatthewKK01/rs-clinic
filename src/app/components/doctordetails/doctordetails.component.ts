import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IDoctors } from 'src/app/models/idoctors';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.scss']
})
export class DoctordetailsComponent implements OnInit {
  public docData: IDoctors;
  public doc_id: string
  public myForm: FormGroup
  constructor(private _doc: DoctorsService, private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => this.doc_id = param['id']
    })

    this.myForm = this.fb.group({
      rating: '',
    })

    this._doc.getDoctor(this.doc_id).then(data => { this.docData = data; this.myForm.get('rating').patchValue(data.rating) })
  }
}
