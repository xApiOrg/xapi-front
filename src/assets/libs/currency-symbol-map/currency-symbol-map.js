import {CURRENCY_MAP} from "./map";
var currencySymbolMap = CURRENCY_MAP;

export const getSymbolFromCurrency = function (currencyCode) {
  if (typeof currencyCode !== 'string') return undefined;
  var code = currencyCode.toUpperCase();
  if (!currencySymbolMap.hasOwnProperty(code)) return undefined;
  return currencySymbolMap[code];
}
