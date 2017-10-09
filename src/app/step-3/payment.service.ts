import {EventEmitter, Injectable} from '@angular/core';
import {Payee} from '../step-1/payee';
import {Account} from '../step-2/account';
import {isNullOrUndefined} from 'util';
import {ExchangeRateService} from './exchange-rate.service';
import {Fee} from './fee';
import {PAYEES} from '../../mocks/payees.mock';

@Injectable()
export class PaymentService {
  accountChange: EventEmitter<Account> = new EventEmitter();
  payeeChange: EventEmitter<Payee> = new EventEmitter();
  toCreditChange: EventEmitter<string> = new EventEmitter();
  fromCreditChange: EventEmitter<string> = new EventEmitter();
  paymentTypeChange: EventEmitter<string> = new EventEmitter();
  fromCurrencyChange: EventEmitter<string> = new EventEmitter();
  toCurrencyChange: EventEmitter<string> = new EventEmitter();
  feesPaymentModeChange: EventEmitter<string> = new EventEmitter();
  useFeesAccountChange: EventEmitter<boolean> = new EventEmitter();
  feesAccountChange: EventEmitter<Account> = new EventEmitter();
  exchangeRateChange: EventEmitter<number> = new EventEmitter();
  feesChange: EventEmitter<Fee[]> = new EventEmitter();
  estimatedArrivalChange: EventEmitter<string> = new EventEmitter();
  savePayeeChange: EventEmitter<boolean> = new EventEmitter();
  private _account: Account;
  private _payee: Payee;
  private _paymentType: string;
  private _fromCredit: string;
  private _toCredit: string;
  private _fromCurrency: string;
  private _toCurrency: string;
  private _feesPaymentMode: string;
  private _useFeesAccount: boolean;
  private _feesAccount: Account;
  private _fees: Fee[];
  private _exchangeRate: number;
  private _estimatedArrival: string;
  private _savePayee: boolean;

  get estimatedArrival(): string {
    return this._estimatedArrival;
  }

  get fees(): Fee[] {
    return this._fees;
  }

  get exchangeRate(): number {
    return this._exchangeRate;
  }

  get account(): Account {
    return this.account;
  }
  set account(value: Account) {
    if (isNullOrUndefined(value) || this._account === value) {
      return;
    }
    this._account = value;
    this.accountChange.emit(value);
    this.fromCurrency = value.getCurrencyType();
  }

  get payee(): Payee{
    return this._payee;
  }
  set payee(value: Payee) {
    if (isNullOrUndefined(value) || this._payee === value) {
      return;
    }
    this._payee = value;
    this.payeeChange.emit(value);
    this.toCurrency = value.getAccount().getCurrencyType();
  }

  get toCredit(): string {
    return this._toCredit;
  }
  set toCredit(value: string) {
    if (isNullOrUndefined(value) || isNaN(Number.parseFloat(value))) {
      return;
    }
    this.updateToCredit(value);
    this.calculateFromCredit();
  }
  private updateToCredit(value: string) {
    value = this.getRoundValue(value);
    this._toCredit = value;
    this.toCreditChange.emit(value);
  }
  private calculateToCredit() {
    const fromCredit = Number.parseFloat(this._fromCredit);
    const toCredit = (fromCredit * (this.exchangeRate - this.getTotalFees() / 100)).toString();
    const value = (Math.ceil(Number.parseFloat(toCredit) * 100) / 100).toString();
    this.updateToCredit(value);
  }

  get fromCredit(): string {
    return this._fromCredit;
  }
  set fromCredit(value: string) {
    if (isNullOrUndefined(value) || isNaN(Number.parseFloat(value))) {
      return;
    }
    this.updateFromCredit(value);
    this.calculateToCredit();
  }
  private updateFromCredit(value: string) {
    value = this.getRoundValue(value);
    this._fromCredit = value;
    this.fromCreditChange.emit(value);
  }
  private calculateFromCredit() {
    const toCredit = Number.parseFloat(this.toCredit);
    const fromCredit = (toCredit / (this.exchangeRate - this.getTotalFees() / 100)).toString();
    const value = (Math.ceil(Number.parseFloat(fromCredit) * 100) / 100).toString();
    this.updateFromCredit(value);
  }

  get paymentType(): string {
    return this._paymentType;
  }
  set paymentType(value: string) {
    if (isNullOrUndefined(value) || this._paymentType === value) {
      return;
    }
    this._paymentType = value;
    this.paymentTypeChange.emit(value);
    this.updateFees();
    this.updateEstimatedArrival();
  }

  get toCurrency(): string {
    return this._toCurrency;
  }
  set toCurrency(value: string) {
    if (isNullOrUndefined(value) || this._toCurrency === value) {
      return;
    }
    this._toCurrency = value.toUpperCase();
    this.toCurrencyChange.emit(value);
    this.updateExchangeRate();
  }

  get fromCurrency(): string {
    return this._fromCurrency;
  }
  set fromCurrency(value: string) {
    if (isNullOrUndefined(value) || this._fromCurrency === value) {
      return;
    }
    this._fromCurrency = value.toUpperCase();
    this.fromCurrencyChange.emit(value);
    this.updateExchangeRate();
  }

  get feesPaymentMode(): string {
    return this._feesPaymentMode;
  }
  set feesPaymentMode(value: string) {
    if (isNullOrUndefined(value) || this._feesPaymentMode === value) {
      return;
    }
    this._feesPaymentMode = value;
    this.feesPaymentModeChange.emit(value);
  }

  get feesAccount(): Account {
    return this._feesAccount;
  }
  set feesAccount(value: Account) {
    if (isNullOrUndefined(value) || this._feesAccount === value) {
      return;
    }
    this._feesAccount = value;
    this.feesAccountChange.emit(value);
  }

  get useFeesAccount(): boolean {
    return this._useFeesAccount;
  }
  set useFeesAccount(value: boolean) {
    if (isNullOrUndefined(value) || this._useFeesAccount === value) {
      return;
    }
    this._useFeesAccount = value;
    this.useFeesAccountChange.emit(value);
  }

  get savePayee(): boolean {
    return this._savePayee;
  }
  set savePayee(value: boolean) {
    this._savePayee = value;
    this.savePayeeChange.emit(value);
  }

  constructor(private exchangeRateService: ExchangeRateService) {
    setTimeout(() => {
      this.paymentType = 'fast';
      this.feesPaymentMode = 'sender';
      this.useFeesAccount = false;
      this.fromCredit = '0';
      this.toCredit = '0';
    }, 1);
  }

  updateExchangeRate(): void {
    this.exchangeRateService.getExchangeRateFromToCurrency(this.fromCurrency, this.toCurrency)
      .then((exchangeRate) => {
        this._exchangeRate = exchangeRate;
        this.exchangeRateChange.emit(exchangeRate);
        this.calculateFromCredit();
      });
  }

  getRoundValue(value: string) {
    const floatValue = Number.parseFloat(value) * 100;
    const intValue = Number.parseInt(floatValue.toString());
    if (floatValue - intValue !== 0) {
      value = ((intValue + 1.0) / 100).toString();
    }
    return value;
  }

  updateFees(): void {
    if (this.paymentType === 'fast') {
      this._fees = [new Fee(4.5, 'Santander', true)];
    } else {
      this._fees = [new Fee(4.05, 'Santander', true)];
    }
    this.feesChange.emit(this._fees);
    this.calculateFromCredit();
  }

  getTotalFees(): number {
    if (isNullOrUndefined(this.fees)) {
      return 0;
    }
    let total = 0;
    for (let i = 0; i < this.fees.length; total += this.fees[i].getAmount(), i++) {}
    return total;
  }

  updateEstimatedArrival(): void {
    if (this.paymentType === 'fast') {
      this._estimatedArrival = '5 hours';
    } else {
      this._estimatedArrival = '5 days';
    }
    this.estimatedArrivalChange.emit(this._estimatedArrival);
  }

  proceed() {
    if (this.savePayee) {
      // Check whether or not this payee already exists
      PAYEES.forEach(payee => {
        if (this.payee === payee) {
          return;
        }
      });
      PAYEES.push(this.payee);
    }
  }
}
