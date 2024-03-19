import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  constructor(private router: Router, private _user: UserService) {
  }
  onCloseClick() {
    // Emit false when the close button is clicked
    this.closeModal.emit(false);
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this._user.loginUser(email, password)
    this.onCloseClick()
  }
}
