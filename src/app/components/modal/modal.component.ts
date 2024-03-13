import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCloseClick() {
    // Emit false when the close button is clicked
    this.closeModal.emit(false);
  }
}
