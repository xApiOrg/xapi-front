import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {isNullOrUndefined} from 'util';

@Injectable()
export class ExchangeRateService {

  constructor(private http: Http) { }

  getExchangeRateFromToCurrency(from: string, to: string): Promise<number> {
    return new Promise((resolve, reject) => {
      if (!from || from.length === 0 || !to || to.length === 0) {
        reject('One or more of the provided parameters are undefined');
      } else {
        this.http.get(`https://api.fixer.io/latest?base=${from}`).subscribe((response) => {
          const exchangeRate = response.json().rates[to];
          resolve(isNullOrUndefined(exchangeRate) ? 1 : exchangeRate);
        }, error => {
          resolve(-1);
        });
      }
    });
  }
}
