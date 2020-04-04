import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationTVAComponent } from './declaration-tva.component';

describe('DeclarationTVAComponent', () => {
  let component: DeclarationTVAComponent;
  let fixture: ComponentFixture<DeclarationTVAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationTVAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationTVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
