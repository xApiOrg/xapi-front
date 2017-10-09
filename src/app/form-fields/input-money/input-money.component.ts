import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {isNull, isNullOrUndefined} from 'util';

@Component({
  selector: 'app-money-input',
  templateUrl: './input-money.component.html',
  styleUrls: ['./input-money.component.css']
})
export class InputMoneyComponent {
  private _value: string;
  private cachedValue: string;
  @Input() currencyType: string;
  @Input() placeholder: string;
  isFocused: boolean;
  isHovering = false;
  @ViewChild('input') inputEl: ElementRef;

  @Input()
  get value(): string {
    return this._value;
  }
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  set value(value: string) {
    if (this.isFocused) {
      this.cachedValue = value;
      this.valueChange.emit(value);
    } else {
      this._value = value;
    }
  }

  @Output() selected: EventEmitter<any> = new EventEmitter();
  onFocus() {
    this.isFocused = true;
      setTimeout(() => {
        this.inputEl.nativeElement.select();
      }, 1);
    this.selected.emit();
  }

  onBlur() {
    this.isFocused = false;
    if (!isNullOrUndefined(this.cachedValue)) {
      this.value = this.cachedValue;
      this.cachedValue = undefined;
    }
    if (!this.value || this.value.trim().length === 0 || isNaN(Number.parseFloat(this.value))) {
      this._value = '0';
    }
    const intValue = Number.parseInt(this._value);
    const floatValue = Number.parseFloat(this._value);
    if (floatValue - intValue !== 0) {
      this.roundValue();
    }
  }

  roundValue() {
    this.value = (Math.ceil(Number.parseFloat(this._value) * 100) / 100).toString();
  }

  isUndefinedOrNaN(value: string): boolean {
    return !value || isNaN(Number.parseFloat(value));
  }
}
