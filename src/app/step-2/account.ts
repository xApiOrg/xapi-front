export class Account {

  static ACCOUNT_BANK = 'bank';
  static ACCOUNT_CARD = 'card';
  static ACCOUNT_TYPES = new Map()
    .set(Account.ACCOUNT_BANK, 'glyphicon-piggy-bank')
    .set(Account.ACCOUNT_CARD, 'glyphicon-credit-card');

  private currencyCode: string;
  private accountType: string;
  private country: string;
  private countryCode: string;
  private number: string;
  private credit: number;
  private name: string;

  constructor(currencyCode: string,
              accountType: string,
              country: string,
              countryCode: string,
              credit: number,
              number: string,
              name: string) {
    this.currencyCode = currencyCode;
    this.accountType = accountType;
    this.country = country;
    this.countryCode = countryCode;
    this.credit = credit;
    this.number = number;
    this.name = name;
  }

  public getCurrencyType(): string {
    return this.currencyCode;
  }

  public getAccountType(): string {
    return this.accountType;
  }

  public getCountry(): string {
    return this.country;
  }

  public getCountryCode(): string {
    return this.countryCode;
  }

  public getCredit(): number {
    return this.credit;
  }

  public getNumber(): string {
    return this.number;
  }

  public getName(): string {
    return this.name;
  }

  public getAccountTypeIcon(): string {
    return Account.ACCOUNT_TYPES.get(this.accountType);
  }

  public getLastDigits(): string {
    return this.number.substring(this.number.length - 4, this.number.length);
  }

  public addCredit(amount: number): void {
    this.credit += amount;
  }

  public takeCredit(amount: number): void {
    this.credit -= amount;
  }
}
