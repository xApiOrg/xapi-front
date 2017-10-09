import {Component} from '@angular/core';
import {Payee} from '../../../models/payee';
import {Account} from '../../../models/account';
import {PaymentService} from '../../payment.service';
import {Fee} from "../../../models/fee";

@Component({
  selector: 'app-transaction-review',
  templateUrl: './payment-review.component.html',
  styleUrls: ['./payment-review.component.css']
})
export class PaymentReviewComponent {
  paymentService: PaymentService;
  payee: Payee;
  account: Account;
  fromCredit: string;
  toCredit: string;
  fromCurrency: string;
  toCurrency: string;
  paymentType: string;
  feesPaymentMode: string;
  useFeesAccount: boolean;
  feesAccount: Account;
  exchangeRate: number;
  fees: Fee[];

  constructor(transactionService: PaymentService) {
    this.paymentService = transactionService;
    transactionService.accountChange.subscribe((account) => {
      this.account = account;
    });
    transactionService.payeeChange.subscribe((payee) => {
      this.payee = payee;
    });
    transactionService.fromCreditChange.subscribe((fromCredit) => {
      this.fromCredit = fromCredit;
    });
    transactionService.toCreditChange.subscribe((toCredit) => {
      this.toCredit = toCredit;
    });
    transactionService.fromCurrencyChange.subscribe((fromCurrency) => {
      this.fromCurrency = fromCurrency;
    });
    transactionService.toCurrencyChange.subscribe((toCurrency) => {
      this.toCurrency = toCurrency;
    });
    transactionService.paymentTypeChange.subscribe((paymentType) => {
      this.paymentType = paymentType;
    });
    transactionService.feesPaymentModeChange.subscribe((feesPaymentMode) => {
      this.feesPaymentMode = feesPaymentMode;
    });
    transactionService.useFeesAccountChange.subscribe((useFeesAccount) => {
      this.useFeesAccount = useFeesAccount;
    });
    transactionService.feesAccountChange.subscribe((feesAccount) => {
      this.feesAccount = feesAccount;
    });
    transactionService.exchangeRateChange.subscribe((exchangeRate) => {
      this.exchangeRate = exchangeRate;
    });
    transactionService.feesChange.subscribe((fees) => {
      this.fees = fees;
    });
  }

  isAssignedAndNumeric(value: string): boolean {
    return !!value && !isNaN(Number.parseFloat(value));
  }
}
