"use strict";
var Account = (function () {
    function Account(currencyType, accountType, credit, number, name) {
        if (Account.CURRENCY_TYPES.has(currencyType) &&
            Account.ACCOUNT_TYPES.has(accountType) &&
            name && name.trim().length !== 0 &&
            number && number.trim().length !== 0) {
            this.currencyType = currencyType;
            this.accountType = accountType;
            this.credit = credit;
            this.number = number;
            this.name = name;
        }
        else {
            throw new DOMException();
        }
    }
    Account.prototype.getCurrency = function () {
        return this.currencyType;
    };
    Account.prototype.getType = function () {
        return this.accountType;
    };
    Account.prototype.getBalance = function () {
        return this.credit;
    };
    Account.prototype.getNumber = function () {
        return this.number;
    };
    Account.prototype.getDescription = function () {
        return this.name;
    };
    Account.prototype.getCurrencySymbol = function () {
        return Account.CURRENCY_TYPES.get(this.currencyType);
    };
    Account.prototype.getIcon = function () {
        return Account.ACCOUNT_TYPES.get(this.accountType);
    };
    Account.prototype.getLastDigits = function () {
        return this.number.substring(this.number.length - 4, this.number.length);
    };
    Account.prototype.addBalance = function (amount) {
        this.credit += amount;
    };
    Account.prototype.takeBalance = function (amount) {
        this.credit -= amount;
    };
    return Account;
}());
Account.ACCOUNT_CASH = 'bank';
Account.ACCOUNT_CURRENT = 'card';
Account.CURRENCY_TYPES = new Map()
    .set('GBP', '£')
    .set('EUR', '€');
Account.ACCOUNT_TYPES = new Map()
    .set(Account.ACCOUNT_CASH, 'glyphicon-piggy-bank')
    .set(Account.ACCOUNT_CURRENT, 'glyphicon-credit-card');
exports.Account = Account;
//# sourceMappingURL=account.js.map
