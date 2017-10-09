import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeSelectorComponent } from './payee-selector.component';

describe('PayeeSelectorComponent', () => {
  let component: PayeeSelectorComponent;
  let fixture: ComponentFixture<PayeeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
