import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @ViewChild('inputIn') inputIn: ElementRef;
  private _value: string;
  @Input() placeholder;
  @Input() tooltip;
  @Input() isRequired: boolean;
  @Input() validations: {};
  private _error: string;
  isFocused: boolean;
  isHovering: boolean;
  isShowingTooltip: boolean;

  @Input()
  get value(): string {
    return this._value;
  }
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  set value(value: string) {
    this._value = value;
    this.valueChange.emit(value);
  }

  @Input()
  get error(): string {
    return this._error;
  }
  @Output() errorChange: EventEmitter<string> = new EventEmitter();
  set error(value: string) {
    this._error = value;
    this.errorChange.emit(value);
  }
}
