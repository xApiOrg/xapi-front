import { Pipe, PipeTransform } from '@angular/core';
import {getSymbolFromCurrency} from '../../assets/libs/currency-symbol-map/currency-symbol-map';

@Pipe({
  name: 'currencySymbol'
})
export class CurrencySymbolPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const currencySymbol = getSymbolFromCurrency(value);
    return !!currencySymbol ? currencySymbol : value;
  }
}
