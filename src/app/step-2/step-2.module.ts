import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../ui/ui.module';
import {AccountComponent} from './account/account.component';
import {AccountSelectorComponent} from './account-selector/account-selector.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [
    AccountComponent,
    AccountSelectorComponent
  ],
  exports: [
    AccountComponent,
    AccountSelectorComponent
  ]
})
export class Step2Module { }
