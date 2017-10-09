import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencySymbolPipe} from './currency-symbol.pipe';
import {InsideWindowBoundsDirective} from './inside-window-bounds.directive';
import {SmoothFadeDirective} from './smooth-fade.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrencySymbolPipe,
    InsideWindowBoundsDirective,
    SmoothFadeDirective
  ],
  exports: [
    CurrencySymbolPipe,
    InsideWindowBoundsDirective,
    SmoothFadeDirective
  ]
})
export class UiModule { }
