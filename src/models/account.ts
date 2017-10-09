export class Account {
  static ACCOUNT_CASH = 'CASH';
  static ACCOUNT_CURRENT = 'CURRENT';
  static ACCOUNT_FX = 'FX';
  static ACCOUNT_TYPES = new Map()
    .set(Account.ACCOUNT_CASH, 'glyphicon-piggy-bank')
    .set(Account.ACCOUNT_CURRENT, 'glyphicon-credit-card')
    .set(Account.ACCOUNT_FX, 'glyphicon-random');

  private currency: string;
  private type: string;
  private country: string;
  private number: string;
  private balance: number;
  private description: string;

  constructor(currency: string,
              type: string,
              country: string,
              balance: number,
              number: string,
              description: string) {
    this.currency = currency;
    this.type = type;
    this.country = country;
    this.balance = balance;
    this.number = number;
    this.description = description;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public getType(): string {
    return this.type;
  }

  public getCountry(): string {
    return this.country;
  }

  public getBalance(): number {
    return this.balance;
  }

  public getNumber(): string {
    return this.number;
  }

  public getDescription(): string {
    return this.description;
  }

  public getIcon(): string {
    return Account.ACCOUNT_TYPES.get(this.type);
  }

  public getLastDigits(): string {
    return this.number.substring(this.number.length - 4, this.number.length);
  }

  public addBalance(amount: number): void {
    this.balance += amount;
  }

  public takeBalance(amount: number): void {
    this.balance -= amount;
  }
}
