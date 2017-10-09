import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../ui/ui.module';
import {IbanComponent} from './iban/iban.component';
import {PayeeComponent} from './payee/payee.component';
import {PayeeNewComponent} from './payee-new/payee-new.component';
import {PayeeSelectorComponent} from './payee-selector/payee-selector.component';
import {FormFieldsModule} from '../form-fields/form-fields.module';
import {DataValidationService} from './data-validation.service';
import {NewPayeeFormService} from './new-payee-form.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormFieldsModule,
    UiModule,
    BrowserAnimationsModule
  ],
  declarations: [
    IbanComponent,
    PayeeComponent,
    PayeeNewComponent,
    PayeeSelectorComponent
  ],
  exports: [
    PayeeComponent,
    PayeeNewComponent,
    PayeeSelectorComponent
  ],
  providers: [
    DataValidationService,
    NewPayeeFormService
  ]
})
export class Step1Module { }
