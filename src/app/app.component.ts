import { Component } from '@angular/core';
import { Account } from '../models/account';
import { Payee } from '../models/payee';
import {PopupService} from './popup.service';
import {StepManagerService} from './step-manager.service';
import {StepSelection} from './workflow/step/step.component';
import {PaymentService} from './payment.service';
import {isNullOrUndefined} from 'util';
import {IpayService} from "./ipay.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _payee: Payee;
  private _account: Account;
  payees: Payee[];
  accounts: Account[];
  popupService: PopupService;
  paymentService: PaymentService;
  ipayService: IpayService;
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
      new StepSelection(this.capitalizeString(value.getName()), `(${this.capitalizeString(value.getCountry())})`),
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
      new StepSelection(value.getDescription(), `(${value.getLastDigits()}) ${value.getCurrency().toUpperCase()}`)
    ];
    this.stepManagerService.doProgress('formFill');
  }

  constructor(popupService: PopupService,
            paymentService: PaymentService,
            ipayService: IpayService,
            private stepManagerService: StepManagerService,
            private transactionService: PaymentService) {
    this.ipayService = ipayService;
    this.popupService = popupService;
    this.paymentService = paymentService;
    transactionService.accountChange.subscribe((account) => {
      this.account = account;
    });
    transactionService.payeeChange.subscribe((payee) => {
      this.payee = payee;
    });
    ipayService.getPayees().then(payees => {
      this.payees = payees;
    });
    ipayService.getAccounts().then((accounts) => {
      this.accounts = accounts;
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
