import { AfterContentChecked, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Payee } from '../../../models/payee';
import {PAYEES} from "../../../mocks/payees.mock";

@Component({
  selector: 'app-payee-selector',
  templateUrl: './payee-selector.component.html',
  styleUrls: ['./payee-selector.component.css']
})
export class PayeeSelectorComponent implements AfterContentChecked {

  @Input()
  get selectedRecipient(): Payee {
    return this._selectedRecipient;
  }

  @Output() selectedRecipientChange: EventEmitter<Payee> = new EventEmitter();
  set selectedRecipient(recipient: Payee) {
    this._selectedRecipient = recipient;
    this.selectedRecipientChange.emit(this._selectedRecipient);
  }

  get isScrollNeeded(): boolean {
    return this._isScrollNeeded;
  }

  set isScrollNeeded(value: boolean) {
    this._isScrollNeeded = value;
    if (!value) {
      this.recipientList.nativeElement.style.left = '';
    }
  }

  @Input() payees: Payee[] = PAYEES;
  listWidth: number;
  listContainerWidth: number;
  listContainerOffset = 0;
  _isScrollNeeded: boolean;
  _selectedRecipient: Payee;
  @ViewChild('recipientListContainer') recipientListContainer: ElementRef;
  @ViewChild('recipientList') recipientList: ElementRef;

  constructor() {
    setInterval(() => {
      this.onWindowResize();
    }, 100);
  }

  ngAfterContentChecked() {
    if (this.payees === undefined) {
      return;
    }
    this.recipientListContainer.nativeElement.style.height = `${this.recipientList.nativeElement.clientHeight + 10}px`;
    this.listWidth = 160 * this.payees.length - 10;
    this.updateComputedValues();
  }

  onWindowResize() {
    this.updateComputedValues();
  }

  updateComputedValues() {
    this.listContainerWidth = Number.parseInt(window.getComputedStyle(this.recipientListContainer.nativeElement).width);
    this.isScrollNeeded = this.listWidth > this.listContainerWidth;
  }

  scrollList(direction: number) {
    this.updateComputedValues();
    this.listContainerOffset += Math.round(this.listContainerWidth / 2) * direction;
    const maxOffset = this.listWidth + 20 - this.listContainerWidth;
    const offsetIsGreaterThanAllowed = this.listContainerOffset > maxOffset;
    const offsetUnderZero = this.listContainerOffset < 0;
    this.listContainerOffset = offsetIsGreaterThanAllowed ? maxOffset : offsetUnderZero ? 0 : this.listContainerOffset;
    this.recipientList.nativeElement.style.left = `${-this.listContainerOffset + 10}px`;
  }
}
