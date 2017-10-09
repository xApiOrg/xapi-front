import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Iban} from '../iban';

@Component({
  selector: 'app-iban',
  templateUrl: './iban.component.html',
  styleUrls: ['./iban.component.css']
})
export class IbanComponent {

  // iban setter and getter
  @Input()
  get iban(): Iban {
    return this._iban;
  }
  set iban(value: Iban) {
    this._iban = value;
  }

  private _iban: Iban;
}
