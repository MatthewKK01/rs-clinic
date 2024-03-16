import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDoctors } from 'src/app/models/idoctors';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent implements OnInit {
  @Input() myDoctor!: IDoctors;
  public myForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      rating: [null, Validators.required],
    })
    this.myForm.get("rating")?.setValue(this.myDoctor.rating);
  }
}

