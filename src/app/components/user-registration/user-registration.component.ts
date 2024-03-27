import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { IUser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  activationCode: string = ""

  generateActivationCode(): string {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    return code;
  }

  userForm!: FormGroup
  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName: ["", [Validators.required, Validators.minLength(5)]],
      userSurname: ["", Validators.required],
      to_email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      id_number: ["", [Validators.required, Validators.minLength(11)]],
      activation_code: [null, [Validators.required, Validators.minLength(6)]],
    })
  }

  constructor(private fb: FormBuilder, private _user: UserService) {
    emailjs.init("1_mrNZ5LnjFDdqjaD")
  }

  service_id: string = "service_bmlkmdg";
  template_id: string = "template_1s44qsc";

  sendEmail() {
    const generatedCode = this.generateActivationCode()
    const templateParams = {
      from_name: "კლინიკიდან",
      to_email: this.userForm.value.to_email,
      activation_code: generatedCode,
    };

    this.activationCode = generatedCode;

    emailjs.send(this.service_id, this.template_id, templateParams).then((result) => {
      alert("აქტივაციის კოდი გაგზავნილია,კოდის გამოყენების ვადაა 2 წუთი");
      console.log('Success!', result)
    }, () => {
      alert("გთხოვთ შეიყვანოთ ემაილი პირველ რიგში")
    }
    )
  }

  onSubmit() {
    const validatedCode = this.userForm.get("activation_code").value.toString();
    const { to_email, password } = this.userForm.value;
    const userData: IUser = {
      role: "user",
      name: this.userForm.get('userName').value,
      surname: this.userForm.get('userSurname').value,
      id_number: this.userForm.get('id_number').value,
      email: this.userForm.get('to_email').value,
    }

    if (validatedCode === this.activationCode) {
      this._user.registerUser(to_email, password, userData);
      this.userForm.reset()
    } else {
      console.log("activation code isnot valid");
    }
  }
}
