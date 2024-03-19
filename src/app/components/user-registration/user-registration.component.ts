import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  activationCode: string = ""

  generateActivationCode(): string {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    return code;
  }

  userForm: FormGroup = this.fb.group({
    userName: ["", [Validators.required, Validators.minLength(5)]],
    userSurname: ["", Validators.required],
    to_email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    id_number: ["", Validators.required],
    activation_code: [null, Validators.required],
  })

  constructor(private fb: FormBuilder) {
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
    console.log(validatedCode, typeof validatedCode);
    console.log(this.activationCode, typeof this.activationCode);
    if (validatedCode === this.activationCode) {
      console.log("works");
    } else {
      console.log("activation code isnot valid");
    }

  }
}
