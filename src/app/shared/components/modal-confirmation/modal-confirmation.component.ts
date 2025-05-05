import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-confirmation',
  standalone: true,
  templateUrl: './modal-confirmation.component.html',
  styleUrl: './modal-confirmation.component.scss',
})
export class ModalConfirmationComponent implements OnInit {
  @Input() message: string = '¿Estás seguro?';
  @Input() isVisible: boolean = false;
  @Output() newItemEvent = new EventEmitter<boolean>(false);

  ngOnInit(): void {}

  showModal(message: string) {
    this.message = message;
    this.isVisible = true;
  }

  closeModal() {
    this.newItemEvent.emit(true);
  }
}
