import { Component, OnInit } from '@angular/core';
import { IDoctors } from 'src/app/models/idoctors';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(private _doc: DoctorsService) { }
  public docList!: IDoctors[];
  ngOnInit(): void {
    this._doc.getDoctors().subscribe({
      next: (data) => { this.docList = data }
    })
  }
}
