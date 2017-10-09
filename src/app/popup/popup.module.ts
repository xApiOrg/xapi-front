import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentReviewComponent} from './payment-review/payment-review.component';
import {PaymentService} from '../step-3/payment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaymentReviewComponent
  ],
  exports: [
    PaymentReviewComponent
  ],
  providers: [
    PaymentService
  ]
})
export class PopupModule { }
