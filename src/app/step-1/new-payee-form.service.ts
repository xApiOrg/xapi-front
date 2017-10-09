import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {COUNTRY_INFO} from '../../mocks/country-info.mock';

@Injectable()
export class NewPayeeFormService {

  constructor(private http: Http) {
  }

  public getCountryInfo(): Promise<Object[]> {
    return new Promise(resolve => {
      this.http.get('http://fwafawgvirtserver.swaggerhub.com/PabloNS/xApiFinal/1.0.0/settings/country').subscribe(data => {
        resolve(data.json());
      }, error => {
        resolve(JSON.parse(COUNTRY_INFO));
      });
    });
  };
}
