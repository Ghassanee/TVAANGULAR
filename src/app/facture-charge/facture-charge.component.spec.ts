import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureChargeComponent } from './facture-charge.component';

describe('FactureChargeComponent', () => {
  let component: FactureChargeComponent;
  let fixture: ComponentFixture<FactureChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
