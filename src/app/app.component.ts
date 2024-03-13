import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rs-clinic';
  isModalVisible: boolean = false;
  

  openModal(): void {
    this.isModalVisible = true;
  }

  
}
