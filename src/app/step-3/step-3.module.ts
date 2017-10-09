import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { PaymentComponent } from './payment/payment.component';
import { FormFieldsModule } from '../form-fields/form-fields.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { FormsModule } from '@angular/forms';
import { Step2Module } from '../step-2/step-2.module';
import {ExchangeRateService} from './exchange-rate.service';
import {PaymentService} from './payment.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormFieldsModule,
    UiModule,
    WorkflowModule,
    Step2Module
  ],
  declarations: [
    PaymentComponent
  ],
  exports: [
    PaymentComponent
  ],
  providers: [
    ExchangeRateService,
    PaymentService
  ]
})
export class Step3Module { }
