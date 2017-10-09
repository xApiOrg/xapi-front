import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeNewComponent } from './payee-new.component';

describe('PayeeNewComponent', () => {
  let component: PayeeNewComponent;
  let fixture: ComponentFixture<PayeeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
