export class Fee {
  private amount: number;
  private name: string;
  private important: boolean;

  constructor(amount: number, name: string, important: boolean) {
    this.amount = amount;
    this.name = name;
    this.important = important;
  }

  public getAmount(): number{
    return this.amount;
  }

  public getName(): string {
    return this.name;
  }

  public isImportant(): boolean {
    return this.important;
  }
}
