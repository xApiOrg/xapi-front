import {CURRENCY_MAP} from './map';
const currencySymbolMap = CURRENCY_MAP;

export const getSymbolFromCurrency = function (currencyCode) {
  if (typeof currencyCode !== 'string') {
    return undefined;
  }
  const code = currencyCode.toUpperCase();
  if (!currencySymbolMap.hasOwnProperty(code)) {
    return undefined;
  }
  return currencySymbolMap[code];
};
