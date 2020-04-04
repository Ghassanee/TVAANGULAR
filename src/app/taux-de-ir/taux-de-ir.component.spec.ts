import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxDeIRComponent } from './taux-de-ir.component';

describe('TauxDeIRComponent', () => {
  let component: TauxDeIRComponent;
  let fixture: ComponentFixture<TauxDeIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TauxDeIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TauxDeIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
