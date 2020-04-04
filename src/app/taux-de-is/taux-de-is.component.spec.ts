import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxDeIsComponent } from './taux-de-is.component';

describe('TauxDeIsComponent', () => {
  let component: TauxDeIsComponent;
  let fixture: ComponentFixture<TauxDeIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TauxDeIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TauxDeIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
