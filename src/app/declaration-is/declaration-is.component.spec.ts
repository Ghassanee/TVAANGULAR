import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationIsComponent } from './declaration-is.component';

describe('DeclarationIsComponent', () => {
  let component: DeclarationIsComponent;
  let fixture: ComponentFixture<DeclarationIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
