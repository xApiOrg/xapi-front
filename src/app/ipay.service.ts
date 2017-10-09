import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Payee } from '../models/payee';
import { Country, Field, Section } from '../models/countrySettings';
import { COUNTRY_INFO } from '../mocks/country-info.mock';
import { PAYEES } from '../mocks/payees.mock';
import { isNullOrUndefined } from 'util';
import { ACCOUNTS } from '../mocks/accounts.mock';

interface FieldResponse {
  id: number;
  title: string;
  tooltip: string;
  type: string;
  maxLength: number;
  required: boolean;
}

interface SectionResponse {
  name: string;
  fields: FieldResponse[];
}

interface CountryResponse {
  code: string;
  flag: string;
  name: string;
  sections: SectionResponse[];
}

interface AccountResponse {
  id: number;
  created: number;
  currency: string;
  balance: number;
  overDraft: number;
  type: string;
  accountDetails: string;
}

interface PayeeResponse {
  id: number;
  name: string;
  currency: string;
  country: string;
  active: boolean;
  payments: number[];
}

@Injectable()
export class IpayService {
  private apiUrl = 'http://52.56.203.3/ipay';
  private userId = 1;

  constructor(private http: HttpClient) {}

  public getCountrySettings(): Promise<Country[]> {
    return new Promise<Country[]>((resolve, reject) => {
      this.http.get<CountryResponse[]>(`INVALIDATED_${this.apiUrl}/settings/country`).subscribe(countries => {
        const ret: Country[] = [];
        countries.forEach(country => {
          const retSections: Section[] = [];
          country.sections.forEach(section => {
            const retFields: Field[] = [];
            section.fields.forEach(field => {
              retFields.push(new Field(
                field.id,
                field.title,
                field.tooltip,
                field.type,
                field.maxLength,
                field.required,
                section.name));
            });
            retSections.push(new Section(section.name, retFields, country.code));
          });
          ret.push(new Country(country.code, country.flag, country.name, retSections));
        });
        resolve(ret);
      }, error => {
        const ret: Country[] = [];
        JSON.parse(COUNTRY_INFO).forEach(country => {
          const retSections: Section[] = [];
          country.sections.forEach(section => {
            const retFields: Field[] = [];
            section.fields.forEach(field => {
              retFields.push(new Field(
                field.id,
                field.title,
                field.tooltip,
                field.type,
                field.maxLength,
                field.required,
                section.name));
            });
            retSections.push(new Section(section.name, retFields, country.code));
          });
          ret.push(new Country(country.code, country.flag, country.name, retSections));
        });
        resolve(ret);
      });
    });
  }

  public getAccounts(): Promise<Account[]> {
    return new Promise<Account[]>((resolve, reject) => {
      this.http.get<AccountResponse[]>(`INVALIDATED_${this.apiUrl}/account/${this.userId}`).subscribe((accounts) => {
        const ret: Account[] = [];
        accounts.forEach(account => {
          ret.push(new Account(
            account.currency,
            account.type,
            'es',
            account.balance,
            '1234',
            `${account.type}`
          ));
        });
        resolve(ret);
      }, (error) => {
        const ret: Account[] = [];
        ACCOUNTS.forEach(account => {
          ret.push(account);
        });
        resolve(ret);
      });
    });
  }

  public getPayees(): Promise<Payee[]> {
    return new Promise<Payee[]>((resolve, reject) => {
      this.http.get<PayeeResponse[]>(`INVALIDATED_${this.apiUrl}/account/payee/${this.userId}`).subscribe((payees) => {
        const ret: Payee[] = [];
        payees.forEach(payee => {
          ret.push(new Payee(
            payee.id,
            payee.name,
            payee.currency,
            payee.country
          ));
        });
        resolve(ret);
      }, (error) => {
        const ret: Payee[] = [];
        PAYEES.forEach(payee => {
          ret.push(new Payee(
            payee['id'],
            payee['name'],
            payee['currency'],
            payee['country']
          ));
        });
        resolve(ret);
      });
    });
  }

  getExchangeRate(from: string, to: string): Promise<number> {
    return new Promise((resolve, reject) => {
      if (!from || from.length === 0 || !to || to.length === 0) {
        reject('One or more of the provided parameters are undefined');
      } else {
        this.http.get(`https://api.fixer.io/latest?base=${from}`).subscribe((response) => {
          const exchangeRate = response['rates'][to];
          resolve(isNullOrUndefined(exchangeRate) ? 1 : exchangeRate);
        }, error => {
          resolve(1);
        });
      }
    });
  }
}
