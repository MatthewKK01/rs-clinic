import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent {


  public myForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      rating: ["5"],
    })

  }
}
