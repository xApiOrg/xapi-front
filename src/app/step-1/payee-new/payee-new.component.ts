import { Component } from '@angular/core';
import { Payee } from '../payee';
import { Account } from '../../step-2/account';
import {NewPayeeFormService} from '../new-payee-form.service';
import {DataValidationService} from '../data-validation.service';
import {Iban} from '../iban';
import {PaymentService} from '../../step-3/payment.service';

@Component({
  selector: 'app-new-payee',
  templateUrl: './payee-new.component.html',
  styleUrls: ['./payee-new.component.css']
})
export class PayeeNewComponent {

  get savePayee(): boolean {
    return this._savePayee;
  }

  set savePayee(value: boolean) {
    this._savePayee = value;
    this.paymentService.savePayee = value;
  }

  get selection(): string {
    return this._selection;
  }

  set selection(value: string) {
    this._selection = value;
    this.displayedCountry = this.countriesMap.get(value);
    this.isDataValidated = false;
    this.iban = undefined;
    // Reset errors on all countries
    this.boundFormFieldsErrors.forEach((v, k) => this.boundFormFieldsErrors.set(k, false));
  }

  boundFormFields: object;
  boundFormFieldsErrors: Map<string, boolean>;
  flagsMap: Map<string, string>;
  countriesMap: Map<string, object>;
  displayedCountry: object;
  iban: Iban;
  isDataValidated: boolean;
  private _selection: string;
  private _savePayee = true;

  constructor(
    newPayeeService: NewPayeeFormService,
    private dataValidationService: DataValidationService,
    private paymentService: PaymentService
  ) {
    this.flagsMap = new Map();
    this.countriesMap = new Map();
    this.boundFormFields = {};
    this.boundFormFieldsErrors = new Map();
    newPayeeService.getCountryInfo().then(countriesData => {
      countriesData.forEach(country => {
        this.flagsMap.set(country['name'], country['flag']);
        this.countriesMap.set(country['name'], country);
        country['sections'].forEach(section => {
          section['fields'].forEach(field => {
            if (!!field['required'] && field['required']) {
              field['title'] += ' *';
            }
            const fieldId = this.getFieldId(country, field);
            this.boundFormFields[field['id']] = field;
            this.boundFormFieldsErrors.set(fieldId, false);
          });
        });
      });
    });
  }

  getFieldId(country, field): string {
    return country['code'] + '_' + field['id'];
  }

  getFieldError(country, field): boolean {
    return this.boundFormFieldsErrors.get(this.getFieldId(country, field));
  }

  validateSection(section): boolean {
    let sectionValid = true;
    section['fields'].forEach(field => {
      const fieldValid = this.validateField(field);
      sectionValid = sectionValid && fieldValid;
      this.boundFormFieldsErrors.set(this.getFieldId(this.displayedCountry, field), !fieldValid);
    });
    return sectionValid;
  }

  validateField(field) {
    let fieldValid = true;
    if (field['required'] !== undefined && field['required'] === true) {
      const fieldValue = this.boundFormFields[field['id']]['value'];
      fieldValid = fieldValid && fieldValue !== undefined && fieldValue.length > 0;
    }
    return fieldValid;
  }

  onPaymentSectionSubmit() {
    const paymentSection = this.displayedCountry['sections'].find(section => section['name'] === 'payment');
    const paymentData = {};
    if (this.validateSection(paymentSection)) {
      paymentSection['fields'].forEach(field => {
        paymentData[field['id']] = this.boundFormFields[field['id']]['value'];
      });
      this.dataValidationService.validate(paymentData).then(validationData => {
        this.isDataValidated = validationData['isValid'];
        const pd = validationData['details'];
        this.iban = new Iban(
          pd['account'],
          pd['address'],
          pd['bank'],
          pd['bic'],
          pd['branch'],
          pd['city'],
          pd['country'],
          pd['country_iso'],
          pd['email'],
          pd['fax'],
          pd['phone'],
          pd['state'],
          pd['www'],
          pd['zip'],
          pd['b2b'],
          pd['cor1'],
          pd['scc'],
          pd['sct'],
          pd['sdd']
        );
      });
    }
  }

  validateForm(): boolean {
    let formValid = true;
    this.displayedCountry['sections'].forEach(section => {
      formValid = formValid && this.validateSection(section);
    });
    return formValid;
  }

  submitPayee() {
    if (this.validateForm()) {
      const payee = new Payee(
        this.boundFormFields['payee-name']['value'],
        new Account(
          'EUR',
          'bank',
          this.selection,
          this.flagsMap.get(this.selection),
          1000,
          '1111-1111-1111-1111',
          'Auto generated payee'
        )
      );
      this.paymentService.payee = payee;
    }
  }
}
