import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSocieteComponent } from './type-societe.component';

describe('TypeSocieteComponent', () => {
  let component: TypeSocieteComponent;
  let fixture: ComponentFixture<TypeSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
