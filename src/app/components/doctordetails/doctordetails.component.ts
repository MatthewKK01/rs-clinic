import { Component, OnInit } from '@angular/core';
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

  constructor(private _doc: DoctorsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => this.doc_id = param['id']
    })

    this._doc.getDoctor(this.doc_id).then(data => this.docData = data)
  }
}
