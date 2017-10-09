"use strict";
var account_1 = require("./account");
var Recipient = (function () {
    function Recipient(name, account) {
        if (name && account && account.getType() === account_1.Account.ACCOUNT_CASH) {
            this.name = name;
            this.account = account;
        }
        else {
            throw new DOMException();
        }
    }
    Recipient.prototype.getName = function () {
        return this.name;
    };
    Recipient.prototype.getAccount = function () {
        return new account_1.Account(this.account.getCurrency(), this.account.getType(), this.account.getBalance(), this.account.getNumber(), this.account.getName());
    };
    return Recipient;
}());
exports.Recipient = Recipient;
//# sourceMappingURL=payee.js.map
