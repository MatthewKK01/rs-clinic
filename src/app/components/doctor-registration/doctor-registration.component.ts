import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDoctors } from 'src/app/models/idoctors';
import { IUser } from 'src/app/models/iuser';
import { DoctorsService } from 'src/app/services/doctors.service';
import { UserService } from 'src/app/services/user.service';
import { AngularFireStorage } from '@angular/fire/compat/storage'

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss']
})
export class DoctorRegistrationComponent {

  registrationForm: FormGroup; // Define the registrationForm FormGroup
  selectedImage: string | ArrayBuffer | null = null;
  formData = new FormData();

  constructor(private _doctor: DoctorsService, private storage: AngularFireStorage, private fb: FormBuilder) {
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
  generateRandomNumber(): string {
    // Generate a random number between 1 and 5
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber.toString();
  }
  async onFileSelected(event: any) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      const path = `doctors/${file.name}`
      const uploadImg = await this.storage.upload(path, file)
      const url = await uploadImg.ref.getDownloadURL()
      this.registrationForm.patchValue({
        photo: url
      })
    }
  }


  onSubmit() {
    const { email, password, id_number, name, surname, category, photo, cv } = this.registrationForm.value;
    const userData: IUser = {
      email: email,
      id_number: id_number,
      name: name,
      surname: surname,
      role: "doctor"
    };
    const doctorData: IDoctors = {
      email: email,
      id_number: id_number,
      name: name,
      surname: surname,
      rating: this.generateRandomNumber(),
      category: category,
      image: photo,
      cv: cv,
    }
    this._doctor.registerUser(email, password, userData, doctorData);
    this.registrationForm.reset();
  }
}
