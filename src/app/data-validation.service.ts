import { Injectable } from '@angular/core';

@Injectable()
export class DataValidationService {

  public validate(paymentData): Promise<object> {
    return new Promise(resolve => {
      resolve(JSON.parse(`
        {
          "isValid": true,
          "details": {
            "account": "test",
            "address": "test",
            "bank": "test",
            "bic": "test",
            "branch": "test",
            "city": "test",
            "country": "test",
            "country_iso": "test",
            "email": "",
            "fax": "",
            "phone": "",
            "state": "",
            "www": "",
            "zip": "",
            "b2b": "",
            "cor1": "",
            "scc": "",
            "sct": "",
            "sdd": ""
          }
        }
      `));
    });
  }

}
