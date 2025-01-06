import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { IUser } from './models/iuser';
import { DoctorsService } from './services/doctors.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'rs-clinic';
  isModalVisible: boolean = false;
  userData!: IUser;
  name: string = '';
  category: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private _user: UserService, private _doc: DoctorsService) {

  }

  ngOnInit(): void {

  }

  openModal(): void {
    this.isModalVisible = true;
  }
  navigateToDashboard(userData: IUser) {
    const { role, id } = userData;
    let routePath = '';
    switch (role) {
      case 'user':
        routePath = `user/${id}`;
        break;
      case 'doctor':
        routePath = `doctor/${id}`;
        break;
      case 'admin':
        routePath = `admin`;
        break;
      default:
        routePath = '';
        break;
    }
    if (routePath) {
      this.router.navigate([routePath], { relativeTo: this.route });
    }
  }



}
