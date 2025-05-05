import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ModalConfirmationComponent } from "../../shared/components/modal-confirmation/modal-confirmation.component";


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ModalConfirmationComponent
]
})
export class ContactModule { }
