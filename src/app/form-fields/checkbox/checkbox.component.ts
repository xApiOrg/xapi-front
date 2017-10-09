import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cb',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  @Input()
  get checked(): boolean {
    return this._checked;
  }
  @Output() checkedChange = new EventEmitter<boolean>();
  set checked(value: boolean) {
    this._checked = value;
    this.checkedChange.emit(value);
  }

  private _checked = false;
  @Input() name: string;
}
