import { Component, OnInit } from '@angular/core';
import { IDoctors } from 'src/app/models/idoctors';
import { DoctorsService } from 'src/app/services/doctors.service';
import { DoctorCardComponent } from '../../components/doctor-card/doctor-card.component';
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    standalone: true,
    imports: [CategoriesListComponent, DoctorCardComponent]
})
export class HomepageComponent implements OnInit {
  constructor(private _doc: DoctorsService) { }
  docList: IDoctors[] = [];


  ngOnInit(): void {

  }

}
