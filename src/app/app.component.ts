import { Component } from '@angular/core';
import { Account } from './step-2/account';
import { Payee } from './step-1/payee';
import {PopupService} from './workflow/popup.service';
import {StepManagerService} from './workflow/step-manager.service';
import {StepSelection} from './workflow/step/step.component';
import {PaymentService} from './step-3/payment.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _payee: Payee;
  private _account: Account;
  popupService: PopupService;
  paymentService: PaymentService;
  payeeSelectedProperties = [];
  accountSelectedProperties = [];
  formSelectedProperties = [];

  // payee setter and getter
  get payee(): Payee {
    return this._payee;
  }

  set payee(value: Payee) {
    if (isNullOrUndefined(value)) {
      return;
    }
    this._payee = value;
    this.transactionService.payee = value;
    this.payeeSelectedProperties = [
      new StepSelection(this.capitalizeString(value.getName()), `(${this.capitalizeString(value.getAccount().getCountry())})`),
    ];
    this.stepManagerService.doProgress('accountSelect');
  }

  // account getter and setter
  get account(): Account {
    return this._account;
  }

  set account(value: Account) {
    if (isNullOrUndefined(value)) {
      return;
    }
    this._account = value;
    this.transactionService.account = value;
    this.accountSelectedProperties = [
      new StepSelection(value.getName(), `(${value.getLastDigits()}) ${value.getCurrencyType().toUpperCase()}`)
    ];
    this.stepManagerService.doProgress('formFill');
  }

  constructor(popupService: PopupService,
              paymentService: PaymentService,
              private stepManagerService: StepManagerService,
              private transactionService: PaymentService) {
    this.popupService = popupService;
    this.paymentService = paymentService;
    transactionService.accountChange.subscribe((account) => {
      this.account = account;
    });
    transactionService.payeeChange.subscribe((payee) => {
      this.payee = payee;
    });
  }

  capitalizeString(value: string): string {
    const splits = value.split(' ');
    let retString = '';
    for (let i = 0; i < splits.length; i++) {
      retString += splits[i].charAt(0).toUpperCase() + splits[i].substr(1, splits[i].length - 1) + ' ';
    }
    return retString.trim();
  }
}
