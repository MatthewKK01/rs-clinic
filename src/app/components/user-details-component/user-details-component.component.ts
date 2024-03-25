import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/iuser';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.scss']
})
export class UserDetailsComponentComponent implements OnInit {
  public userData: IUser
  public user_id: string

  constructor(private _user: UserService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => this.user_id = param['id']
    })
    this._user.getDoctor(this.user_id).then(data => this.userData = data)
  }
}
