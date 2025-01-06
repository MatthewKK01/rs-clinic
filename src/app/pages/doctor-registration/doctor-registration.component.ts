import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IDoctors } from 'src/app/models/idoctors';
import { IUser } from 'src/app/models/iuser';
import { DoctorsService } from 'src/app/services/doctors.service';
import { UserService } from 'src/app/services/user.service';


@Component({
    selector: 'app-doctor-registration',
    templateUrl: './doctor-registration.component.html',
    styleUrls: ['./doctor-registration.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class DoctorRegistrationComponent {

  registrationForm: FormGroup; // Define the registrationForm FormGroup
  selectedImage: string | ArrayBuffer | null = null;
  formData = new FormData();

  constructor(private _doctor: DoctorsService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      id_number: ['', [Validators.required, Validators.minLength(11)]],
      surname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      category: ['', [Validators.required, Validators.minLength(8)]],
      photo: [''],
      cv: ['']
    });
  }


  onSubmit(){

  }
}
