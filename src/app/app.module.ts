// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Services
import { PopupService } from './popup.service';
import { PaymentService } from './payment.service';
import { StepManagerService } from './step-manager.service';
import { DataValidationService } from './data-validation.service';

// Directives
import { InsideWindowBoundsDirective } from './ui/inside-window-bounds.directive';
import { SmoothFadeDirective } from './ui/smooth-fade.directive';

// Pipes
import { CurrencySymbolPipe } from './ui/currency-symbol.pipe';

// Components
import { AppComponent } from './app.component';
import { PaymentReviewComponent } from './step-3/payment-review/payment-review.component';
import { PopupComponent } from './workflow/popup/popup.component';
import { StepManagerComponent } from './workflow/step-manager/step-manager.component';
import { StepComponent } from './workflow/step/step.component';
import { TabManagerComponent } from './workflow/tab-manager/tab-manager.component';
import { PopupOptionComponent } from './workflow/popup-option/popup-option.component';
import { ExpandableBoxComponent } from './workflow/expandable-box/expandable-box.component';
import { CalendarComponent } from './form-fields/calendar/calendar.component';
import { TabComponent } from './workflow/tab/tab.component';
import { FlagsDropdownComponent } from './form-fields/flags-dropdown/flags-dropdown.component';
import { CheckboxComponent } from './form-fields/checkbox/checkbox.component';
import { InputComponent } from './form-fields/input/input.component';
import { InputMoneyComponent } from './form-fields/input-money/input-money.component';
import { RadioButtonComponent } from './form-fields/radio-button/radio-button.component';
import { RadioButtonGroupComponent } from './form-fields/radio-button-group/radio-button-group.component';
import { PayeeComponent } from './step-1/payee/payee.component';
import { IbanComponent } from './step-1/iban/iban.component';
import { PayeeNewComponent } from './step-1/payee-new/payee-new.component';
import { PayeeSelectorComponent } from './step-1/payee-selector/payee-selector.component';
import { AccountComponent } from './step-2/account/account.component';
import { AccountSelectorComponent } from './step-2/account-selector/account-selector.component';
import { PaymentComponent } from './step-3/payment/payment.component';
import { IpayService } from './ipay.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // Workflow
    StepComponent,
    StepManagerComponent,
    TabComponent,
    TabManagerComponent,
    PopupComponent,
    PopupOptionComponent,
    ExpandableBoxComponent,
    // Forms
    CalendarComponent,
    CheckboxComponent,
    FlagsDropdownComponent,
    InputComponent,
    InputMoneyComponent,
    RadioButtonComponent,
    RadioButtonGroupComponent,
    // UI
    CurrencySymbolPipe,
    InsideWindowBoundsDirective,
    SmoothFadeDirective,
    // Step 1
    IbanComponent,
    PayeeComponent,
    PayeeNewComponent,
    PayeeSelectorComponent,
    // Step 2
    AccountComponent,
    AccountSelectorComponent,
    // Step 3
    PaymentComponent,
    PaymentReviewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    IpayService,
    StepManagerService,
    PaymentService,
    PopupService,
    DataValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
