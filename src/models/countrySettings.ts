export class Field {
  private id: number;
  private title: string;
  private tooltip: string;
  private type: string;
  private maxLength: number;
  private required: boolean;
  private sectionName: string;

  constructor(id: number,
              title: string,
              tooltip: string,
              type: string,
              maxLength: number,
              required: boolean,
              sectionName: string) {
    this.id = id;
    this.title = title;
    this.tooltip = tooltip;
    this.type = type;
    this.maxLength = maxLength;
    this.required = required || false;
    this.sectionName = sectionName;
    if (this.required) {
      this.title += ' *';
    }
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getTooltip(): string {
    return this.tooltip;
  }

  public getType(): string {
    return this.type;
  }

  public getMaxLength(): number {
    return this.maxLength;
  }

  public isRequired(): boolean {
    return this.required;
  }

  public getSectionName(): string {
    return this.sectionName;
  }
}

export class Section {
  private name: string;
  private fields: Field[];
  private country: string;

  constructor(name: string, fields: Field[], country: string) {
    this.name = name;
    this.fields = fields;
    this.country = country;
  }

  public getName(): string {
    return this.name;
  }

  public getFields(): Field[] {
    return this.fields;
  }

  public getCountry(): string {
    return this.country;
  }
}

export class Country {
  private code: string;
  private flag: string;
  private name: string;
  private sections: Section[];

  constructor(code: string, flag: string, name: string, sections: Section[]) {
    this.code = code;
    this.flag = flag;
    this.name = name;
    this.sections = sections;
  }

  public getCode(): string {
    return this.code;
  }

  public getFlag(): string {
    return this.flag;
  }

  public getName(): string {
    return this.name;
  }

  public getSections(): Section[] {
    return this.sections;
  }
}
