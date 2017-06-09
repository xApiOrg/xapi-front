webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
var Account = (function () {
    function Account(currencyType, accountType, country, countryCode, credit, number, name) {
        this.currencyType = currencyType;
        this.accountType = accountType;
        this.country = country;
        this.countryCode = countryCode;
        this.credit = credit;
        this.number = number;
        this.name = name;
    }
    Account.prototype.getCurrencyType = function () {
        return this.currencyType.toLowerCase();
    };
    Account.prototype.getAccountType = function () {
        return this.accountType;
    };
    Account.prototype.getCountry = function () {
        return this.country.toLowerCase();
    };
    Account.prototype.getCountryCode = function () {
        return this.countryCode.toLowerCase();
    };
    Account.prototype.getCredit = function () {
        return this.credit;
    };
    Account.prototype.getNumber = function () {
        return this.number;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.getAccountTypeIcon = function () {
        return Account.ACCOUNT_TYPES.get(this.accountType);
    };
    Account.prototype.getLastDigits = function () {
        return this.number.substring(this.number.length - 4, this.number.length);
    };
    Account.prototype.addCredit = function (amount) {
        this.credit += amount;
    };
    Account.prototype.takeCredit = function (amount) {
        this.credit -= amount;
    };
    return Account;
}());

Account.ACCOUNT_BANK = 'bank';
Account.ACCOUNT_CARD = 'card';
Account.ACCOUNT_TYPES = new Map()
    .set(Account.ACCOUNT_BANK, 'glyphicon-piggy-bank')
    .set(Account.ACCOUNT_CARD, 'glyphicon-credit-card');
//# sourceMappingURL=account.js.map

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payee; });

var Payee = (function () {
    function Payee(name, account) {
        this.name = name;
        this.account = account;
    }
    Payee.prototype.getName = function () {
        return this.name;
    };
    Payee.prototype.getAccount = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__account__["a" /* Account */](this.account.getCurrencyType(), this.account.getAccountType(), this.account.getCountry(), this.account.getCountryCode(), this.account.getCredit(), this.account.getNumber(), this.account.getName());
    };
    return Payee;
}());

//# sourceMappingURL=payee.js.map

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_currency_symbols_map__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySymbolsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CurrencySymbolsService = (function () {
    function CurrencySymbolsService() {
        this.currencySymbolsMap = __WEBPACK_IMPORTED_MODULE_1__constants_currency_symbols_map__["a" /* MAP */];
    }
    CurrencySymbolsService.prototype.getSymbolFor = function (currency) {
        return this.currencySymbolsMap[currency.toUpperCase()];
    };
    return CurrencySymbolsService;
}());
CurrencySymbolsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CurrencySymbolsService);

//# sourceMappingURL=currency-symbols.service.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberFormattingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberFormattingService = (function () {
    function NumberFormattingService() {
        this.language = navigator.language;
    }
    NumberFormattingService.prototype.parseNumber = function (number) {
        var lastIndexDot = number.lastIndexOf('.');
        var firstIndexDot = number.indexOf('.');
        var lastIndexComa = number.lastIndexOf(',');
        var firstIndexComa = number.indexOf(',');
        if (lastIndexDot !== -1 && lastIndexComa !== -1) {
            if (lastIndexDot > lastIndexComa) {
                number = number.replace(/,/gi, '');
            }
            else if (lastIndexDot < lastIndexComa) {
                number = number.replace(/\./gi, '').replace(',', '.');
            }
        }
        else {
            if (firstIndexDot !== lastIndexDot) {
                number = number.replace(/\./g, '');
            }
            if (firstIndexComa !== -1 && firstIndexComa === lastIndexComa) {
                number = number.replace(',', '.');
            }
            else {
                number = number.replace(/,/g, '');
            }
        }
        return Number.parseFloat(number);
    };
    NumberFormattingService.prototype.toLocaleString = function (num, minimumFractionDigits, maximumFractionDigits) {
        var options = {};
        if (!!minimumFractionDigits) {
            options['minimumFractionDigits'] = minimumFractionDigits;
        }
        if (!!maximumFractionDigits) {
            options['maximumFractionDigits'] = maximumFractionDigits;
        }
        return num.toLocaleString(this.language, options);
    };
    return NumberFormattingService;
}());
NumberFormattingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NumberFormattingService);

//# sourceMappingURL=number-formatting.service.js.map

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PopupService = (function () {
    function PopupService() {
    }
    PopupService.prototype.setOnOptionChangeListener = function (showListener) {
        this.onOptionChange = showListener;
    };
    PopupService.prototype.changeOption = function (optionName) {
        if (!!this.onOptionChange) {
            this.onOptionChange(optionName);
        }
    };
    PopupService.prototype.setOnVisibilityChangeListener = function (visibilityListener) {
        this.onVisibilityChange = visibilityListener;
    };
    PopupService.prototype.changeVisibility = function (isVisible) {
        if (!!this.onVisibilityChange) {
            this.onVisibilityChange(isVisible);
        }
    };
    return PopupService;
}());
PopupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], PopupService);

//# sourceMappingURL=popup.service.js.map

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepManagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StepManagerService = (function () {
    function StepManagerService() {
    }
    StepManagerService.prototype.setGoToStepListener = function (goToStepListener) {
        this.goToStepListener = goToStepListener;
    };
    StepManagerService.prototype.setDoProgressListener = function (doProgressListener) {
        this.doProgressListener = doProgressListener;
    };
    StepManagerService.prototype.goToStep = function (stepName) {
        if (!!this.goToStepListener) {
            this.goToStepListener(stepName);
        }
    };
    StepManagerService.prototype.doProgress = function (stepName) {
        this.doProgressListener(stepName);
    };
    return StepManagerService;
}());
StepManagerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], StepManagerService);

//# sourceMappingURL=step-manager.service.js.map

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StepSelection; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepComponent = (function () {
    function StepComponent() {
        this.stepClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    Object.defineProperty(StepComponent.prototype, "isSelected", {
        // isSelected getter and setter
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            var _this = this;
            this._isSelected = value;
            this._contentEl.nativeElement.style.overflowY = '';
            setTimeout(function () {
                if (_this._isSelected === true) {
                    _this._contentEl.nativeElement.style.overflowY = 'visible';
                }
            }, 500);
        },
        enumerable: true,
        configurable: true
    });
    StepComponent.prototype.getName = function () {
        return this.name;
    };
    return StepComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], StepComponent.prototype, "isLastStep", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], StepComponent.prototype, "isTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], StepComponent.prototype, "stepIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], StepComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], StepComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], StepComponent.prototype, "selectedProperties", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], StepComponent.prototype, "_contentEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], StepComponent.prototype, "stepClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], StepComponent.prototype, "isSelected", null);
StepComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-step',
        template: __webpack_require__(216),
        styles: [__webpack_require__(192)]
    })
], StepComponent);

var StepSelection = (function () {
    function StepSelection(propertyName, propertyValue) {
        this.propertyName = propertyName;
        this.propertyValue = propertyValue;
    }
    return StepSelection;
}());

var _a, _b;
//# sourceMappingURL=step.component.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransactionService = (function () {
    function TransactionService() {
        this.onFinalAmountChangeListener = [];
        this.onTransferAmountChangeListener = [];
        this.onPaymentTypeChangeListener = [];
        this.onFromCurrencyChangeListener = [];
        this.onToCurrencyChangeListener = [];
    }
    Object.defineProperty(TransactionService.prototype, "finalAmount", {
        get: function () {
            return this._finalAmount;
        },
        set: function (value) {
            this._finalAmount = value;
            for (var i = 0; i < this.onFinalAmountChangeListener.length; i++) {
                this.onFinalAmountChangeListener[i](value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionService.prototype, "transferAmount", {
        get: function () {
            return this._transferAmount;
        },
        set: function (value) {
            this._transferAmount = value;
            for (var i = 0; i < this.onTransferAmountChangeListener.length; i++) {
                this.onTransferAmountChangeListener[i](value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionService.prototype, "paymentType", {
        get: function () {
            return this._paymentType;
        },
        set: function (value) {
            this._paymentType = value;
            for (var i = 0; i < this.onPaymentTypeChangeListener.length; i++) {
                this.onPaymentTypeChangeListener[i](value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionService.prototype, "toCurrency", {
        get: function () {
            return this._toCurrency;
        },
        set: function (value) {
            this._toCurrency = value;
            for (var i = 0; i < this.onToCurrencyChangeListener.length; i++) {
                this.onToCurrencyChangeListener[i](value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionService.prototype, "fromCurrency", {
        get: function () {
            return this._fromCurrency;
        },
        set: function (value) {
            this._fromCurrency = value;
            for (var i = 0; i < this.onFromCurrencyChangeListener.length; i++) {
                this.onFromCurrencyChangeListener[i](value);
            }
        },
        enumerable: true,
        configurable: true
    });
    TransactionService.prototype.addOnFinalAmountChangeListener = function (listener) {
        this.onFinalAmountChangeListener.push(listener);
    };
    TransactionService.prototype.addOnTransferAmountChangeListener = function (listener) {
        this.onTransferAmountChangeListener.push(listener);
    };
    TransactionService.prototype.addOnPaymentTypeChangeListener = function (listener) {
        this.onPaymentTypeChangeListener.push(listener);
    };
    TransactionService.prototype.addOnFromCurrencyChangeListener = function (listener) {
        this.onFromCurrencyChangeListener.push(listener);
    };
    TransactionService.prototype.addOnToCurrencyChangeListener = function (listener) {
        this.onToCurrencyChangeListener.push(listener);
    };
    return TransactionService;
}());
TransactionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], TransactionService);

//# sourceMappingURL=transaction.service.js.map

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupOptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupOptionComponent = (function () {
    function PopupOptionComponent() {
    }
    PopupOptionComponent.prototype.getName = function () {
        return this.name;
    };
    PopupOptionComponent.prototype.show = function () {
        if (!this.isVisible) {
            this.isVisible = true;
        }
    };
    PopupOptionComponent.prototype.hide = function () {
        if (this.isVisible) {
            this.isVisible = false;
        }
    };
    PopupOptionComponent.prototype.getTitle = function () {
        return this.title;
    };
    return PopupOptionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], PopupOptionComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], PopupOptionComponent.prototype, "title", void 0);
PopupOptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-popup-option',
        template: __webpack_require__(209),
        styles: [__webpack_require__(185)]
    })
], PopupOptionComponent);

//# sourceMappingURL=popup-option.component.js.map

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RbComponent = (function () {
    function RbComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    return RbComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], RbComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], RbComponent.prototype, "isSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], RbComponent.prototype, "onClick", void 0);
RbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-rb',
        template: __webpack_require__(212),
        styles: [__webpack_require__(188)]
    })
], RbComponent);

var _a;
//# sourceMappingURL=rb.component.js.map

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = (function () {
    function TabComponent() {
        this._isSelected = false;
        this._hasSelection = false;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    return TabComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], TabComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "_isSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "_hasSelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], TabComponent.prototype, "hasSelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], TabComponent.prototype, "isSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], TabComponent.prototype, "isFirst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "onClick", void 0);
TabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-tab',
        template: __webpack_require__(217),
        styles: [__webpack_require__(193)]
    })
], TabComponent);

//# sourceMappingURL=tab.component.js.map

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_payee__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_account__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAYEES; });


var PAYEES = [
    new __WEBPACK_IMPORTED_MODULE_0__models_payee__["a" /* Payee */]('dadwd Shelton', new __WEBPACK_IMPORTED_MODULE_1__models_account__["a" /* Account */]('GBP', 'bank', 'United Kingdom', 'gb', 201, '1111-1111-1111-1111', 'Spare Money')),
    new __WEBPACK_IMPORTED_MODULE_0__models_payee__["a" /* Payee */]('Roderick Shelton', new __WEBPACK_IMPORTED_MODULE_1__models_account__["a" /* Account */]('EUR', 'bank', 'Spain', 'es', 1000, '1111-1111-1111-1111', 'Main Account')),
    new __WEBPACK_IMPORTED_MODULE_0__models_payee__["a" /* Payee */]('Roderick Shelton', new __WEBPACK_IMPORTED_MODULE_1__models_account__["a" /* Account */]('GBP', 'bank', 'United States', 'us', 201, '1111-1111-1111-1111', 'Spare Money')),
    new __WEBPACK_IMPORTED_MODULE_0__models_payee__["a" /* Payee */]('Roderick Shelton', new __WEBPACK_IMPORTED_MODULE_1__models_account__["a" /* Account */]('GBP', 'card', 'United States', 'us', 999, '1111-1111-1111-1523', 'Debit Card')),
    new __WEBPACK_IMPORTED_MODULE_0__models_payee__["a" /* Payee */]('Roderick Shelton', new __WEBPACK_IMPORTED_MODULE_1__models_account__["a" /* Account */]('EUR', 'bank', 'Spain', 'es', 1000, '1111-1111-1111-1111', 'Main Account'))
];
//# sourceMappingURL=payee.mock.js.map

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iban; });
var Iban = (function () {
    function Iban(account, address, bank, bic, branch, city, country, country_iso, email, fax, phone, state, www, zip, b2b, cor1, scc, sct, sdd) {
        this.account = account;
        this.address = address;
        this.bank = bank;
        this.bic = bic;
        this.branch = branch;
        this.city = city;
        this.country = country;
        this.country_iso = country_iso;
        this.email = email;
        this.fax = fax;
        this.phone = phone;
        this.state = state;
        this.www = www;
        this.zip = zip;
        this.b2b = b2b;
        this.cor1 = cor1;
        this.scc = scc;
        this.sct = sct;
        this.sdd = sdd;
    }
    return Iban;
}());

//# sourceMappingURL=iban.js.map

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(117);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_account_mock__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_account__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountSelectorComponent = (function () {
    function AccountSelectorComponent() {
        var _this = this;
        this.accounts = __WEBPACK_IMPORTED_MODULE_1__mocks_account_mock__["a" /* ACCOUNTS */];
        this.listOffset = 0;
        this.selectedAccountChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        setInterval(function () {
            _this.onWindowResize();
        }, 100);
    }
    Object.defineProperty(AccountSelectorComponent.prototype, "selectedAccount", {
        // selectedAccount setter and getter
        get: function () {
            return this._selectedAccount;
        },
        set: function (account) {
            this._selectedAccount = account;
            this.selectedAccountChange.emit(this._selectedAccount);
        },
        enumerable: true,
        configurable: true
    });
    // callback after the content has been rendered
    AccountSelectorComponent.prototype.ngAfterContentChecked = function () {
        this.listWidth = 160 * this.accounts.length - 10;
        this.updateComputedValues();
    };
    // callback after the window has changed its dimensions
    AccountSelectorComponent.prototype.onWindowResize = function () {
        this.updateComputedValues();
    };
    Object.defineProperty(AccountSelectorComponent.prototype, "isScrollNeeded", {
        // isScrollNeeded getter and setter
        get: function () {
            return this._isScrollNeeded;
        },
        set: function (value) {
            this._isScrollNeeded = value;
            if (!value) {
                this.accountList.nativeElement.style.marginLeft = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    // method used to update the list container width and determine whether or not scrolling is needed
    AccountSelectorComponent.prototype.updateComputedValues = function () {
        this.listContainerWidth = Number.parseFloat(window.getComputedStyle(this.accountListContainer.nativeElement).width);
        this.isScrollNeeded = this.listWidth > this.listContainerWidth;
    };
    // method used to scroll the list by manipulating its left margin using negative values
    AccountSelectorComponent.prototype.scrollList = function (direction) {
        this.listOffset += Math.round(this.listContainerWidth / 2) * direction;
        var maxOffset = this.listWidth + 20 - this.listContainerWidth;
        var offsetIsOverTheLimit = this.listOffset > maxOffset;
        var offsetUnderZero = this.listOffset < 0;
        this.listOffset = offsetIsOverTheLimit ? maxOffset : offsetUnderZero ? 0 : this.listOffset;
        this.accountList.nativeElement.style.marginLeft = -this.listOffset + "px";
    };
    return AccountSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('accountList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], AccountSelectorComponent.prototype, "accountList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('accountListContainer'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], AccountSelectorComponent.prototype, "accountListContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */]) === "function" && _c || Object),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */]) === "function" && _d || Object])
], AccountSelectorComponent.prototype, "selectedAccount", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _e || Object)
], AccountSelectorComponent.prototype, "selectedAccountChange", void 0);
AccountSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-account-selector',
        template: __webpack_require__(197),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], AccountSelectorComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=account-selector.component.js.map

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_account__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currency_symbols_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number_formatting_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountComponent = (function () {
    function AccountComponent(currencySymbolsService, numberFormattingService) {
        this.css = currencySymbolsService;
        this.nfs = numberFormattingService;
    }
    return AccountComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_account__["a" /* Account */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_account__["a" /* Account */]) === "function" && _a || Object)
], AccountComponent.prototype, "account", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], AccountComponent.prototype, "accountSelected", void 0);
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-account',
        template: __webpack_require__(198),
        styles: [__webpack_require__(174)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* trigger */])('headerState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('selected', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({
                    background: '#FF0000',
                    color: 'white'
                }))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__currency_symbols_service__["a" /* CurrencySymbolsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__currency_symbols_service__["a" /* CurrencySymbolsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__number_formatting_service__["a" /* NumberFormattingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__number_formatting_service__["a" /* NumberFormattingService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step_manager_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step_step_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currency_symbols_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(popupService, stepManagerService, transactionService, currencySymbolsService) {
        var _this = this;
        this.payeeSelectedProperties = [];
        this.accountSelectedProperties = [];
        this.formSelectedProperties = [];
        this.configurationsSelectedProperties = [];
        this.popupService = popupService;
        this.stepManagerService = stepManagerService;
        this.currencySymbolsService = currencySymbolsService;
        transactionService.addOnFinalAmountChangeListener(function (finalAmount) {
            _this.transactionFinalAmount = finalAmount;
            _this.updateFormSelectedProperties();
        });
        transactionService.addOnTransferAmountChangeListener(function (transferAmount) {
            _this.transactionTransferAmount = transferAmount;
            _this.updateFormSelectedProperties();
        });
        transactionService.addOnPaymentTypeChangeListener(function (paymentType) {
            _this.transactionPaymentType = paymentType;
            _this.updateFormSelectedProperties();
        });
        transactionService.addOnFromCurrencyChangeListener(function (currency) {
            _this.transactionFromCurrency = currency;
            _this.updateFormSelectedProperties();
        });
        transactionService.addOnToCurrencyChangeListener(function (currency) {
            _this.transactionToCurrency = currency;
            _this.updateFormSelectedProperties();
        });
    }
    Object.defineProperty(AppComponent.prototype, "payee", {
        // payee setter and getter
        get: function () {
            return this._payee;
        },
        set: function (value) {
            this._payee = value;
            if (!!value) {
                this.payeeSelectedProperties = [
                    new __WEBPACK_IMPORTED_MODULE_3__step_step_component__["b" /* StepSelection */](this.capitalizeString(value.getName()), "(" + this.capitalizeString(value.getAccount().getCountry()) + ")"),
                ];
                this.stepManagerService.doProgress('accountSelect');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "account", {
        // account getter and setter
        get: function () {
            return this._account;
        },
        set: function (value) {
            this._account = value;
            if (!!value) {
                this.accountSelectedProperties = [
                    new __WEBPACK_IMPORTED_MODULE_3__step_step_component__["b" /* StepSelection */](value.getName(), "(" + value.getLastDigits() + ") " + value.getCurrencyType().toUpperCase())
                ];
                this.stepManagerService.doProgress('formFill');
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.updateFormSelectedProperties = function () {
        if (!this.transactionToCurrency || !this.transactionFromCurrency || !this.payee ||
            !this.transactionFinalAmount || !this.transactionTransferAmount) {
            return;
        }
        var finalAmount = this.currencySymbolsService.getSymbolFor(this.transactionFromCurrency) +
            this.transactionTransferAmount.toString();
        var transferAmount = this.currencySymbolsService.getSymbolFor(this.transactionToCurrency) +
            this.transactionFinalAmount.toString();
        var payeeName = this.payee.getName();
        this.formSelectedProperties = [
            new __WEBPACK_IMPORTED_MODULE_3__step_step_component__["b" /* StepSelection */]("" + finalAmount, "(" + this.transactionPaymentType + ") " + transferAmount + " => " + payeeName)
        ];
    };
    AppComponent.prototype.capitalizeString = function (value) {
        var splits = value.split(' ');
        var retString = '';
        for (var i = 0; i < splits.length; i++) {
            retString += splits[i].charAt(0).toUpperCase() + splits[i].substr(1, splits[i].length - 1) + ' ';
        }
        return retString.trim();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(199),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__popup_service__["a" /* PopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__popup_service__["a" /* PopupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__step_manager_service__["a" /* StepManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__step_manager_service__["a" /* StepManagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__transaction_service__["a" /* TransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__transaction_service__["a" /* TransactionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__currency_symbols_service__["a" /* CurrencySymbolsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__currency_symbols_service__["a" /* CurrencySymbolsService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_selector_account_selector_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flags_dropdown_flags_dropdown_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__iban_iban_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_payee_new_payee_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__payee_payee_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recipient_selector_recipient_selector_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__step_step_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__transfer_transfer_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__smooth_fade_directive__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tabs_manager_tabs_manager_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tab_tab_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__currency_symbols_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__popup_popup_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__popup_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__popup_option_popup_option_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__transaction_review_transaction_review_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__step_manager_step_manager_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__step_manager_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__rb_rb_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__cb_cb_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__rb_group_rb_group_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__calendar_calendar_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__expandable_box_expandable_box_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__step_selection_step_selection_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__transaction_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__number_formatting_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__money_input_money_input_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__input_input_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_6__account_selector_account_selector_component__["a" /* AccountSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__flags_dropdown_flags_dropdown_component__["a" /* FlagsDropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_8__iban_iban_component__["a" /* IbanComponent */],
            __WEBPACK_IMPORTED_MODULE_9__new_payee_new_payee_component__["a" /* NewRecipientComponent */],
            __WEBPACK_IMPORTED_MODULE_10__payee_payee_component__["a" /* PayeeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__recipient_selector_recipient_selector_component__["a" /* RecipientSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_12__step_step_component__["a" /* StepComponent */],
            __WEBPACK_IMPORTED_MODULE_13__transfer_transfer_component__["a" /* TransferComponent */],
            __WEBPACK_IMPORTED_MODULE_14__smooth_fade_directive__["a" /* SmoothFadeDirective */],
            __WEBPACK_IMPORTED_MODULE_16__tabs_manager_tabs_manager_component__["a" /* TabsManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_17__tab_tab_component__["a" /* TabComponent */],
            __WEBPACK_IMPORTED_MODULE_19__popup_popup_component__["a" /* PopupComponent */],
            __WEBPACK_IMPORTED_MODULE_21__popup_option_popup_option_component__["a" /* PopupOptionComponent */],
            __WEBPACK_IMPORTED_MODULE_22__transaction_review_transaction_review_component__["a" /* TransactionReviewComponent */],
            __WEBPACK_IMPORTED_MODULE_23__step_manager_step_manager_component__["a" /* StepManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_25__rb_rb_component__["a" /* RbComponent */],
            __WEBPACK_IMPORTED_MODULE_26__cb_cb_component__["a" /* CbComponent */],
            __WEBPACK_IMPORTED_MODULE_27__rb_group_rb_group_component__["a" /* RbGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_28__calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_29__expandable_box_expandable_box_component__["a" /* ExpandableBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_30__step_selection_step_selection_component__["a" /* StepSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_33__money_input_money_input_component__["a" /* MoneyInputComponent */],
            __WEBPACK_IMPORTED_MODULE_34__input_input_component__["a" /* InputComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__currency_symbols_service__["a" /* CurrencySymbolsService */],
            __WEBPACK_IMPORTED_MODULE_20__popup_service__["a" /* PopupService */],
            __WEBPACK_IMPORTED_MODULE_24__step_manager_service__["a" /* StepManagerService */],
            __WEBPACK_IMPORTED_MODULE_31__transaction_service__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_32__number_formatting_service__["a" /* NumberFormattingService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = (function () {
    function CalendarComponent() {
        var _this = this;
        this.DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
            'November', 'December'];
        this.currentDate = new Date();
        this.selectedDate = new Date();
        this.isEnglishCalendar = true;
        this.isShowingPopup = false;
        this.isDraggingMouse = false;
        document.addEventListener('mouseup', function () {
            _this.isShowingPopup = _this.isShowingPopup && _this.isDraggingMouse;
        }, true);
    }
    CalendarComponent.prototype.getDayNames = function () {
        var days = [];
        var index = this.isEnglishCalendar ? 0 : 1;
        for (var i = 0; i < 7; i++) {
            days.push(this.DAYS[index]);
            index = !this.DAYS[index + 1] ? 0 : index + 1;
        }
        return days;
    };
    CalendarComponent.prototype.getDayOfMonth = function () {
        return this.currentDate.getDate();
    };
    CalendarComponent.prototype.setDayOfMonth = function (day) {
        this.currentDate.setDate(day);
    };
    CalendarComponent.prototype.getStartDay = function () {
        var date = new Date(this.currentDate);
        date.setDate(1);
        return date.getDay();
    };
    CalendarComponent.prototype.getStartingDays = function () {
        var days = [];
        var date = new Date(this.currentDate);
        date.setDate(0);
        var startDay = this.isEnglishCalendar ? this.getStartDay() - 1 : this.getStartDay() - 2;
        date.setDate(date.getDate() - startDay);
        for (var i = 0; i < startDay + 1; date.setDate(date.getDate() + 1), i++) {
            days.push(date.getDate());
        }
        return days;
    };
    CalendarComponent.prototype.getEndingDay = function () {
        var date = new Date(this.currentDate);
        date.setDate(1);
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        return date.getDay();
    };
    CalendarComponent.prototype.getEndingDays = function () {
        var days = [];
        var date = new Date(this.currentDate);
        date.setDate(1);
        date.setMonth(date.getMonth() + 1);
        var lastDayOfWeek = this.isEnglishCalendar ? 6 : 7;
        for (var i = this.getEndingDay(); i < lastDayOfWeek; date.setDate(date.getDate() + 1), i++) {
            days.push(date.getDate());
        }
        return days;
    };
    CalendarComponent.prototype.getDaysOfMonth = function () {
        var days = [];
        var date = new Date(this.currentDate);
        date.setDate(1);
        days.push(1);
        date.setDate(2);
        for (var i = 2; date.getDate() !== 1; date.setDate(++i)) {
            days.push(i);
        }
        return days;
    };
    CalendarComponent.prototype.moveMonthRelative = function (displacement) {
        this.currentDate.setMonth(this.currentDate.getMonth() + displacement);
    };
    CalendarComponent.prototype.getMonthName = function () {
        return this.MONTHS[this.currentDate.getMonth()];
    };
    CalendarComponent.prototype.getYear = function () {
        return this.currentDate.getFullYear();
    };
    CalendarComponent.prototype.moveYearRelative = function (displacement) {
        this.currentDate.setFullYear(this.currentDate.getFullYear() + displacement);
    };
    CalendarComponent.prototype.onDayClick = function (day) {
        this.selectedDate = new Date(this.currentDate);
        this.selectedDate.setDate(day);
    };
    CalendarComponent.prototype.isDaySelected = function (day) {
        return day === this.selectedDate.getDate() && this.currentDate.getMonth() === this.selectedDate.getMonth() &&
            this.currentDate.getFullYear() === this.selectedDate.getFullYear();
    };
    CalendarComponent.prototype.toggleIsShowingPopup = function () {
        this.isShowingPopup = !this.isShowingPopup;
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-calendar',
        template: __webpack_require__(200),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);

//# sourceMappingURL=calendar.component.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CbComponent = (function () {
    function CbComponent() {
    }
    CbComponent.prototype.ngOnInit = function () {
    };
    return CbComponent;
}());
CbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-cb',
        template: __webpack_require__(201),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], CbComponent);

//# sourceMappingURL=cb.component.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeRateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExchangeRateService = (function () {
    function ExchangeRateService(http) {
        this.http = http;
    }
    ExchangeRateService.prototype.getExchangeRateFromToCurrency = function (from, to) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("http://api.fixer.io/latest?base=" + from).subscribe(function (response) {
                resolve(response.json().rates[to]);
            });
        });
    };
    return ExchangeRateService;
}());
ExchangeRateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ExchangeRateService);

var _a;
//# sourceMappingURL=exchange-rate.service.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableBoxComponent = (function () {
    function ExpandableBoxComponent() {
    }
    ExpandableBoxComponent.prototype.toggleBody = function () {
        this.isBodyVisible = !this.isBodyVisible;
    };
    return ExpandableBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ExpandableBoxComponent.prototype, "title", void 0);
ExpandableBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-expandable-box',
        template: __webpack_require__(202),
        styles: [__webpack_require__(178)]
    })
], ExpandableBoxComponent);

//# sourceMappingURL=expandable-box.component.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlagsDropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlagsDropdownComponent = (function () {
    function FlagsDropdownComponent() {
        var _this = this;
        this.isShowingList = false;
        this.allowSelection = true;
        this.selectedKeyChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        document.addEventListener('mouseup', function () {
            _this.isShowingList = false;
        }, true);
    }
    Object.defineProperty(FlagsDropdownComponent.prototype, "selectedKey", {
        // selectedCurrency getter and setter
        get: function () {
            return this._selectedKey;
        },
        set: function (val) {
            this._selectedKey = val;
            this.selectedKeyChange.emit(this._selectedKey);
        },
        enumerable: true,
        configurable: true
    });
    FlagsDropdownComponent.prototype.getFlagName = function () {
        var selectedFlag = this.keysAndFlagsMap.get(this._selectedKey);
        return selectedFlag ? selectedFlag : '';
    };
    FlagsDropdownComponent.prototype.getSelectedKey = function () {
        return this.selectedKey ? this.selectedKey.toUpperCase() : 'Select a ' + this.flagType;
    };
    FlagsDropdownComponent.prototype.toggleList = function () {
        if (this.allowSelection) {
            this.isShowingList = !this.isShowingList;
        }
    };
    FlagsDropdownComponent.prototype.hasSelection = function () {
        return !!this._selectedKey && this._selectedKey.length !== 0;
    };
    return FlagsDropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FlagsDropdownComponent.prototype, "keysAndFlagsMap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FlagsDropdownComponent.prototype, "allowSelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], FlagsDropdownComponent.prototype, "flagType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FlagsDropdownComponent.prototype, "selectedKey", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], FlagsDropdownComponent.prototype, "selectedKeyChange", void 0);
FlagsDropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-flags-dropdown',
        template: __webpack_require__(203),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], FlagsDropdownComponent);

var _a;
//# sourceMappingURL=flags-dropdown.component.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_iban__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IbanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IbanComponent = (function () {
    function IbanComponent() {
        this.isValidChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    Object.defineProperty(IbanComponent.prototype, "iban", {
        // iban setter and getter
        get: function () {
            return this._iban;
        },
        set: function (value) {
            this._iban = value;
            this.isValid = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IbanComponent.prototype, "isValid", {
        // isValid setter and getter
        get: function () {
            return this._isValid;
        },
        set: function (value) {
            this._isValid = value;
            this.isValidChange.emit(this._isValid);
        },
        enumerable: true,
        configurable: true
    });
    return IbanComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_iban__["a" /* Iban */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_iban__["a" /* Iban */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models_iban__["a" /* Iban */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_iban__["a" /* Iban */]) === "function" && _b || Object])
], IbanComponent.prototype, "iban", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], IbanComponent.prototype, "isValid", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], IbanComponent.prototype, "isValidChange", void 0);
IbanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-iban',
        template: __webpack_require__(204),
        styles: [__webpack_require__(180)]
    })
], IbanComponent);

var _a, _b;
//# sourceMappingURL=iban.component.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = (function () {
    function InputComponent() {
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.placeholder = 'value placeholder';
    }
    Object.defineProperty(InputComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.valueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    return InputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], InputComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], InputComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], InputComponent.prototype, "placeholder", void 0);
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-input',
        template: __webpack_require__(205),
        styles: [__webpack_require__(181)]
    })
], InputComponent);

var _a;
//# sourceMappingURL=input.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number_formatting_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoneyInputComponent = (function () {
    function MoneyInputComponent(numberFormattingService) {
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.nfs = numberFormattingService;
    }
    Object.defineProperty(MoneyInputComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (!value || value.length === 0) {
                value = '0';
            }
            this._value = value;
            this.valueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    MoneyInputComponent.prototype.onBlur = function () {
        if (!this.value || this.value.length === 0) {
            this.value = '0';
        }
        else {
            console.log('DE: ' + this.nfs.toLocaleString(this.nfs.parseNumber(this.value), 2, 2));
            this.value = this.nfs.toLocaleString(this.nfs.parseNumber(this.value), 2, 2);
        }
    };
    return MoneyInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MoneyInputComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], MoneyInputComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], MoneyInputComponent.prototype, "currency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], MoneyInputComponent.prototype, "placeholder", void 0);
MoneyInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-money-input',
        template: __webpack_require__(206),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__number_formatting_service__["a" /* NumberFormattingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__number_formatting_service__["a" /* NumberFormattingService */]) === "function" && _b || Object])
], MoneyInputComponent);

var _a, _b;
//# sourceMappingURL=money-input.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_payee__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_account__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_iban_mock__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mocks_payee_mock__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRecipientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewRecipientComponent = (function () {
    function NewRecipientComponent() {
        this.countryFlags = new Map();
        this.selectedCountry = '';
        this.submitNewRecipient = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.countryFlags.set('Spain', 'es');
        this.countryFlags.set('India', 'in');
        this.countryFlags.set('United States', 'us');
        this.countryFlags.set('United Kingdom', 'gb');
    }
    Object.defineProperty(NewRecipientComponent.prototype, "iban", {
        // iban getter and setter
        get: function () {
            return this._iban;
        },
        set: function (value) {
            this._iban = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRecipientComponent.prototype, "save", {
        // save getter and setter
        get: function () {
            return this._save;
        },
        set: function (value) {
            this._save = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRecipientComponent.prototype, "address", {
        // address getter and setter
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRecipientComponent.prototype, "name", {
        // name getter and setter
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    NewRecipientComponent.prototype.isSelected = function (country) {
        if (this.selectedCountry) {
            return this.selectedCountry === country;
        }
        return false;
    };
    NewRecipientComponent.prototype.hasSelection = function () {
        return !!this.selectedCountry;
    };
    NewRecipientComponent.prototype.onSubmit = function () {
        if (!this._name || this._name.length === 0) {
            this.payeeNameValidationError = true;
        }
        else {
            this.payeeNameValidationError = false;
            var newRecipient = new __WEBPACK_IMPORTED_MODULE_1__models_payee__["a" /* Payee */](this._name, new __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */]('EUR', __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */].ACCOUNT_BANK, this.selectedCountry, this.countryFlags.get(this.selectedCountry), 1000, '1234567890', 'Personal Account'));
            this.submitNewRecipient.emit(newRecipient);
            if (this._save === true) {
                __WEBPACK_IMPORTED_MODULE_4__mocks_payee_mock__["a" /* PAYEES */].push(newRecipient);
            }
        }
    };
    NewRecipientComponent.prototype.checkIban = function () {
        var ibanIsEmpty = !this._iban || this._iban.length === 0;
        var sortCodeIsEmpty = !this.sortCode || this.sortCode.length === 0;
        var accountNumberIsEmpty = !this.accountNumber || this.accountNumber.length === 0;
        var routingNumberIsEmpty = !this.routingNumber || this.routingNumber.length === 0;
        var valid = true;
        switch (this.selectedCountry.toLowerCase()) {
            case 'spain':
            case 'india':
                this.ibanValidationError = ibanIsEmpty;
                valid = !ibanIsEmpty;
                break;
            case 'united kingdom':
                this.sortCodeValidationError = sortCodeIsEmpty;
                this.accountNumberValidationError = accountNumberIsEmpty;
                valid = !sortCodeIsEmpty && !accountNumberIsEmpty;
                break;
            case 'united states':
                this.routingNumberValidationError = routingNumberIsEmpty;
                this.accountNumberValidationError = accountNumberIsEmpty;
                valid = !routingNumberIsEmpty && !accountNumberIsEmpty;
                break;
        }
        if (!valid) {
            return;
        }
        this.ibanValid = true;
        this.ibanObject = __WEBPACK_IMPORTED_MODULE_3__mocks_iban_mock__["a" /* IBAN */];
    };
    return NewRecipientComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], NewRecipientComponent.prototype, "selectedCountry", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], NewRecipientComponent.prototype, "submitNewRecipient", void 0);
NewRecipientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-new-payee',
        template: __webpack_require__(207),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [])
], NewRecipientComponent);

var _a;
//# sourceMappingURL=new-payee.component.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_payee__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PayeeComponent = (function () {
    function PayeeComponent() {
    }
    return PayeeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_payee__["a" /* Payee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_payee__["a" /* Payee */]) === "function" && _a || Object)
], PayeeComponent.prototype, "recipient", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], PayeeComponent.prototype, "selected", void 0);
PayeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-payee',
        template: __webpack_require__(208),
        styles: [__webpack_require__(184)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* trigger */])('headerState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('selected', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    background: '#FF0000',
                    color: 'white'
                }))
            ])
        ]
    })
], PayeeComponent);

var _a;
//# sourceMappingURL=payee.component.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup_option_popup_option_component__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupComponent = (function () {
    function PopupComponent(popupService) {
        var _this = this;
        this.title = 'Popup title';
        popupService.setOnOptionChangeListener(function (optionName) {
            for (var _i = 0, _a = _this.options.toArray(); _i < _a.length; _i++) {
                var option = _a[_i];
                if (option.getName() === optionName) {
                    option.show();
                    _this.title = option.getTitle();
                }
                else {
                    option.hide();
                }
            }
            _this.isVisible = true;
        });
        popupService.setOnVisibilityChangeListener(function (isVisible) {
            _this.isVisible = isVisible;
        });
    }
    PopupComponent.prototype.onExit = function () {
        this.isVisible = false;
    };
    return PopupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__popup_option_popup_option_component__["a" /* PopupOptionComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */]) === "function" && _a || Object)
], PopupComponent.prototype, "options", void 0);
PopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-popup',
        template: __webpack_require__(210),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__popup_service__["a" /* PopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__popup_service__["a" /* PopupService */]) === "function" && _b || Object])
], PopupComponent);

var _a, _b;
//# sourceMappingURL=popup.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rb_rb_component__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RbGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RbGroupComponent = (function () {
    function RbGroupComponent() {
        this.selectionIndexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    Object.defineProperty(RbGroupComponent.prototype, "selectionIndex", {
        // selectionIndex getter and setter
        get: function () {
            return this._selectionIndex;
        },
        set: function (value) {
            this._selectionIndex = value;
            this.selectionIndexChange.emit(this._selectionIndex);
        },
        enumerable: true,
        configurable: true
    });
    RbGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var radioButtonsArray = this.radioButtons.toArray();
        var _loop_1 = function (i) {
            var radioButton = radioButtonsArray[i];
            radioButton.onClick.subscribe(function () {
                _this.selectionIndex = i;
                _this.updateRadioButtonsSelection();
            });
        };
        for (var i = 0; i < radioButtonsArray.length; i++) {
            _loop_1(i);
        }
        this.updateRadioButtonsSelection();
    };
    RbGroupComponent.prototype.updateRadioButtonsSelection = function () {
        var radioButtonsArray = this.radioButtons.toArray();
        for (var i = 0; i < radioButtonsArray.length; i++) {
            var radioButton = radioButtonsArray[i];
            radioButton.isSelected = this._selectionIndex === i;
        }
    };
    return RbGroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__rb_rb_component__["a" /* RbComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */]) === "function" && _a || Object)
], RbGroupComponent.prototype, "radioButtons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], RbGroupComponent.prototype, "selectionIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], RbGroupComponent.prototype, "selectionIndexChange", void 0);
RbGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-rb-group',
        template: __webpack_require__(211),
        styles: [__webpack_require__(187)]
    })
], RbGroupComponent);

var _a, _b;
//# sourceMappingURL=rb-group.component.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_payee_mock__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_payee__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipientSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipientSelectorComponent = (function () {
    function RecipientSelectorComponent() {
        var _this = this;
        this.recipients = __WEBPACK_IMPORTED_MODULE_1__mocks_payee_mock__["a" /* PAYEES */];
        this.listContainerOffset = 0;
        this.selectedRecipientChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        setInterval(function () {
            _this.onWindowResize();
        }, 100);
    }
    Object.defineProperty(RecipientSelectorComponent.prototype, "isScrollNeeded", {
        // isScrollNeeded getter and setter
        get: function () {
            return this._isScrollNeeded;
        },
        set: function (value) {
            this._isScrollNeeded = value;
            if (!value) {
                this.recipientList.nativeElement.style.left = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecipientSelectorComponent.prototype, "selectedRecipient", {
        // selectedRecipient setter and getter
        get: function () {
            return this._selectedRecipient;
        },
        set: function (recipient) {
            this._selectedRecipient = recipient;
            this.selectedRecipientChange.emit(this._selectedRecipient);
        },
        enumerable: true,
        configurable: true
    });
    RecipientSelectorComponent.prototype.ngAfterContentChecked = function () {
        this.listWidth = 160 * this.recipients.length - 10;
        this.updateComputedValues();
    };
    RecipientSelectorComponent.prototype.onWindowResize = function () {
        this.updateComputedValues();
    };
    RecipientSelectorComponent.prototype.updateComputedValues = function () {
        this.listContainerWidth = Number.parseInt(window.getComputedStyle(this.recipientListContainer.nativeElement).width);
        this.isScrollNeeded = this.listWidth > this.listContainerWidth;
    };
    RecipientSelectorComponent.prototype.onSubmitNewRecipient = function (recipient) {
        this.selectedRecipient = recipient;
    };
    RecipientSelectorComponent.prototype.scrollList = function (direction) {
        this.updateComputedValues();
        this.listContainerOffset += Math.round(this.listContainerWidth / 2) * direction;
        var maxOffset = this.listWidth + 20 - this.listContainerWidth;
        var offsetIsGreaterThanAllowed = this.listContainerOffset > maxOffset;
        var offsetUnderZero = this.listContainerOffset < 0;
        this.listContainerOffset = offsetIsGreaterThanAllowed ? maxOffset : offsetUnderZero ? 0 : this.listContainerOffset;
        this.recipientList.nativeElement.style.left = -this.listContainerOffset + 10 + "px";
    };
    return RecipientSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('recipientListContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], RecipientSelectorComponent.prototype, "recipientListContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('recipientList'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], RecipientSelectorComponent.prototype, "recipientList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__models_payee__["a" /* Payee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_payee__["a" /* Payee */]) === "function" && _c || Object),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__models_payee__["a" /* Payee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_payee__["a" /* Payee */]) === "function" && _d || Object])
], RecipientSelectorComponent.prototype, "selectedRecipient", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _e || Object)
], RecipientSelectorComponent.prototype, "selectedRecipientChange", void 0);
RecipientSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-recipient-selector',
        template: __webpack_require__(213),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [])
], RecipientSelectorComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=recipient-selector.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmoothFadeDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmoothFadeDirective = (function () {
    function SmoothFadeDirective(el) {
        this.el = el;
        this.el.nativeElement.style.webkitTransition = 'opacity ease 350ms, max-height linear 1ms, max-width linear 1ms';
        this.el.nativeElement.style.transition = 'opacity ease 350ms, max-height linear 1ms, max-width linear 1ms';
    }
    Object.defineProperty(SmoothFadeDirective.prototype, "isVisible", {
        set: function (visible) {
            this.el.nativeElement.style.opacity = visible === true ? 1 : 0;
            this.el.nativeElement.style.maxHeight = visible === true ? '' : 0;
            this.el.nativeElement.style.maxWidth = visible === true ? '' : 0;
            this.el.nativeElement.style.overflow = visible === true ? '' : 'hidden';
        },
        enumerable: true,
        configurable: true
    });
    return SmoothFadeDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('appSmoothFade'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SmoothFadeDirective.prototype, "isVisible", null);
SmoothFadeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({ selector: '[appSmoothFade]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], SmoothFadeDirective);

var _a;
//# sourceMappingURL=smooth-fade.directive.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__step_step_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step_manager_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StepManagerComponent = (function () {
    function StepManagerComponent(stepManagerService) {
        var _this = this;
        this.stepNameMap = {};
        this.stepNameIndexMap = {};
        this.selectedStep = -1;
        this.progress = 0;
        stepManagerService.setGoToStepListener(function (stepName) {
            _this.selectStep(_this.stepNameMap[stepName]);
        });
        stepManagerService.setDoProgressListener(function (stepName) {
            var stepIndex = _this.stepNameIndexMap[stepName];
            if (stepIndex <= _this.progress + 1) {
                if (stepIndex - 1 === _this.progress) {
                    _this.progress++;
                }
                _this.selectStep(_this.steps.toArray()[stepIndex]);
            }
        });
    }
    StepManagerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var stepsArray = this.steps.toArray();
        var _loop_1 = function (i) {
            var step = stepsArray[i];
            step.stepIndex = i + 1;
            step.isLastStep = i === stepsArray.length - 1;
            this_1.stepNameMap[step.getName()] = step;
            this_1.stepNameIndexMap[step.getName()] = i;
            step.stepClick.subscribe(function () {
                _this.selectStep(step);
            });
        };
        var this_1 = this;
        for (var i = 0; i < stepsArray.length; i++) {
            _loop_1(i);
        }
        this.selectStep(stepsArray[0]);
    };
    StepManagerComponent.prototype.selectStep = function (step) {
        if (this.stepIsAllowedToBeSelected(step)) {
            var stepsArray = this.steps.toArray();
            for (var i = 0; i < stepsArray.length; i++) {
                var step1 = stepsArray[i];
                step1.isSelected = step1 === step;
            }
        }
        this.updateIsTime();
    };
    StepManagerComponent.prototype.updateIsTime = function () {
        var stepsArray = this.steps.toArray();
        for (var i = 0; i < stepsArray.length; i++) {
            var step = stepsArray[i];
            step.isTime = i <= this.progress;
        }
    };
    StepManagerComponent.prototype.stepIsAllowedToBeSelected = function (step) {
        var stepIndex = this.stepNameIndexMap[step.getName()];
        return stepIndex !== this.selectedStep && stepIndex <= this.progress;
    };
    return StepManagerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__step_step_component__["a" /* StepComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */]) === "function" && _a || Object)
], StepManagerComponent.prototype, "steps", void 0);
StepManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-step-manager',
        template: __webpack_require__(214),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__step_manager_service__["a" /* StepManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__step_manager_service__["a" /* StepManagerService */]) === "function" && _b || Object])
], StepManagerComponent);

var _a, _b;
//# sourceMappingURL=step-manager.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepSelectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepSelectionComponent = (function () {
    function StepSelectionComponent() {
    }
    StepSelectionComponent.prototype.ngOnInit = function () {
    };
    return StepSelectionComponent;
}());
StepSelectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-step-selection',
        template: __webpack_require__(215),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], StepSelectionComponent);

//# sourceMappingURL=step-selection.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_tab_component__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsManagerComponent = (function () {
    function TabsManagerComponent() {
    }
    TabsManagerComponent.prototype.ngAfterContentInit = function () {
        var tabs = this.components.toArray();
        if (tabs.length === 1) {
            tabs[0].isSelected = true;
            tabs[0].hasSelection = true;
        }
        else {
            var _loop_1 = function (i) {
                tabs[i].isFirst = i === 0;
                tabs[i].onClick.subscribe(function () {
                    tabs[i].isSelected = true;
                    for (var i1 = 0; i1 < tabs.length; i1++) {
                        tabs[i1].hasSelection = true;
                        if (i1 !== i) {
                            tabs[i1].isSelected = false;
                        }
                    }
                });
            };
            for (var i = 0; i < tabs.length; i++) {
                _loop_1(i);
            }
        }
    };
    return TabsManagerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__tab_tab_component__["a" /* TabComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */]) === "function" && _a || Object)
], TabsManagerComponent.prototype, "components", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__tab_tab_component__["a" /* TabComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */]) === "function" && _b || Object)
], TabsManagerComponent.prototype, "componentsView", void 0);
TabsManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-tabs-manager',
        template: __webpack_require__(218),
        styles: [__webpack_require__(194)]
    })
], TabsManagerComponent);

var _a, _b;
//# sourceMappingURL=tabs-manager.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_payee__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_account__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionReviewComponent = (function () {
    function TransactionReviewComponent() {
    }
    return TransactionReviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */]) === "function" && _a || Object)
], TransactionReviewComponent.prototype, "fromAccount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models_payee__["a" /* Payee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_payee__["a" /* Payee */]) === "function" && _b || Object)
], TransactionReviewComponent.prototype, "toPayee", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], TransactionReviewComponent.prototype, "fromCredit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], TransactionReviewComponent.prototype, "toCredit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], TransactionReviewComponent.prototype, "fromCurrency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], TransactionReviewComponent.prototype, "toCurrency", void 0);
TransactionReviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-transaction-review',
        template: __webpack_require__(219),
        styles: [__webpack_require__(195)]
    })
], TransactionReviewComponent);

var _a, _b;
//# sourceMappingURL=transaction-review.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exchange_rate_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_account__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_payee__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__currency_symbols_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popup_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__step_manager_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transaction_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__number_formatting_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TransferComponent = (function () {
    function TransferComponent(exchangeRateService, currencySymbolsService, popupService, stepManagerService, transactionService, numberFormattingService) {
        this.accountChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.recipientChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.defaultFeesPaymentModesPerCountry = {
            'united states': 'shared'
        };
        this.feesPaymentMode = 'sender';
        this.currencyMap = new Map();
        this.css = currencySymbolsService;
        this.popupService = popupService;
        this.exchangeRateService = exchangeRateService;
        this.stepManagerService = stepManagerService;
        this.transactionService = transactionService;
        this.nfs = numberFormattingService;
        this.currencyMap.set('EUR', 'eur');
        this.currencyMap.set('GBP', 'gbp');
        this.currencyMap.set('USD', 'usd');
        this.fromCurrency = 'EUR';
        this.toCurrency = 'GBP';
        this.selectedPaymentTypeIndex = 0;
        this.setSantanderFee('fast');
        this.setExchangeRateFromToCurrency(this._fromCurrency, this._toCurrency);
    }
    Object.defineProperty(TransferComponent.prototype, "toCredit", {
        get: function () {
            return this._toCredit;
        },
        set: function (value) {
            if (this._toCredit !== value) {
                this._toCredit = value;
                this.calculateFromCredit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransferComponent.prototype, "fromCredit", {
        get: function () {
            return this._fromCredit;
        },
        set: function (value) {
            if (this._fromCredit !== value) {
                this._fromCredit = value;
                this.calculateToCredit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransferComponent.prototype, "account", {
        // account getter and setter
        get: function () {
            return this._account;
        },
        set: function (value) {
            if (!!value) {
                this._account = value;
                this._fromCurrency = value.getCurrencyType().toUpperCase();
                this.accountChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransferComponent.prototype, "recipient", {
        // payee getter and setter
        get: function () {
            return this._recipient;
        },
        set: function (value) {
            if (!!value) {
                this._recipient = value;
                this._toCurrency = value.getAccount().getCurrencyType().toUpperCase();
                var feesPaymentMode = void 0;
                if ((feesPaymentMode = this.defaultFeesPaymentModesPerCountry[value.getAccount().getCountry().toLowerCase()])) {
                    this.feesPaymentMode = feesPaymentMode;
                }
                this.recipientChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransferComponent.prototype, "fromCurrency", {
        get: function () {
            return this._fromCurrency;
        },
        set: function (value) {
            var _this = this;
            this._fromCurrency = value;
            this.transactionService.fromCurrency = value;
            this.setExchangeRateFromToCurrency(this._fromCurrency, this._toCurrency).then(function () {
                _this.calculateToCredit();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransferComponent.prototype, "toCurrency", {
        get: function () {
            return this._toCurrency;
        },
        set: function (value) {
            var _this = this;
            this._toCurrency = value;
            this.transactionService.toCurrency = value;
            this.setExchangeRateFromToCurrency(this._fromCurrency, this._toCurrency).then(function () {
                _this.calculateFromCredit();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransferComponent.prototype, "selectedPaymentTypeIndex", {
        // selectedPaymentTypeIndex getter and setter
        get: function () {
            return this._selectedPaymentTypeIndex;
        },
        set: function (value) {
            this._selectedPaymentTypeIndex = value;
            this.setSantanderFee(value === 0 ? 'fast' : 'cheap');
            this.transactionService.paymentType = value === 0 ? 'Fast' : 'Cheap';
        },
        enumerable: true,
        configurable: true
    });
    TransferComponent.prototype.setExchangeRateFromToCurrency = function (from, to) {
        var _this = this;
        var promise = this.exchangeRateService.getExchangeRateFromToCurrency(from, to);
        promise.then(function (rate) {
            _this.exchangeRate = !rate ? 1 : rate;
        });
        return promise;
    };
    TransferComponent.prototype.setSantanderFee = function (method) {
        this.santanderFee = method === 'fast' ? 4.98 : 4.05;
        this.eta = method === 'fast' ? '5 hours' : '5 days';
    };
    TransferComponent.prototype.calculateToCredit = function () {
        var fromCredit = this.nfs.parseNumber(this._fromCredit);
        this._toCredit = this.nfs.toLocaleString(fromCredit * (this.exchangeRate - this.santanderFee / 100), 2, 2);
    };
    TransferComponent.prototype.calculateFromCredit = function () {
        var toCredit = this.nfs.parseNumber(this._toCredit);
        this._fromCredit = this.nfs.toLocaleString(toCredit / (this.exchangeRate - this.santanderFee / 100), 2, 2);
    };
    return TransferComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */]) === "function" && _b || Object])
], TransferComponent.prototype, "account", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], TransferComponent.prototype, "accountChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__models_payee__["a" /* Payee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_payee__["a" /* Payee */]) === "function" && _d || Object),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__models_payee__["a" /* Payee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_payee__["a" /* Payee */]) === "function" && _e || Object])
], TransferComponent.prototype, "recipient", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _f || Object)
], TransferComponent.prototype, "recipientChange", void 0);
TransferComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-transfer',
        template: __webpack_require__(220),
        styles: [__webpack_require__(196)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__exchange_rate_service__["a" /* ExchangeRateService */]]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__exchange_rate_service__["a" /* ExchangeRateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__exchange_rate_service__["a" /* ExchangeRateService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__currency_symbols_service__["a" /* CurrencySymbolsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__currency_symbols_service__["a" /* CurrencySymbolsService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__popup_service__["a" /* PopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__popup_service__["a" /* PopupService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__step_manager_service__["a" /* StepManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__step_manager_service__["a" /* StepManagerService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7__transaction_service__["a" /* TransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__transaction_service__["a" /* TransactionService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__number_formatting_service__["a" /* NumberFormattingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__number_formatting_service__["a" /* NumberFormattingService */]) === "function" && _m || Object])
], TransferComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=transfer.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAP; });
var MAP = {
    'AED': 'د.إ',
    'AFN': '؋',
    'ALL': 'L',
    'ANG': 'ƒ',
    'AOA': 'Kz',
    'ARS': '$',
    'AUD': '$',
    'AWG': 'ƒ',
    'AZN': '₼',
    'BAM': 'KM',
    'BBD': '$',
    'BDT': '৳',
    'BGN': 'лв',
    'BHD': '.د.ب',
    'BIF': 'FBu',
    'BMD': '$',
    'BND': '$',
    'BOB': 'Bs.',
    'BRL': 'R$',
    'BSD': '$',
    'BTC': '฿',
    'BTN': 'Nu.',
    'BWP': 'P',
    'BYR': 'p.',
    'BZD': 'BZ$',
    'CAD': '$',
    'CDF': 'FC',
    'CHF': 'Fr.',
    'CLP': '$',
    'CNY': '¥',
    'COP': '$',
    'CRC': '₡',
    'CUC': '$',
    'CUP': '₱',
    'CVE': '$',
    'CZK': 'Kč',
    'DJF': 'Fdj',
    'DKK': 'kr',
    'DOP': 'RD$',
    'DZD': 'دج',
    'EEK': 'kr',
    'EGP': '£',
    'ERN': 'Nfk',
    'ETB': 'Br',
    'EUR': '€',
    'FJD': '$',
    'FKP': '£',
    'GBP': '£',
    'GEL': '₾',
    'GGP': '£',
    'GHC': '₵',
    'GHS': 'GH₵',
    'GIP': '£',
    'GMD': 'D',
    'GNF': 'FG',
    'GTQ': 'Q',
    'GYD': '$',
    'HKD': '$',
    'HNL': 'L',
    'HRK': 'kn',
    'HTG': 'G',
    'HUF': 'Ft',
    'IDR': 'Rp',
    'ILS': '₪',
    'IMP': '£',
    'INR': '₹',
    'IQD': 'ع.د',
    'IRR': '﷼',
    'ISK': 'kr',
    'JEP': '£',
    'JMD': 'J$',
    'JPY': '¥',
    'KES': 'KSh',
    'KGS': 'лв',
    'KHR': '៛',
    'KMF': 'CF',
    'KPW': '₩',
    'KRW': '₩',
    'KYD': '$',
    'KZT': '₸',
    'LAK': '₭',
    'LBP': '£',
    'LKR': '₨',
    'LRD': '$',
    'LSL': 'M',
    'LTL': 'Lt',
    'LVL': 'Ls',
    'MAD': 'MAD',
    'MDL': 'lei',
    'MGA': 'Ar',
    'MKD': 'ден',
    'MMK': 'K',
    'MNT': '₮',
    'MOP': 'MOP$',
    'MUR': '₨',
    'MVR': 'Rf',
    'MWK': 'MK',
    'MXN': '$',
    'MYR': 'RM',
    'MZN': 'MT',
    'NAD': '$',
    'NGN': '₦',
    'NIO': 'C$',
    'NOK': 'kr',
    'NPR': '₨',
    'NZD': '$',
    'OMR': '﷼',
    'PAB': 'B/.',
    'PEN': 'S/.',
    'PGK': 'K',
    'PHP': '₱',
    'PKR': '₨',
    'PLN': 'zł',
    'PYG': 'Gs',
    'QAR': '﷼',
    'RMB': '￥',
    'RON': 'lei',
    'RSD': 'Дин.',
    'RUB': '₽',
    'RWF': 'R₣',
    'SAR': '﷼',
    'SBD': '$',
    'SCR': '₨',
    'SDG': 'ج.س.',
    'SEK': 'kr',
    'SGD': '$',
    'SHP': '£',
    'SLL': 'Le',
    'SOS': 'S',
    'SRD': '$',
    'SSP': '£',
    'STD': 'Db',
    'SVC': '$',
    'SYP': '£',
    'SZL': 'E',
    'THB': '฿',
    'TJS': 'SM',
    'TMT': 'T',
    'TND': 'د.ت',
    'TOP': 'T$',
    'TRL': '₤',
    'TRY': '₺',
    'TTD': 'TT$',
    'TVD': '$',
    'TWD': 'NT$',
    'TZS': 'TSh',
    'UAH': '₴',
    'UGX': 'USh',
    'USD': '$',
    'UYU': '$U',
    'UZS': 'лв',
    'VEF': 'Bs',
    'VND': '₫',
    'VUV': 'VT',
    'WST': 'WS$',
    'XAF': 'FCFA',
    'XBT': 'Ƀ',
    'XCD': '$',
    'XOF': 'CFA',
    'XPF': '₣',
    'YER': '﷼',
    'ZAR': 'R',
    'ZWD': 'Z$'
};
//# sourceMappingURL=currency-symbols-map.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_account__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNTS; });

var ACCOUNTS = [
    new __WEBPACK_IMPORTED_MODULE_0__models_account__["a" /* Account */]('EUR', 'bank', 'Spain', 'sp', 1000, '1111-1111-1111-1111', 'Main Account'),
    new __WEBPACK_IMPORTED_MODULE_0__models_account__["a" /* Account */]('GBP', 'bank', 'United Kingdom', 'gb', 201, '1111-1111-1111-1111', 'Spare Money'),
    new __WEBPACK_IMPORTED_MODULE_0__models_account__["a" /* Account */]('GBP', 'card', 'Spain', 'sp', 999, '2222-3333-4444-5555', 'Credit Card'),
    new __WEBPACK_IMPORTED_MODULE_0__models_account__["a" /* Account */]('EUR', 'card', 'United Kingdom', 'gb', 726, '1111-1111-1111-1111', 'Other Card'),
    new __WEBPACK_IMPORTED_MODULE_0__models_account__["a" /* Account */]('GBP', 'card', 'United States', 'us', 999, '1111-1111-1111-1523', 'Debit Card'),
    new __WEBPACK_IMPORTED_MODULE_0__models_account__["a" /* Account */]('EUR', 'bank', 'Spain', 'sp', 1000, '1111-1111-1111-1111', 'Main Account'),
    new __WEBPACK_IMPORTED_MODULE_0__models_account__["a" /* Account */]('GBP', 'bank', 'United States', 'us', 201, '1111-1111-1111-1111', 'Spare Money')
];
//# sourceMappingURL=account.mock.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_iban__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IBAN; });

var IBAN = new __WEBPACK_IMPORTED_MODULE_0__models_iban__["a" /* Iban */]('', 'PO Box 69999 1 Churchill Place Canary Wharf', 'BARCLAYS BANK PLC', 'BARCGB22', 'INTERNATIONAL BANKING 2', 'London', 'Great Britain', 'GB', '', '', '020 71147000', '', '', '	E14 1QE', 'YES', 'NO', 'NO', 'YES', 'YES');
//# sourceMappingURL=iban.mock.js.map

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 0;\r\n}\r\n\r\n.account-list-container {\r\n  display: inline-block;\r\n  position: relative;\r\n  height: 160px;\r\n  vertical-align: middle; /* Safari 6.1+ */\r\n  -ms-flex: 1; /* IE 10 */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  padding-left: 10px;\r\n  overflow: hidden;\r\n}\r\n\r\n.glyphicon-container {\r\n  display: inline-block;\r\n  text-align: center;\r\n  -webkit-transform: translateY(50%);\r\n          transform: translateY(50%);\r\n}\r\n\r\nspan {\r\n  position: relative;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-size: 40px;\r\n  color: gray;\r\n  cursor: pointer;\r\n  border-radius: 100%;\r\n  padding: 5px;\r\n}\r\n\r\nspan:hover {\r\n  color: red;\r\n}\r\n\r\n.account-list-container + .glyphicon-container span {\r\n  margin-left: 0;\r\n}\r\n\r\n.account-list {\r\n  position: absolute;\r\n  white-space: nowrap;\r\n  padding-top: 5px;\r\n  transition: margin-left 250ms ease-out;\r\n}\r\n\r\n.account {\r\n  display: inline-block;\r\n}\r\n\r\n.account + .account {\r\n  margin-left: 10px;\r\n}\r\n\r\n/* Extra Small Devices, Phones */\r\n@media only screen and (max-width : 480px) {\r\n  .account-list-container {\r\n    overflow: visible;\r\n    overflow-x: scroll;\r\n  }\r\n  .account-list {\r\n    position: relative;\r\n    max-width: 0;\r\n  }\r\n  .arrow {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Small Devices, Tablets */\r\n@media only screen and (min-width : 480px) and (max-width : 768px) {\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".account-container {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 150px;\r\n  max-width: 150px;\r\n  background: white;\r\n  font-family: Roboto, Helvetica Neue, sans-serif;\r\n  box-shadow: 0 2px 5px lightgray;\r\n  font-size: 17px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: box-shadow 250ms, -webkit-transform 250ms;\r\n  transition: box-shadow 250ms, transform 250ms;\r\n  transition: box-shadow 250ms, transform 250ms, -webkit-transform 250ms;\r\n}\r\n\r\n.account-container:hover {\r\n  box-shadow: 0 5px 10px lightgray;\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n}\r\n\r\n.account-container * {\r\n  cursor: pointer !important;\r\n}\r\n\r\n.account-header {\r\n  position: relative;\r\n  padding: 15px 15px 5px;\r\n  background: white;\r\n  color: #FF0000;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  z-index: 0;\r\n  transition: color 100ms;\r\n}\r\n\r\n.account-header span {\r\n  display: block;\r\n  font-size: 40px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.account-header::after {\r\n  display: block;\r\n  position: absolute;\r\n  content: \"\";\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  max-height: 0;\r\n  background: red;\r\n  transition: max-height 500ms;\r\n  z-index: -1;\r\n}\r\n\r\n.account-container:hover .account-header::after {\r\n  max-height: 200px;\r\n}\r\n\r\n.account-container:hover .account-header {\r\n  color: white;\r\n}\r\n\r\n.account-body {\r\n  position: relative;\r\n  padding: 10px 10px 20px;\r\n}\r\n\r\n.account-balance {\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  background: white;\r\n  color: lightgrey;\r\n  font-size: 70%;\r\n}\r\n\r\n.account-credit {\r\n  border-bottom: 1px solid lightgray;\r\n  color: gray;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".title-bar {\r\n  background: #FF0000 url('/assets/img/santander.png') no-repeat;\r\n  background-position-x: 20px;\r\n  background-position-y: center;\r\n  text-align: center;\r\n}\r\n\r\n.title {\r\n  font-size: 180%;\r\n  color: white;\r\n  padding: 15px;\r\n}\r\n\r\n.workflow {\r\n  position: relative;\r\n  width: 80%;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  margin-top: 20px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.section-title {\r\n  color: #FF0000;\r\n  margin-left: -5px;\r\n  margin-bottom: -10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.new-recipient {\r\n  background: white;\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  box-shadow: 0 2px 5px lightgray;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .title-bar {\r\n    background: #FF0000 url('/assets/img/santander_crop.png') no-repeat;\r\n    background-position-x: 20px;\r\n    background-position-y: center;\r\n    text-align: center;\r\n  }\r\n  .workflow {\r\n    width: 90%;\r\n    left: 55%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  position: relative;\r\n  height: 100%;\r\n  font-size: 100%;\r\n}\r\n\r\n.content.showing-popup .strip {\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.strip {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  border: 1px solid lightgray;\r\n  background: white;\r\n  transition: 250ms;\r\n}\r\n\r\n.strip:hover {\r\n  box-shadow: 0 2px 5px lightgrey;\r\n}\r\n\r\n.strip .date-cell {\r\n  display: inline-block;\r\n  position: relative; /* Safari 6.1+ */\r\n  -ms-flex: 1; /* IE 10 */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  text-align: center;\r\n  padding-top: 15px;\r\n}\r\n\r\n.strip .date-cell span {\r\n  display: inline-block;\r\n}\r\n\r\n.strip .date-cell .title {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 0;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  color: white;\r\n  background: gray;\r\n  border-radius: 0 0 5px 5px;\r\n  padding: 0 10px;\r\n  font-size: 80%;\r\n}\r\n\r\n.strip .date-cell .value {\r\n  color: gray;\r\n}\r\n\r\n.strip .date-cell + .date-cell {\r\n  border-left: 1px solid lightgray;\r\n}\r\n\r\n.strip .calendar-glyphicon {\r\n  display: inline-block;\r\n  padding: 0 10px;\r\n  cursor: pointer;\r\n  box-shadow: -2px 0 4px lightgrey;\r\n}\r\n\r\n.strip .glyphicon {\r\n  display: inline-block;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.strip .calendar-glyphicon:hover .glyphicon {\r\n  color: red;\r\n}\r\n\r\n.popup {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: absolute;\r\n  text-align: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 250px;\r\n  background: white;\r\n  padding: 20px;\r\n  box-shadow: 0 2px 5px lightgray;\r\n  z-index: 100;\r\n}\r\n\r\n.top {\r\n  overflow: hidden;\r\n}\r\n\r\n.top h1, .top h2 {\r\n  display: inline-block;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 45%;\r\n  font-size: 120%;\r\n  margin: 0;\r\n  color: red;\r\n}\r\n\r\n.arrow {\r\n  color: gray;\r\n  position: absolute;\r\n  top: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.arrow:hover {\r\n  color: red;\r\n}\r\n\r\n.arrow-left {\r\n  left: 0;\r\n  -webkit-transform: translateY(-50%) translateX(100%);\r\n          transform: translateY(-50%) translateX(100%)\r\n}\r\n\r\n.arrow-right {\r\n  right: 0;\r\n  -webkit-transform: translateY(-50%) translateX(-100%);\r\n          transform: translateY(-50%) translateX(-100%)\r\n}\r\n\r\n.bottom { /* Safari 6.1+ */\r\n  -ms-flex: 1; /* IE 10 */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  color: gray;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nul li {\r\n  display: inline-block;\r\n  width: 14.2%;\r\n  margin: 0;\r\n}\r\n\r\n.days-titles li {\r\n  text-align: center;\r\n  border-bottom: 1px lightgray solid;\r\n  padding: 10px 0;\r\n}\r\n\r\n.day-header {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  color: gray;\r\n}\r\n\r\n.days-table {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.day-wrapper {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.day-wrapper::before {\r\n  display: block;\r\n  position: absolute;\r\n  content: '';\r\n  width: 100%;\r\n  height: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: red;\r\n;\r\n  transition: height 300ms;\r\n}\r\n\r\n.day-wrapper:not(.starting-day) span {\r\n  cursor: pointer;\r\n}\r\n\r\n.day-wrapper:not(.starting-day) span::after {\r\n  display: block;\r\n  position: absolute;\r\n  content: '';\r\n  width: 0;\r\n  height: 1px;\r\n  bottom: 1px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  background: gray;\r\n  transition: width 300ms;\r\n}\r\n\r\n.day-wrapper:not(.starting-day):not(.selected-day):hover span::after {\r\n  width: 100%;\r\n}\r\n\r\n.day-wrapper.starting-day {\r\n  color: lightgrey;\r\n  cursor: default;\r\n}\r\n\r\n.day-wrapper.selected-day {\r\n  color: white;\r\n}\r\n\r\n.day-wrapper.selected-day::before {\r\n  height: 100%;\r\n}\r\n\r\n.day-wrapper span {\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".title {\r\n  position: relative;\r\n  color: gray;\r\n}\r\n\r\n.title:hover {\r\n  color: darkslategray;\r\n}\r\n\r\n.content.expanded .title span {\r\n  -webkit-transform: translateX(calc(100% + 5px)) translateY(-50%) rotateZ(90deg);\r\n          transform: translateX(calc(100% + 5px)) translateY(-50%) rotateZ(90deg);\r\n}\r\n\r\n.title, .title * {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.title span {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n  -webkit-transform: translateX(calc(100% + 5px)) translateY(-50%) rotateZ(0deg);\r\n          transform: translateX(calc(100% + 5px)) translateY(-50%) rotateZ(0deg);\r\n}\r\n\r\n.body {\r\n  color: gray;\r\n  margin-left: 10px;\r\n}\r\n.content.expanded .body {\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: default;\r\n  color: lightgray;\r\n}\r\n\r\n.content:hover, .content.has-selection {\r\n  color: gray;\r\n}\r\n\r\n.content:hover .selection-arrow {\r\n  color: red;\r\n}\r\n\r\n.selection {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n  width: 100%;\r\n  text-align: center;\r\n  top: 50% !important;\r\n  -webkit-transform: translateY(-50%) !important;\r\n          transform: translateY(-50%) !important;\r\n}\r\n.selection * {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.selection-content { /* Safari 6.1+ */\r\n  -ms-flex: 1; /* IE 10 */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  position: relative;\r\n}\r\n.selection-content .text {\r\n  margin-right: 20px;\r\n}\r\n.selection-arrow {\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  font-size: 15px;\r\n  color: gray;\r\n}\r\n.selection-list {\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 100;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n  background: white;\r\n  border: 1px grey solid;\r\n  box-shadow: -2px 3px 10px lightgray;\r\n}\r\nul {\r\n  margin: 0;\r\n}\r\nul li {\r\n  padding: 5px;\r\n  color: red !important;\r\n}\r\nul li * {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\nul li + li {\r\n  border-top: 1px lightgrey solid;\r\n}\r\nul li:hover {\r\n  background: red;\r\n  color: white !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  display: block;\r\n  padding-right: 5px\r\n}\r\n\r\n.card {\r\n  display: block;\r\n  background: white;\r\n  padding: 10px;\r\n  box-shadow: 0 2px 5px lightgray;\r\n  vertical-align: top;\r\n}\r\n\r\n.card + .card {\r\n  margin-top: 10px;\r\n}\r\n\r\n.entry {\r\n  display: inline-block;\r\n  margin: 10px;\r\n  font-size: 80%;\r\n}\r\n\r\n.entry + .entry {\r\n  margin-top: 10px;\r\n}\r\n\r\nspan {\r\n  color: red;\r\n}\r\n\r\n.value {\r\n  color: gray;\r\n}\r\n\r\n/* Extra Small Devices, Phones */\r\n@media only screen and (max-width : 480px) {\r\n  .card {\r\n    float: left;\r\n  }\r\n  .card + .card {\r\n    margin: 0;\r\n    border-top: lightgrey 1px solid;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  position: relative;\r\n}\r\n\r\ninput {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.placeholder {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  padding: 1px 10px;\r\n  color: gray;\r\n  pointer-events: none;\r\n  transition: all 250ms;\r\n}\r\n\r\n.content.focused .placeholder, .content.has-value .placeholder {\r\n  top: 0;\r\n  z-index: 1;\r\n  -webkit-transform: translateY(-50%) scale(0.8);\r\n          transform: translateY(-50%) scale(0.8);\r\n  background: white;\r\n  color: darkslategray;\r\n}\r\n\r\n.content.focused:not(.has-value) .placeholder {\r\n  background: gray;\r\n  color: white;\r\n}\r\n\r\n.content.hover:not(.focused):not(.has-value) .placeholder {\r\n  left: 10px;\r\n  color: darkslategray;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.currency-symbol {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 40px;\r\n  border: 1px solid lightgray;\r\n  border-right: none;\r\n}\r\n\r\n.currency-symbol span {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n  color: gray;\r\n}\r\n\r\ninput { /* Safari 6.1+ */\r\n  -ms-flex: 1; /* IE 10 */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.placeholder {\r\n  position: absolute;\r\n  left: 40px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  padding: 1px 10px;\r\n  color: lightgray;\r\n  pointer-events: none;\r\n  transition: all 250ms;\r\n}\r\n\r\n.content.focused .placeholder, .content.has-value .placeholder {\r\n  top: 0;\r\n  z-index: 1;\r\n  -webkit-transform: translateY(-5px) scale(0.8);\r\n          transform: translateY(-5px) scale(0.8);\r\n  background: white;\r\n  color: darkslategray;\r\n}\r\n\r\n.content.focused:not(.has-value) .placeholder {\r\n  background: gray;\r\n  color: white;\r\n}\r\n\r\n.content.hover:not(.focused):not(.has-value) .placeholder {\r\n  left: 50px;\r\n  color: darkslategray;\r\n}\r\n\r\n.content.focused, .content.has-value {\r\n  padding-top: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n.form-container {\r\n  display: block;\r\n  max-width: 500px;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  color: gray;\r\n  font-weight: bold;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nselect {\r\n  display: inline-block;\r\n  width: 100%;\r\n  border: none;\r\n  background: white;\r\n  box-shadow: 0 2px 5px lightgray;\r\n  padding: 10px;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n}\r\n\r\nbutton.submit-button::before {\r\n  display: block;\r\n  position: absolute;\r\n  content: '';\r\n  width: 1px;\r\n  height: 20px;\r\n  top: 0;\r\n  left: 50%;\r\n  -webkit-transform: translateY(calc(-100% - 1px)) translateX(-50%);\r\n          transform: translateY(calc(-100% - 1px)) translateX(-50%);\r\n  background: red;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n}\r\n\r\n.input {\r\n  width: 100%;\r\n}\r\n\r\n.flags {\r\n  padding: 0 10px;\r\n  background: white;\r\n  height: 40px;\r\n  box-shadow: 0 2px 5px lightgray;\r\n}\r\n\r\n.flags:hover {\r\n  box-shadow: -2px 3px 10px lightgray;\r\n}\r\n\r\ninput + input, .input + .input, input + .input, .input + input {\r\n  margin-top: 10px;\r\n}\r\n\r\n.vertical-input input, .vertical-input .input {\r\n  display: block;\r\n}\r\n\r\n.vertical-input input + input, .vertical-input .input + .input,\r\n.vertical-input input + .input, .vertical-input .input + input {\r\n  margin-top: 10px;\r\n}\r\n\r\n.horizontal-input {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n.horizontal-input input, .horizontal-input .input {\r\n  display: inline-block;\r\n}\r\n\r\n.horizontal-input input + input, .horizontal-input .input + .input,\r\n.horizontal-input .input + input, .horizontal-input input + .input{\r\n  margin-top: 10px;\r\n}\r\n\r\n.vertical-input + .horizontal-input, input + .horizontal-input, select + .horizontal-input,\r\n.horizontal-input + .vertical-input, input + .vertical-input, select + .vertical-input {\r\n  margin-top: 10px;\r\n}\r\n\r\n.important-input {\r\n  background: white;\r\n  padding: 10px;\r\n  box-shadow: 0 2px 5px lightgray;\r\n  margin-top: 10px;\r\n}\r\n\r\n* + .check-box {\r\n  margin-top: 10px;\r\n}\r\n\r\n/* Extra Small Devices, Phones */\r\n@media only screen and (max-width : 480px) {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".recipient-container {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 150px;\r\n  max-width: 150px;\r\n  background: white;\r\n  font-family: Roboto, Helvetica Neue, sans-serif;\r\n  box-shadow: 0 2px 5px lightgray;\r\n  font-size: 17px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: box-shadow 250ms, -webkit-transform 250ms;\r\n  transition: box-shadow 250ms, transform 250ms;\r\n  transition: box-shadow 250ms, transform 250ms, -webkit-transform 250ms;\r\n}\r\n\r\n.recipient-container:hover {\r\n  box-shadow: 0 5px 15px lightgray;\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n}\r\n\r\n.recipient-container * {\r\n  cursor: pointer !important;\r\n}\r\n\r\n.recipient-header {\r\n  position: relative;\r\n  padding: 15px 15px 5px;\r\n  background: white;\r\n  color: #FF0000;\r\n  outline: 0 solid red;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  z-index: 0;\r\n  transition: color 100ms;\r\n}\r\n\r\n.recipient-header::after {\r\n  display: block;\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: red;\r\n  max-height: 0;\r\n  transition: max-height 500ms;\r\n  z-index: -1;\r\n}\r\n\r\n.recipient-container:hover .recipient-header {\r\n  color: white !important;\r\n}\r\n\r\n.recipient-container:hover .recipient-header::after {\r\n  max-height: 200px;\r\n}\r\n\r\n.recipient-header span {\r\n  display: block;\r\n  font-size: 40px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.recipient-body {\r\n  padding: 10px 10px 20px;\r\n  color: gray;\r\n  position: relative;\r\n}\r\n\r\n.account {\r\n  display: block;\r\n}\r\n\r\n.ending {\r\n  display: block;\r\n}\r\n\r\n.highlighted {\r\n  color: gray;\r\n}\r\n\r\n.text {\r\n  font-size: 100% !important;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.flag {\r\n  display: block;\r\n  border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.recipient-body-description {\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n  color: lightgray;\r\n  font-size: 70%;\r\n  height: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".wrap {\r\n  display: block;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(1, 1, 1, 0.2);\r\n}\r\n\r\n.content {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  min-width: 400px;\r\n  -webkit-transform: translateX(-50%) translateY(-60%);\r\n          transform: translateX(-50%) translateY(-60%);\r\n  box-shadow: 0 0 50px gray;\r\n  border-radius: 5px;\r\n}\r\n\r\n.title-card {\r\n  display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n  background: teal !important;\r\n  color: white !important;\r\n  width: 100% !important;\r\n  box-shadow: none !important;\r\n  border-radius: 5px 5px 0 0;\r\n  font-size: 120% !important;\r\n}\r\n\r\n.title { /* Safari 6.1+ */\r\n  -ms-flex: 1; /* IE 10 */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.back {\r\n  display: inline-block;\r\n}\r\n\r\n.back span {\r\n  cursor: pointer !important;\r\n}\r\n\r\n.message-card {\r\n  margin: 0;\r\n  border-radius: 0 0 5px 5px;\r\n  color: black !important;\r\n  box-shadow: none;\r\n  width: 100% !important;\r\n}\r\n\r\n/* Extra Small Devices, Phones */\r\n@media only screen and (max-width : 480px) {\r\n  .content {\r\n    min-width: 0;\r\n    width: 80%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content, .content * {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  pointer-events: all;\r\n  color: gray;\r\n  border-color: gray;\r\n  transition: color 250ms, border-color 250ms;\r\n}\r\n\r\n.content:hover * {\r\n  color: darkslategray;\r\n  border-color: darkslategray;\r\n}\r\n\r\n.content.selected * {\r\n  color: red;\r\n  border-color: red;\r\n}\r\n\r\n.dot {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: transparent;\r\n  border: 2px solid red;\r\n  border-radius: 100%;\r\n}\r\n\r\n.dot::before {\r\n  display: block;\r\n  position: absolute;\r\n  content: '';\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n  width: 10px;\r\n  height: 10px;\r\n  background: transparent;\r\n  border-radius: 100%;\r\n  transition: background 250ms;\r\n}\r\n\r\n.content.selected .dot::before {\r\n  background: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.right { /* Safari 6.1+ */\r\n  -ms-flex: 1; /* IE 10 */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.slideshow {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.arrow {\r\n  position: relative;\r\n  font-size: 40px;\r\n  color: gray;\r\n  text-align: center;\r\n  -webkit-transform: translateY(50%);\r\n          transform: translateY(50%);\r\n  z-index: 100;\r\n}\r\n\r\n.arrow span {\r\n  display: inline-block;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  cursor: pointer;\r\n  border-radius: 100%;\r\n  padding: 5px;\r\n}\r\n\r\n.arrow span:hover{\r\n  color: red;\r\n}\r\n\r\n.recipient-list-container .arrow {\r\n  margin-left: 20px;\r\n}\r\n\r\n.blank-recipient {\r\n  display: inline-block;\r\n  width: 170px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.recipient-list-container {\r\n  display: inline-block;\r\n  position: relative; /* Safari 6.1+ */\r\n  -ms-flex: 1; /* IE 10 */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  height: 165px;\r\n  overflow: hidden;\r\n}\r\n\r\n.recipient-list-container + .arrow {\r\n  margin-left: 0;\r\n}\r\n\r\n.recipient-list {\r\n  position: absolute;\r\n  white-space: nowrap;\r\n  padding-top: 5px;\r\n  left: 10px;\r\n  transition: left 250ms ease-out ;\r\n}\r\n\r\n.recipient {\r\n  display: inline-block;\r\n}\r\n\r\n.recipient + .recipient {\r\n  margin-left: 10px;\r\n}\r\n\r\n#new-recipient-out {\r\n  display: none;\r\n}\r\n\r\n/* Extra Small Devices, Phones */\r\n@media only screen and (max-width : 480px) {\r\n  .recipient-list-container {\r\n    overflow: visible;\r\n    overflow-x: scroll;\r\n  }\r\n  .recipient-list {\r\n    position: relative;\r\n    max-width: 0;\r\n  }\r\n  .arrow {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Small Devices, Tablets */\r\n@media only screen and (min-width : 480px) and (max-width : 768px) {\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  position: relative;\r\n}\r\n\r\n.content::before {\r\n  display: block;\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 0;\r\n  top: 0;\r\n  width: 1px;\r\n  height: 100%;\r\n  background: red;\r\n  box-shadow: -2px 5px 5px lightgray;\r\n  z-index: 0;\r\n}\r\n\r\n.content.last-selected::before {\r\n  //height: calc(50% + 30px);\r\n}\r\n\r\n.step-header {\r\n  display: block;\r\n  position: relative;\r\n  font-size: 120%;\r\n  cursor: pointer;\r\n  -webkit-transform-origin: top left;\r\n  transform-origin: top left;\r\n  transition: all 500ms;\r\n}\r\n\r\n.selected .step-header {\r\n  /*font-size: 180%;*/\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  cursor: default;\r\n}\r\n\r\n.header-order {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 30px;\r\n  height: 30px;\r\n  background: white;\r\n  color: red;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  text-align: center;\r\n  border-radius: 100%;\r\n  box-shadow: 0 2px 5px lightgray;\r\n  transition: all 500ms;\r\n}\r\n\r\n.selected .header-order {\r\n  width: 40px;\r\n  height: 40px;\r\n  background: #FF0000;\r\n  color: white;\r\n  z-index: -1;\r\n}\r\n\r\n.header-order span {\r\n  display: inline-block;\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.header-title {\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 20px;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  color: #9E9E9E;\r\n  transition: all 500ms;\r\n}\r\n\r\n.selected .header-title {\r\n  left: 30px;\r\n  color: #FF0000;\r\n}\r\n\r\n.step-content {\r\n  /*max-height: 0;*/\r\n  transition: all 500ms ease-out;\r\n}\r\n\r\n.selected .step-content {\r\n  padding-bottom: 20px;\r\n  padding-left: 20px;\r\n  padding-top: 15px;\r\n  /*max-height: 1000px;*/\r\n}\r\n\r\n.last-selected .step-content {\r\n  padding-bottom: 3px;\r\n}\r\n\r\n.content:not(.last-unselected):not(.selected) .selected-properties,\r\n.content:not(.last-unselected):not(.selected).is-time .selected-properties {\r\n  padding: 10px 0;\r\n}\r\n\r\n.selected-properties-container {\r\n  position: relative;\r\n  margin-left: 40px;\r\n  padding-left: 10px;\r\n  border-left: 2px solid red;\r\n}\r\n\r\n.selected-property + .selected-property {\r\n  margin-top: 10px;\r\n}\r\n\r\n.list-element {\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -40px;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  width: 40px;\r\n}\r\n\r\n.list-element div {\r\n  width: 100%;\r\n  height: 1px;\r\n  top: 50%;\r\n  left: 0;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  background: red;\r\n}\r\n\r\n.property-name {\r\n  color: white;\r\n  background: gray;\r\n}\r\n\r\n.property-value {\r\n  color: gray;\r\n}\r\n\r\n.property-name, .property-value {\r\n  padding: 2px 5px;\r\n}\r\n\r\n/* Extra Small Devices, Phones */\r\n@media only screen and (max-width : 480px) {\r\n  .selected .step-content {\r\n    padding-right: 20px;\r\n  }\r\n  .content.last-selected::before {\r\n    height: calc(100% - 20px);\r\n  }\r\n}\r\n\r\n/* Small Devices, Tablets */\r\n@media only screen and (min-width : 480px) and (max-width : 768px) {\r\n  .selected .step-content {\r\n    padding-right: 20px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  display: block;\r\n  position: relative;\r\n  background: red;\r\n  color: white;\r\n  max-width: 220px;\r\n  cursor: pointer;\r\n  box-shadow: -2px 5px 5px lightgray;\r\n  margin-top: 10px;\r\n  outline: 0 solid red;\r\n  transition: margin 1000ms, width 1000ms, padding 1000ms, border 250ms, background 250ms, color 0ms,\r\n  outline 100ms, -webkit-transform 1000ms;\r\n  transition: margin 1000ms, transform 1000ms, width 1000ms, padding 1000ms, border 250ms, background 250ms, color 0ms,\r\n  outline 100ms;\r\n  transition: margin 1000ms, transform 1000ms, width 1000ms, padding 1000ms, border 250ms, background 250ms, color 0ms,\r\n  outline 100ms, -webkit-transform 1000ms;\r\n}\r\n\r\n.content:hover {\r\n  outline: 3px solid red;\r\n  background: white;\r\n  color: red;\r\n}\r\n\r\n.content::before {\r\n  display: block;\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 20px;\r\n  height: 1px;\r\n  background: red;\r\n  top: 50%;\r\n  left: 0;\r\n  -webkit-transform: translateY(-50%) translateX(-100%);\r\n          transform: translateY(-50%) translateX(-100%);\r\n  box-shadow: -2px 5px 5px lightgray;\r\n  transition: width 1000ms, -webkit-transform 250ms;\r\n  transition: width 1000ms, transform 250ms;\r\n  transition: width 1000ms, transform 250ms, -webkit-transform 250ms;\r\n}\r\n\r\n.content.is-selected::before {\r\n  width: 40px;\r\n  -webkit-transform: translateY(-50%) translateX(calc(-100% - 2px));\r\n          transform: translateY(-50%) translateX(calc(-100% - 2px));\r\n}\r\n\r\n.content::after {\r\n  display: block;\r\n  position: absolute;\r\n  content: \"\";\r\n  left: -2px;\r\n  top: 50%;\r\n  -webkit-transform: translateX(calc(-50% - 20px)) translateY(-50%);\r\n          transform: translateX(calc(-50% - 20px)) translateY(-50%);\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 100%;\r\n  background: transparent;\r\n  transition: background 1000ms, -webkit-transform 1000ms;\r\n  transition: background 1000ms, transform 1000ms;\r\n  transition: background 1000ms, transform 1000ms, -webkit-transform 1000ms;\r\n}\r\n\r\n.content.is-selected::after {\r\n  -webkit-transform: translateX(calc(-50% - 40px)) translateY(-50%);\r\n          transform: translateX(calc(-50% - 40px)) translateY(-50%);\r\n  background: red;\r\n}\r\n\r\n.title {\r\n  display: inline-block;\r\n  text-align: center;\r\n  padding: 8px 10px;\r\n  transition: all 250ms !important;\r\n}\r\n\r\n.selected-content {\r\n  padding: 0;\r\n  display: none;\r\n}\r\n\r\n.content.is-selected .selected-content {\r\n  display: block;\r\n  padding: 0 10px 10px 10px;\r\n}\r\n\r\n.content.is-selected {\r\n  margin-left: 20px;\r\n  max-width: 100vw;\r\n  background: transparent;\r\n  box-shadow: -5px 5px 30px transparent;\r\n  padding: 10px;\r\n  cursor: default;\r\n  border: none;\r\n  border-left: 3px solid red;\r\n  outline: none;\r\n  color: red;\r\n  transition: margin 1000ms, width 1000ms, padding 1000ms, border 250ms, background 1000ms, color 0ms,\r\n  outline 100ms, -webkit-transform 1000ms;\r\n  transition: margin 1000ms, transform 1000ms, width 1000ms, padding 1000ms, border 250ms, background 1000ms, color 0ms,\r\n  outline 100ms;\r\n  transition: margin 1000ms, transform 1000ms, width 1000ms, padding 1000ms, border 250ms, background 1000ms, color 0ms,\r\n  outline 100ms, -webkit-transform 1000ms;\r\n}\r\n\r\n.content.is-selected .title {\r\n  background: transparent;\r\n  border: none;\r\n  pointer-events: none;\r\n  font-size: 120%;\r\n}\r\n\r\n.content.is-first {\r\n  margin-top: 0;\r\n}\r\n\r\n/* Mobile devices */\r\n@media only screen and (max-width : 480px) {\r\n  .content.is-selected {\r\n    margin-left: -20px;\r\n    border-left: none;\r\n    box-shadow: none;\r\n  }\r\n  .content.is-selected:after {\r\n    opacity: 0;\r\n  }\r\n  .content.is-selected:before {\r\n    opacity: 0;\r\n  }\r\n  .content.is-selected {\r\n    padding-top: 0;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n  display: table;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".content {\r\n}\r\n\r\n.section {\r\n  position: relative;\r\n}\r\n\r\n* + .section {\r\n  margin-top: 20px;\r\n  padding-top: 20px;\r\n}\r\n\r\n* + .section::before {\r\n  display: block;\r\n  position: absolute;\r\n  content: \"\";\r\n  top: 0;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  width: 100%;\r\n  height: 1px;\r\n  background: lightgray;\r\n}\r\n\r\n.currency span {\r\n  font-size: 100%;\r\n}\r\n\r\n.advanced-options-list label {\r\n  margin-top: 10px;\r\n  color: gray;\r\n}\r\n\r\n.advanced-options-list label:hover {\r\n  font-weight: 100;\r\n  margin-top: 10px;\r\n  color: darkslategray;\r\n}\r\n\r\n.advanced-options-list input {\r\n  width: auto;\r\n  box-shadow: none !important;\r\n}\r\n.advanced-options-list .check-box {\r\n  display: block !important;\r\n  margin: 0;\r\n}\r\n\r\n.currency select {\r\n  padding: 5px;\r\n  border: 1px lightgrey solid;\r\n}\r\n\r\n.payment-type-container * {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\ninput { /* Safari 6.1+ */\r\n  -ms-flex: 1; /* IE 10 */\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  width: 100%;\r\n  max-width: 400px;\r\n}\r\n\r\n.estimated-arrival {\r\n  color: gray;\r\n}\r\n\r\n.estimated-arrival span {\r\n  color: red;\r\n}\r\n\r\n.advanced-options-container {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.advanced-options-header {\r\n  display: inline-block;\r\n}\r\n\r\n.advanced-options-header * {\r\n  cursor: pointer !important;\r\n}\r\n\r\n.advanced-options-title {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n.advanced-options-header .glyphicon {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transition: -webkit-transform 250ms;\r\n  transition: transform 250ms;\r\n  transition: transform 250ms, -webkit-transform 250ms;\r\n}\r\n\r\n.advanced-options-container.expanded .glyphicon {\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.check-box {\r\n  margin-left: 10px;\r\n}\r\n\r\n.check-box + .check-box {\r\n  margin-top: 0\r\n}\r\n\r\n.transaction-reference-container {\r\n  margin-top: 20px;\r\n}\r\n\r\n/* Devices other than mobile */\r\n@media only screen and (min-width : 480px) {\r\n  .money-input {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    position: relative;\r\n    max-width: 400px;\r\n  }\r\n\r\n  .money-input .currency {\r\n    position: relative;\r\n    margin-left: 10px;\r\n    padding: 0 5px;\r\n    color: red;\r\n    font-size: 120%;\r\n    text-align: center;\r\n    border: 1px solid lightgray;\r\n    transition: border 250ms, box-shadow 250ms;\r\n  }\r\n\r\n  .money-input .currency:hover {\r\n    border-color: transparent;\r\n    box-shadow: -2px 3px 10px lightgray;\r\n  }\r\n\r\n  .money-input .currency span {\r\n    display: block;\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n  }\r\n\r\n  .fees-box {\r\n    display: block;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .fees-box .names-box {\r\n    display: inline-block;\r\n    text-align: right;\r\n  }\r\n\r\n  .fees-box .names-box span {\r\n    display: block;\r\n    color: gray;\r\n  }\r\n\r\n  .fees-box .values-box {\r\n    display: inline-block;\r\n    position: relative;\r\n    margin-left: 10px;\r\n    border-left: 1px gray solid;\r\n    padding: 10px 0 10px 10px;\r\n  }\r\n\r\n  .fees-box .values-box li {\r\n    position: relative;\r\n    list-style: none;\r\n    color: gray;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .fees-box .values-box li::before {\r\n    display: block;\r\n    position: absolute;\r\n    left: -20px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    content: '';\r\n    width: 10px;\r\n    height: 1px;\r\n    background: gray;\r\n  }\r\n\r\n  .fees-box .values-box li::after {\r\n    display: block;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    content: '';\r\n    width: 3px;\r\n    height: 5px;\r\n    background: gray;\r\n  }\r\n\r\n  .fees-box .values-box li.important, .fees-box .names-box span.important {\r\n    color: white;\r\n    padding: 1px 5px;\r\n    background: red;\r\n    border-radius: 3px;\r\n  }\r\n}\r\n\r\n/* Mobile devices */\r\n@media only screen and (max-width : 480px) {\r\n  .money-input {\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid lightgray;\r\n  }\r\n\r\n  .money-input .currency {\r\n    position: relative;\r\n    color: red;\r\n    font-size: 120%;\r\n    height: 30px;\r\n    border: none !important;\r\n  }\r\n\r\n  .fees-box {\r\n    display: block;\r\n    position: relative;\r\n    text-align: center;\r\n    padding: 10px;\r\n    margin: 20px 0;\r\n    border: 1px solid lightgray;\r\n    /*border-right: none;\r\n    border-left: none;*/\r\n  }\r\n\r\n  .fees-box::before {\r\n    display: block;\r\n    position: absolute;\r\n    content: '';\r\n    top: 0;\r\n    left: 50%;\r\n    width: 1px;\r\n    height: 20px;\r\n    -webkit-transform: translateX(-50%) translateY(-100%);\r\n            transform: translateX(-50%) translateY(-100%);\r\n    background: lightgray;\r\n  }\r\n\r\n  .fees-box::after {\r\n    display: block;\r\n    position: absolute;\r\n    content: '';\r\n    bottom: 0;\r\n    left: 50%;\r\n    width: 1px;\r\n    height: 20px;\r\n    -webkit-transform: translateX(-50%) translateY(100%);\r\n            transform: translateX(-50%) translateY(100%);\r\n    background: lightgray;\r\n  }\r\n\r\n  .fees-box .names-box {\r\n    display: inline-block;\r\n    text-align: right;\r\n  }\r\n\r\n  .fees-box .names-box span {\r\n    display: block;\r\n    color: gray;\r\n    border-bottom: 1px solid lightgray;\r\n  }\r\n\r\n  .fees-box .values-box {\r\n    display: inline-block;\r\n    position: relative;\r\n    text-align: left;\r\n  }\r\n\r\n  .fees-box .values-box li {\r\n    position: relative;\r\n    list-style: none;\r\n    color: gray;\r\n    border-bottom: 1px solid lightgray;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"arrow glyphicon-container\" *ngIf=\"isScrollNeeded\" (click)=\"scrollList(-1)\">\r\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n  </div>\r\n  <div #accountListContainer class=\"account-list-container\">\r\n    <div #accountList class=\"account-list\">\r\n      <app-account class=\"account\" *ngFor=\"let account of accounts\"\r\n               [accountSelected]=\"account === selectedAccount\"\r\n               [account]=\"account\" (click)=\"selectedAccount = account\"></app-account>\r\n    </div>\r\n  </div>\r\n  <div class=\"arrow glyphicon-container\" *ngIf=\"isScrollNeeded\">\r\n    <span class=\"glyphicon glyphicon-chevron-right\" (click)=\"scrollList(1)\"></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<div class=\"account-container\">\r\n  <div class=\"account-header\" [@headerState]=\"accountSelected ? 'selected' : 'unselected'\">\r\n    <span class=\"glyphicon {{account.getAccountTypeIcon()}}\"></span>\r\n    {{account.getName()}}\r\n  </div>\r\n  <div class=\"account-body\">\r\n    <div class=\"account-credit\">\r\n      <span class=\"currency-flag currency-flag-{{account.getCurrencyType()}}\"></span>\r\n      {{css.getSymbolFor(account.getCurrencyType())}}{{!!nfs ? nfs.toLocaleString(account.getCredit(), 2, 2) : ''}}\r\n    </div>\r\n    <div class=\"account-balance\">\r\n      Available balance\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-bar\">\r\n  <div class=\"title\">Make a payment</div>\r\n</div>\r\n\r\n<div class=\"workflow\">\r\n  <app-step-manager>\r\n    <!--STEP ONE: PAYEE SELECTION-->\r\n    <app-step [name]=\"'payeeSelect'\" [title]=\"'Send money to:'\" [selectedProperties]=\"payeeSelectedProperties\">\r\n      <app-tabs-manager>\r\n        <app-tab [title]=\"'Create a new payee'\">\r\n          <app-new-payee (submitNewRecipient)=\"payee = $event\"></app-new-payee>\r\n        </app-tab>\r\n\r\n        <app-tab [title]=\"'Select an existing payee'\">\r\n          <app-recipient-selector [(selectedRecipient)]=\"payee\"></app-recipient-selector>\r\n        </app-tab>\r\n      </app-tabs-manager>\r\n    </app-step>\r\n\r\n    <!--STEP TWO: ACCOUNT SELECTION-->\r\n    <app-step [name]=\"'accountSelect'\" [title]=\"'Pay with:'\" [selectedProperties]=\"accountSelectedProperties\">\r\n      <app-tabs-manager>\r\n        <app-tab [title]=\"'Select an account to pay with'\">\r\n          <app-account-selector [(selectedAccount)]=\"account\"></app-account-selector>\r\n        </app-tab>\r\n      </app-tabs-manager>\r\n    </app-step>\r\n\r\n    <!--STEP THREE: TRANSACTION FORM-->\r\n    <app-step [name]=\"'formFill'\" [title]=\"'Set up your transfer'\" [selectedProperties]=\"formSelectedProperties\">\r\n      <app-tabs-manager>\r\n        <app-tab [title]=\"'Create the transaction'\">\r\n          <app-transfer [(account)]=\"account\"\r\n                        [(recipient)]=\"payee\"></app-transfer>\r\n        </app-tab>\r\n      </app-tabs-manager>\r\n    </app-step>\r\n  </app-step-manager>\r\n</div>\r\n\r\n<app-popup>\r\n  <app-popup-option [name]=\"'review'\" [title]=\"'Please review your transaction'\">\r\n    <app-transaction-review [fromAccount]=\"account\"\r\n                            [toPayee]=\"payee\"\r\n                            [fromCredit]=\"transactionTransferAmount\"\r\n                            [toCredit]=\"transactionFinalAmount\"></app-transaction-review>\r\n    <button type=\"button\" (click)=\"popupService.changeOption('check')\">\r\n      Everything is correct\r\n      <span class=\"glyphicon glyphicon-arrow-right\"></span>\r\n    </button>\r\n  </app-popup-option>\r\n  <app-popup-option [name]=\"'check'\" [title]=\"'Are you sure?'\">\r\n    <button type=\"button\" (click)=\"popupService.changeVisibility(false)\">I need to change something</button>\r\n    <button type=\"button\" (click)=\"popupService.changeVisibility(false)\">Place transaction</button>\r\n  </app-popup-option>\r\n</app-popup>\r\n"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [class.showing-popup]=\"isShowingPopup\" (mouseover)=\"isDraggingMouse = true\" (mouseleave)=\"isDraggingMouse = false\">\r\n  <div class=\"strip\">\r\n    <div class=\"date-cell\">\r\n      <span class=\"value\">{{selectedDate.getDate()}}</span>\r\n      <span class=\"title\">day</span>\r\n    </div>\r\n\r\n    <div class=\"date-cell\">\r\n      <span class=\"value\">{{selectedDate.getMonth() + 1}}</span>\r\n      <span class=\"title\">month</span>\r\n    </div>\r\n\r\n    <div class=\"date-cell\">\r\n      <span class=\"value\">{{selectedDate.getFullYear()}}</span>\r\n      <span class=\"title\">year</span>\r\n    </div>\r\n\r\n    <div class=\"calendar-glyphicon\" (mousedown)=\"toggleIsShowingPopup()\">\r\n      <span class=\"glyphicon glyphicon-calendar\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"popup\" *ngIf=\"isShowingPopup\">\r\n    <div class=\"top\">\r\n      <h1>\r\n        <span class=\"arrow arrow-left glyphicon glyphicon-chevron-left\" (click)=\"moveYearRelative(-1)\"></span>\r\n        <span class=\"arrow arrow-right glyphicon glyphicon-chevron-right\" (click)=\"moveYearRelative(1)\"></span>\r\n        <span>{{getYear()}}</span>\r\n      </h1>\r\n\r\n      <h2>\r\n        <span class=\"arrow arrow-left glyphicon glyphicon-chevron-left\" (click)=\"moveMonthRelative(-1)\"></span>\r\n        <span class=\"arrow arrow-right glyphicon glyphicon-chevron-right\" (click)=\"moveMonthRelative(1)\"></span>\r\n        {{getMonthName()}}\r\n      </h2>\r\n\r\n      <ul class=\"days-titles\">\r\n        <li *ngFor=\"let day of getDayNames()\" class=\"day-header\">{{day}}</li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"bottom\">\r\n      <ul class=\"days-table\">\r\n        <li *ngFor=\"let day of getStartingDays()\">\r\n          <div class=\"day-wrapper starting-day\">\r\n            <span>{{day}}</span>\r\n          </div>\r\n        </li>\r\n\r\n        <li *ngFor=\"let day of getDaysOfMonth()\"\r\n            (click)=\"onDayClick(day)\">\r\n          <div class=\"day-wrapper\" [class.selected-day]=\"isDaySelected(day)\">\r\n            <span>{{day}}</span>\r\n          </div>\r\n        </li>\r\n\r\n        <li *ngFor=\"let day of getEndingDays()\">\r\n          <div class=\"day-wrapper starting-day\">\r\n            <span>{{day}}</span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cb works!\r\n</p>\r\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [class.expanded]=\"isBodyVisible\">\r\n  <div class=\"title\" (click)=\"toggleBody()\">\r\n    {{title}}\r\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n  </div>\r\n  <div class=\"body\" [appSmoothFade]=\"isBodyVisible\">\r\n    <div *ngIf=\"isBodyVisible\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [class.expandable]=\"allowSelection\" [class.has-selection]=\"hasSelection()\"\r\n     *ngIf=\"keysAndFlagsMap\" (click)=\"toggleList()\">\r\n  <div class=\"selection\">\r\n    <div class=\"selection-content\" *ngIf=\"flagType === 'currency'\">\r\n      <div class=\"currency-flag currency-flag-{{getFlagName()}}\"></div>\r\n      <span class=\"text\">{{getSelectedKey()}}</span>\r\n      <span class=\"selection-arrow glyphicon glyphicon-chevron-down\" *ngIf=\"allowSelection\"></span>\r\n    </div>\r\n    <div class=\"selection-content\" *ngIf=\"flagType === 'country'\">\r\n      <div class=\"flag-icon flag-icon-{{getFlagName()}}\"></div>\r\n      <span class=\"text\">{{getSelectedKey()}}</span>\r\n      <span class=\"selection-arrow glyphicon glyphicon-chevron-down\" *ngIf=\"allowSelection\"></span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"selection-list\" [appSmoothFade]=\"isShowingList\">\r\n    <div *ngIf=\"isShowingList\">\r\n      <ul *ngIf=\"flagType === 'currency'\">\r\n        <li *ngFor=\"let key of keysAndFlagsMap.keys();\"\r\n            (mousedown)=\"selectedKey = key; toggleList()\">\r\n          <div class=\"currency-flag currency-flag-{{keysAndFlagsMap.get(key)}}\"></div>\r\n          <span>{{key}}</span>\r\n        </li>\r\n      </ul>\r\n      <ul *ngIf=\"flagType === 'country'\">\r\n        <li *ngFor=\"let key of keysAndFlagsMap.keys();\"\r\n            (mousedown)=\"selectedKey = key; toggleList()\">\r\n          <div class=\"flag-icon flag-icon-{{keysAndFlagsMap.get(key)}}\"></div>\r\n          <span>{{key}}</span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [appSmoothFade]=\"!!iban\">\r\n\r\n  <div *ngIf=\"iban\">\r\n    <div class=\"entry\" *ngIf=\"iban.bank\">\r\n      <span>Bank</span>\r\n      <div class=\"value\">{{iban.bank}}</div>\r\n    </div>\r\n    <div class=\"entry\" *ngIf=\"iban.branch\">\r\n      <span>Branch</span>\r\n      <div class=\"value\">{{iban.branch}}</div>\r\n    </div>\r\n    <div class=\"entry\" *ngIf=\"iban.bic\">\r\n      <span>BIC</span>\r\n      <div class=\"value\">{{iban.bic}}</div>\r\n    </div>\r\n    <div class=\"entry\" *ngIf=\"iban.address\">\r\n      <span>Address</span>\r\n      <div class=\"value\">{{iban.address}}</div>\r\n    </div>\r\n    <div class=\"entry\" *ngIf=\"iban.city\">\r\n      <span>City</span>\r\n      <div class=\"value\">{{iban.city}}</div>\r\n    </div>\r\n    <div class=\"entry\" *ngIf=\"iban.country\">\r\n      <span>Country</span>\r\n      <div class=\"value\">{{iban.country}}</div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [class.focused]=\"isFocused\"\r\n     [class.has-value]=\"!!value && value.length !== 0\"\r\n     [class.hover]=\"isHovering\">\r\n  <input type=\"text\" [(ngModel)]=\"value\"\r\n         (focus)=\"isFocused = true\" (blur)=\"isFocused = false\"\r\n         (mouseenter)=\"isHovering = true\" (mouseleave)=\"isHovering = false\">\r\n  <div class=\"placeholder\">{{placeholder}}</div>\r\n</div>\r\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\"\r\n     [class.focused]=\"isFocused\"\r\n     [class.has-value]=\"!!value && value.length !== 0\"\r\n     [class.hover]=\"isHovering\">\r\n  <div class=\"currency-symbol\">\r\n    <span>{{currency}}</span>\r\n  </div>\r\n  <input type=\"text\" [(ngModel)]=\"value\"\r\n         (focus)=\"isFocused = true\" (blur)=\"onBlur();isFocused = false\"\r\n         (mouseenter)=\"isHovering = true\" (mouseleave)=\"isHovering = false\">\r\n  <div class=\"placeholder\">{{placeholder}}</div>\r\n</div>\r\n"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"form-container\">\r\n    <div class=\"flags\">\r\n      <app-flags-dropdown [(selectedKey)]=\"selectedCountry\" [flagType]=\"'country'\" [keysAndFlagsMap]=\"countryFlags\"></app-flags-dropdown>\r\n    </div>\r\n\r\n    <div class=\"horizontal-sm\">\r\n      <div [appSmoothFade]=\"hasSelection()\">\r\n        <div class=\"vertical-input important-input\" *ngIf=\"hasSelection()\">\r\n          <div class=\"input input-validation-parent\">\r\n            <app-input [(value)]=\"name\" [placeholder]=\"'Payee\\'s full name'\"></app-input>\r\n            <div style=\"margin-bottom: 10px\" class=\"input-validation\" [class.input-validation-empty]=\"payeeNameValidationError\"></div>\r\n          </div>\r\n          <div class=\"input\">\r\n            <app-input [(value)]=\"address\" [placeholder]=\"'Payee\\'s address'\"></app-input>\r\n          </div>\r\n          <div class=\"check-box\">\r\n            <input [(ngModel)]=\"save\" style=\"display:inline-block;width:auto\" type=\"checkbox\" id=\"save-for-later\">\r\n            <label for=\"save-for-later\">\r\n              <span class=\"glyphicon glyphicon-ok\"></span>\r\n              Save for future payments\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"horizontal-sm\">\r\n      <div [appSmoothFade]=\"isSelected('Spain')\">\r\n        <div *ngIf=\"isSelected('Spain')\">\r\n          <div class=\"horizontal-input important-input\">\r\n            <div class=\"input input-validation-parent\">\r\n              <app-input [(value)]=\"iban\" [placeholder]=\"'IBAN of Account'\"></app-input>\r\n              <div class=\"input-validation\" [class.input-validation-enter]=\"ibanValidationError\"></div>\r\n            </div>\r\n            <app-iban [iban]=\"ibanObject\" [(isValid)]=\"ibanValid\"></app-iban>\r\n            <button [class.inverted]=\"ibanValid\" type=\"button\" (click)=\"checkIban()\">Check IBAN</button>\r\n            <button class=\"submit-button\"\r\n                    [class.deactivated]=\"!ibanValid\"\r\n                    type=\"button\" style=\"margin-top: 20px;\"\r\n                    *ngIf=\"hasSelection()\" (click)=\"onSubmit()\">\r\n              Continue\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div [appSmoothFade]=\"isSelected('United Kingdom')\">\r\n        <div *ngIf=\"isSelected('United Kingdom')\">\r\n          <div class=\"horizontal-input important-input\">\r\n            <div class=\"input input-validation-parent\">\r\n              <app-input [(value)]=\"sortCode\" [placeholder]=\"'Sort Code'\"></app-input>\r\n              <div class=\"input-validation\" [class.input-validation-enter]=\"sortCodeValidationError\"></div>\r\n            </div>\r\n            <div class=\"input input-validation-parent\">\r\n              <app-input [(value)]=\"accountNumber\" [placeholder]=\"'Account Number'\"></app-input>\r\n              <div class=\"input-validation\" [class.input-validation-enter]=\"accountNumberValidationError\"></div>\r\n            </div>\r\n            <app-iban [iban]=\"ibanObject\" [(isValid)]=\"ibanValid\"></app-iban>\r\n            <button [class.inverted]=\"ibanValid\" type=\"button\" (click)=\"checkIban()\">Check Account</button>\r\n            <button class=\"submit-button\"\r\n                    [class.deactivated]=\"!ibanValid\"\r\n                    type=\"button\" style=\"margin-top: 20px;\"\r\n                    *ngIf=\"hasSelection()\" (click)=\"onSubmit()\">\r\n              Continue\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div [appSmoothFade]=\"isSelected('India')\">\r\n        <div *ngIf=\"isSelected('India')\">\r\n          <div class=\"horizontal-input important-input\">\r\n            <div class=\"input input-validation-parent\">\r\n              <app-input [(value)]=\"iban\" [placeholder]=\"'IBAN of Account'\"></app-input>\r\n              <div class=\"input-validation\" [class.input-validation-enter]=\"ibanValidationError\"></div>\r\n            </div>\r\n            <app-iban [iban]=\"ibanObject\" [(isValid)]=\"ibanValid\"></app-iban>\r\n            <button [class.inverted]=\"ibanValid\" type=\"button\" (click)=\"checkIban()\">Check IBAN</button>\r\n            <button class=\"submit-button\"\r\n                    [class.deactivated]=\"!ibanValid\"\r\n                    type=\"button\" style=\"margin-top: 20px;\"\r\n                    *ngIf=\"hasSelection()\" (click)=\"onSubmit()\">\r\n              Continue\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div [appSmoothFade]=\"isSelected('United States')\">\r\n        <div *ngIf=\"isSelected('United States')\">\r\n          <div class=\"horizontal-input important-input\">\r\n            <div class=\"input input-validation-parent\">\r\n              <app-input [(value)]=\"routingNumber\" [placeholder]=\"'Routing Number'\"></app-input>\r\n              <div class=\"input-validation\" [class.input-validation-enter]=\"routingNumberValidationError\"></div>\r\n            </div>\r\n            <div class=\"input input-validation-parent\">\r\n              <app-input [(value)]=\"accountNumber\" [placeholder]=\"'Account Number'\"></app-input>\r\n              <div class=\"input-validation\" [class.input-validation-enter]=\"accountNumberValidationError\"></div>\r\n            </div>\r\n            <app-iban [iban]=\"ibanObject\" [(isValid)]=\"ibanValid\"></app-iban>\r\n            <button [class.inverted]=\"ibanValid\" type=\"button\" (click)=\"checkIban()\">Check Account</button>\r\n            <button class=\"submit-button\"\r\n                    [class.deactivated]=\"!ibanValid\"\r\n                    type=\"button\" style=\"margin-top: 20px;\"\r\n                    *ngIf=\"hasSelection()\" (click)=\"onSubmit()\">\r\n              Continue\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<div class=\"recipient-container\">\r\n  <div *ngIf=\"recipient\">\r\n    <div class=\"recipient-header\" [@headerState]=\"selected ? 'selected' : 'unselected'\">\r\n      <span class=\"glyphicon glyphicon-user\"></span>\r\n      <span class=\"text\">{{recipient.getName()}}</span>\r\n    </div>\r\n    <div class=\"recipient-body\">\r\n      <div class=\"flag\">\r\n        <span class=\"currency-flag currency-flag-{{recipient.getAccount().getCurrencyType()}}\"></span>\r\n        {{recipient.getAccount().getCurrencyType().toUpperCase()}}\r\n      </div>\r\n      <div class=\"recipient-body-description\">\r\n        <div class=\"ending\">account ending with {{recipient.getAccount().getLastDigits()}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"new-recipient\" *ngIf=\"!recipient\">\r\n    <div class=\"recipient-header\">\r\n      <span class=\"glyphicon glyphicon-plus\"></span>\r\n      <span class=\"text\">New Recipient</span>\r\n    </div>\r\n    <div class=\"recipient-body\">\r\n      <div class=\"account\">Create</div>\r\n      <div class=\"ending\">new recipient</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div [appSmoothFade]=\"isVisible\">\r\n  <div *ngIf=\"isVisible\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<div [appSmoothFade]=\"isVisible\">\r\n  <div class=\"wrap\" *ngIf=\"isVisible\">\r\n    <div class=\"content\">\r\n      <div class=\"card title-card\">\r\n        <div class=\"title\">\r\n          {{title}}\r\n        </div>\r\n        <div class=\"back\" (click)=\"onExit()\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card message-card\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" (click)=\"onClick.emit()\"\r\n     [class.selected]=\"isSelected\">\r\n  <div class=\"dot\"></div>\r\n  <span>{{title}}</span>\r\n</div>\r\n"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n    <div class=\"arrow\" (click)=\"scrollList(-1)\" *ngIf=\"isScrollNeeded\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n    </div>\r\n\r\n    <div #recipientListContainer class=\"recipient-list-container\">\r\n      <div #recipientList class=\"recipient-list\">\r\n        <app-payee class=\"recipient\" *ngFor=\"let recipient of recipients\"\r\n                   [selected]=\"selectedRecipient === recipient\"\r\n                   [recipient]=\"recipient\" (click)=\"selectedRecipient = recipient\"></app-payee>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"arrow\" (click)=\"scrollList(1)\" *ngIf=\"isScrollNeeded\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  step-selection works!\r\n</p>\r\n"

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\"\r\n     [class.selected]=\"isSelected\"\r\n     [class.unselected]=\"!isSelected\"\r\n     [class.last-unselected]=\"!isSelected && isLastStep\"\r\n     [class.last-selected]=\"isSelected && isLastStep\"\r\n     [class.is-time]=\"isTime\">\r\n  <div class=\"step-header\" (click)=\"stepClick.emit()\">\r\n    <div class=\"header-order\"><span>{{stepIndex}}</span></div>\r\n    <div class=\"header-title\">{{title}}</div>\r\n  </div>\r\n\r\n  <div #content class=\"step-content\" [appSmoothFade]=\"isSelected\">\r\n    <div *ngIf=\"isSelected\"></div>\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <div class=\"selected-properties\">\r\n    <div class=\"selected-properties-container\"\r\n         *ngIf=\"isTime && !isSelected && !!selectedProperties && selectedProperties.length !== 0\">\r\n      <div class=\"selected-property\" *ngFor=\"let property of selectedProperties\">\r\n        <span class=\"property-name\">\r\n          {{property.propertyName}}\r\n        </span>\r\n        <span class=\"property-value\">\r\n          {{property.propertyValue}}\r\n        </span>\r\n      </div>\r\n      <div class=\"list-element\">\r\n        <div></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = "<div #contentEl class=\"content\"\r\n     [class.is-selected]=\"isSelected\"\r\n     [class.is-first]=\"isFirst\" (click)=\"onClick.emit()\">\r\n  <div #titleEl class=\"title\" >{{title}}</div>\r\n  <div #selectedContentEl class=\"selected-content\" [appSmoothFade]=\"isSelected\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{fromAccount ? fromAccount.getName() : ''}}\r\n</p>\r\n<p>\r\n  {{toPayee ? toPayee.getName() : ''}}\r\n</p>\r\n<p>\r\n  {{fromCurrency}} {{fromCredit}}\r\n</p>\r\n<p>\r\n  {{toCurrency}} {{toCredit}}\r\n</p>\r\n"

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"section\">\r\n      <div style=\"max-width:400px\">\r\n        <app-input [placeholder]=\"'Transaction\\'s reference'\"></app-input>\r\n      </div>\r\n\r\n      <div class=\"payment-type-container\" style=\"margin-top:10px\">\r\n        <span style=\"color:gray\">Payment type:</span>\r\n        <app-rb-group [(selectionIndex)]=\"selectedPaymentTypeIndex\">\r\n          <app-rb [title]=\"'fast'\"></app-rb>\r\n          <app-rb [title]=\"'cheap'\"></app-rb>\r\n          <app-rb [title]=\"'scheduled'\"></app-rb>\r\n        </app-rb-group>\r\n      </div>\r\n\r\n      <div [appSmoothFade]=\"selectedPaymentTypeIndex === 2\">\r\n        <div *ngIf=\"selectedPaymentTypeIndex === 2\" style=\"max-width:400px;margin-top:10px\">\r\n          <app-calendar></app-calendar>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"margin-top:10px;max-width:400px\" *ngIf=\"!!recipient && recipient.getAccount().getCountry() !== 'united states'\">\r\n        <app-expandable-box [title]=\"'Additional reference fields'\">\r\n          <div>\r\n            <app-input [placeholder]=\"'Reference #2'\"></app-input>\r\n          </div>\r\n          <div style=\"margin-top:10px\">\r\n            <app-input [placeholder]=\"'Reference #3'\"></app-input>\r\n          </div>\r\n          <div style=\"margin-top:10px\">\r\n            <app-input [placeholder]=\"'Reference #4'\"></app-input>\r\n          </div>\r\n        </app-expandable-box>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <div style=\"display:flex;max-width:400px;\">\r\n        <div style=\"-webkit-flex: 1;-ms-flex: 1;flex: 1;\">\r\n          <app-money-input [currency]=\"css.getSymbolFor(fromCurrency)\"\r\n                           [(value)]=\"fromCredit\" [placeholder]=\"'Amount to pay'\"></app-money-input>\r\n        </div>\r\n        <div style=\"padding-left:10px\">\r\n          <app-flags-dropdown [flagType]=\"'currency'\" [keysAndFlagsMap]=\"currencyMap\" [(selectedKey)]=\"fromCurrency\" [allowSelection]=\"false\"></app-flags-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fees-box\">\r\n        <div class=\"names-box\">\r\n          <span class=\"fee-name important\">Santander Fee</span>\r\n          <span class=\"fee-name\">Exchange Rate</span>\r\n        </div>\r\n        <div class=\"values-box\">\r\n          <li class=\"important\">{{nfs.toLocaleString(santanderFee)}}</li>\r\n          <li>1 : {{nfs.toLocaleString(exchangeRate)}}</li>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"display:flex;max-width:400px;\">\r\n        <div style=\"-webkit-flex: 1;-ms-flex: 1;flex: 1;\">\r\n          <app-money-input [currency]=\"css.getSymbolFor(toCurrency)\"\r\n                           [(value)]=\"toCredit\" [placeholder]=\"'Amount to transfer'\"></app-money-input>\r\n        </div>\r\n        <div style=\"padding-left:10px\">\r\n          <app-flags-dropdown [flagType]=\"'currency'\" [keysAndFlagsMap]=\"currencyMap\" [(selectedKey)]=\"toCurrency\"></app-flags-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"margin-top:10px;\">\r\n        <app-expandable-box [title]=\"'Show advanced options'\">\r\n          <label for=\"select-fees-payment\">Select how to pay the fees</label>\r\n          <select [(ngModel)]=\"feesPaymentMode\" id=\"select-fees-payment\">\r\n            <option value=\"sender\">Sender</option>\r\n            <option value=\"shared\">Shared</option>\r\n            <option value=\"receiver\">Receiver</option>\r\n          </select>\r\n\r\n          <div *ngIf=\"'sender' === feesPaymentMode || 'shared' === feesPaymentMode\" style=\"display:block;margin-left:0\" class=\"check-box\">\r\n            <input [(ngModel)]=\"useFeesAccount\" style=\"display:inline-block;width:auto\" type=\"checkbox\" id=\"use-account-for-fees\">\r\n            <label for=\"use-account-for-fees\">\r\n              <span class=\"glyphicon glyphicon-ok\"></span>\r\n              Pay fees with another account\r\n            </label>\r\n          </div>\r\n\r\n          <div [appSmoothFade]=\"('sender' === feesPaymentMode || 'shared' === feesPaymentMode) && useFeesAccount\">\r\n            <div *ngIf=\"('sender' === feesPaymentMode || 'shared' === feesPaymentMode) && useFeesAccount\" style=\"display: block;margin-top: 10px\">\r\n              <app-account-selector [(selectedAccount)]=\"feesAccount\"></app-account-selector>\r\n            </div>\r\n          </div>\r\n        </app-expandable-box>\r\n      </div>\r\n    </div>\r\n    <div class=\"section\">\r\n      <div style=\"margin-top:0\" class=\"estimated-arrival\">\r\n        Estimated arrival: <span>{{eta}}</span>\r\n      </div>\r\n      <button type=\"button\" (click)=\"popupService.changeOption('review')\">\r\n        Continue to the final configuration\r\n        <span class=\"glyphicon glyphicon-arrow-right\"></span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ })
],[245]);
//# sourceMappingURL=main.bundle.js.map