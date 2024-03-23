import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { IUser } from './models/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rs-clinic';
  isModalVisible: boolean = false;
  userData: IUser = undefined;

  /**
   *
   */
  constructor(private router: Router, private _user: UserService) {

  }

  ngOnInit(): void {
    this._user.userData$.subscribe(({
      next: res => this.userData = res,
      error: err => console.log(err)
    }))
  }

  openModal(): void {
    this.isModalVisible = true;
  }


}
