import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {WorkflowModule} from './workflow/workflow.module';
import {UiModule} from './ui/ui.module';
import {FormFieldsModule} from './form-fields/form-fields.module';
import {Step1Module} from './step-1/step-1.module';
import {Step2Module} from './step-2/step-2.module';
import {Step3Module} from './step-3/step-3.module';
import {PopupModule} from './popup/popup.module';
import {PopupService} from './workflow/popup.service';
import {PaymentService} from './step-3/payment.service';
import {StepManagerService} from './workflow/step-manager.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    WorkflowModule,
    UiModule,
    FormFieldsModule,
    Step1Module,
    Step2Module,
    Step3Module,
    PopupModule
  ],
  providers: [
    StepManagerService,
    PaymentService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
