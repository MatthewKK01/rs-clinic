import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private auth: AuthService, private router: Router) {
  }
  onCloseClick() {

    console.log(this.loginForm.value);
    this.auth.loginUser(this.loginForm.value).then(
      () => {
        this.router.navigateByUrl("doctor")
      }
    ).catch(
      (err: any) => console.log(err)
    )
    // Emit false when the close button is clicked
    this.closeModal.emit(false);
  }
}
