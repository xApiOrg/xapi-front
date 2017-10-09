import { Component } from '@angular/core';
import { Payee } from '../../../models/payee';
import { DataValidationService } from '../../data-validation.service';
import { Iban } from '../../../models/iban';
import { PaymentService } from '../../payment.service';
import {IpayService} from '../../ipay.service';
import {Country, Field, Section} from '../../../models/countrySettings';

@Component({
  selector: 'app-new-payee',
  templateUrl: './payee-new.component.html',
  styleUrls: ['./payee-new.component.css']
})
export class PayeeNewComponent {
  private _selection: string;
  private _savePayee = true;
  private boundFormFieldsErrors: Map<string, boolean>;
  private countriesMap: Map<string, Country>;
  boundFormFields: object;
  flagsMap: Map<string, string>;
  displayedCountry: Country;
  iban: Iban;
  isDataValidated: boolean;

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

  constructor(private ipayService: IpayService,
            private dataValidationService: DataValidationService,
            private paymentService: PaymentService) {
    this.flagsMap = new Map();
    this.countriesMap = new Map();
    this.boundFormFields = {};
    this.boundFormFieldsErrors = new Map();
    ipayService.getCountrySettings().then(countries => {
      countries.forEach(country => {
        this.flagsMap.set(country.getName(), country.getFlag());
        this.countriesMap.set(country.getName(), country);
        country.getSections().forEach(section => {
          section.getFields().forEach(field => {
            const fieldId = this.getFieldId(country, field);
            this.boundFormFields[field.getId()] = field;
            this.boundFormFieldsErrors.set(fieldId, false);
          });
        });
      });
    });
  }

  getFieldId(country: Country, field: Field): string {
    return country.getCode() + '_' + field.getId();
  }

  getFieldError(country: Country, field: Field): boolean {
    return this.boundFormFieldsErrors.get(this.getFieldId(country, field));
  }

  validateSection(section: Section): boolean {
    let sectionValid = true;
    section.getFields().forEach(field => {
      const fieldValid = this.validateField(field);
      sectionValid = sectionValid && fieldValid;
      this.boundFormFieldsErrors.set(this.getFieldId(this.displayedCountry, field), !fieldValid);
    });
    return sectionValid;
  }

  validateField(field: Field) {
    let fieldValid = true;
    if (field.isRequired()) {
      const fieldValue = this.boundFormFields[field.getId()]['value'];
      fieldValid = fieldValid && fieldValue !== undefined && fieldValue.length > 0;
    }
    return fieldValid;
  }

  onFormFieldChange(field: Field) {
    if (field.getSectionName() === 'payment') {
      this.isDataValidated = false;
    }
  }

  onPaymentSectionSubmit() {
    const paymentSection = this.displayedCountry.getSections().find(section => section.getName() === 'payment');
    const paymentData = {};
    if (this.validateSection(paymentSection)) {
      paymentSection.getFields().forEach(field => {
        paymentData[field.getId()] = this.boundFormFields[field.getId()]['value'];
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
    this.displayedCountry.getSections().forEach(section => {
      formValid = formValid && this.validateSection(section);
    });
    return formValid;
  }

  submitPayee() {
    if (this.validateForm()) {
      const payee = new Payee(
        0,
        this.boundFormFields['payee-name']['value'],
        'EUR',
        this.flagsMap.get(this.selection)
      );
      this.paymentService.payee = payee;
    }
  }
}
