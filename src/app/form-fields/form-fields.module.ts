import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarComponent} from './calendar/calendar.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {FlagsDropdownComponent} from './flags-dropdown/flags-dropdown.component';
import {InputComponent} from './input/input.component';
import {InputMoneyComponent} from './input-money/input-money.component';
import {RadioButtonComponent} from './radio-button/radio-button.component';
import {RadioButtonGroupComponent} from './radio-button-group/radio-button-group.component';
import {UiModule} from '../ui/ui.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule
  ],
  declarations: [
    CalendarComponent,
    CheckboxComponent,
    FlagsDropdownComponent,
    InputComponent,
    InputMoneyComponent,
    RadioButtonComponent,
    RadioButtonGroupComponent
  ],
  exports: [
    CalendarComponent,
    CheckboxComponent,
    FlagsDropdownComponent,
    InputComponent,
    InputMoneyComponent,
    RadioButtonComponent,
    RadioButtonGroupComponent
  ]
})
export class FormFieldsModule { }
