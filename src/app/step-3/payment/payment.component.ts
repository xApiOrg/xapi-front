import {Component, Input} from '@angular/core';
import {Payee} from '../../../models/payee';
import {PopupService} from '../../popup.service';
import {StepManagerService} from '../../step-manager.service';
import {PaymentService} from '../../payment.service';
import {Account} from '../../../models/account';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  private _fromCurrency: string;
  private _toCurrency: string;
  private _fromCredit: string;
  private _toCredit: string;
  private _feesPaymentMode: string;
  private _useFeesAccount: boolean;
  private _feesAccount: Account;
  private _paymentType: string;
  popupService: PopupService;
  stepManagerService: StepManagerService;
  paymentService: PaymentService;
  selectedMoneyInput = 0;
  currencyMap = new Map();
  payee: Payee;
  @Input() accounts: Account[];

  get paymentType(): string {
    return this._paymentType;
  }
  set paymentType(value: string) {
    this._paymentType = value;
    this.paymentService.paymentType = value;
  }

  get feesAccount(): Account {
    return this._feesAccount;
  }
  set feesAccount(value: Account) {
    this._feesAccount = value;
    this.paymentService.feesAccount = value;
  }

  get useFeesAccount(): boolean {
    return this._useFeesAccount;
  }
  set useFeesAccount(value: boolean) {
    this._useFeesAccount = value;
    this.paymentService.useFeesAccount = value;
  }

  get feesPaymentMode(): string {
    return this._feesPaymentMode;
  }
  set feesPaymentMode(value: string) {
    this._feesPaymentMode = value;
    this.paymentService.feesPaymentMode = value;
  }

  get toCredit(): string {
    return this._toCredit;
  }
  set toCredit(value: string) {
    this._toCredit = value;
    this.paymentService.toCredit = value;
  }

  get fromCredit(): string {
    return this._fromCredit;
  }
  set fromCredit(value: string) {
    this._fromCredit = value;
    this.paymentService.fromCredit = value;
  }

  get toCurrency(): string {
    return this._toCurrency;
  }
  set toCurrency(value: string) {
    this._toCurrency = value;
    this.paymentService.toCurrency = value;
  }

  get fromCurrency(): string {
    return this._fromCurrency;
  }
  set fromCurrency(value: string) {
    this._fromCurrency = value;
    this.paymentService.fromCurrency = value;
  }

  constructor(popupService: PopupService,
              stepManagerService: StepManagerService,
              transactionService: PaymentService) {
    this.popupService = popupService;
    this.stepManagerService = stepManagerService;
    this.paymentService = transactionService;
    this.currencyMap.set('EUR', 'eur');
    this.currencyMap.set('GBP', 'gbp');
    this.currencyMap.set('USD', 'usd');
    this.currencyMap.set('RUB', 'rub');
    transactionService.fromCurrencyChange.subscribe((fromCurrency) => {
      this._fromCurrency = fromCurrency;
    });
    transactionService.toCurrencyChange.subscribe((toCurrency) => {
      this._toCurrency = toCurrency;
    });
    transactionService.fromCreditChange.subscribe((fromCredit) => {
      this._fromCredit = fromCredit;
    });
    transactionService.toCreditChange.subscribe((toCredit) => {
      this._toCredit = toCredit;
    });
    transactionService.feesPaymentModeChange.subscribe((feesPaymentMode) => {
      this._feesPaymentMode = feesPaymentMode;
    });
    transactionService.useFeesAccountChange.subscribe((useFeesAccount) => {
      this._useFeesAccount = useFeesAccount;
    });
    transactionService.feesAccountChange.subscribe((feesAccount) => {
      this._feesAccount = feesAccount;
    });
    transactionService.paymentTypeChange.subscribe((paymentType) => {
      this._paymentType = paymentType;
    });
    transactionService.payeeChange.subscribe((payee) => {
      this.payee = payee;
    });
  }

  isAssignedAndNumeric(value: string): boolean {
    console.log(value);
    return !!value && !isNaN(Number.parseFloat(value));
  }
}
