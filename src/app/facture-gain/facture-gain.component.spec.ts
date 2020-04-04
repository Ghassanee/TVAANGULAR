import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureGainComponent } from './facture-gain.component';

describe('FactureGainComponent', () => {
  let component: FactureGainComponent;
  let fixture: ComponentFixture<FactureGainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureGainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureGainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
