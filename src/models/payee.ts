export class Payee {
  private id: number;
  private name: string;
  private currency: string;
  private country: string;

  constructor(id: number, name: string, currency: string, country: string) {
    this.id = id;
    this.name = name;
    this.currency = currency;
    this.country = country;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public getCountry(): string {
    return this.country;
  }
}
