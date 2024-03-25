import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IDoctors } from 'src/app/models/idoctors';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() user?: IDoctors;
  public myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    console.log(this.user?.image);
    this.myForm = this.fb.group({
      rating: [null, Validators.required,],
    })
    console.log(this.myForm.get("rating").value);

  }
}
