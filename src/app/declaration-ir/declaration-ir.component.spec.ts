import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationIRComponent } from './declaration-ir.component';

describe('DeclarationIRComponent', () => {
  let component: DeclarationIRComponent;
  let fixture: ComponentFixture<DeclarationIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
