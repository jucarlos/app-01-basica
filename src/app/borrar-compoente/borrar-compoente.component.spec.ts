import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCompoenteComponent } from './borrar-compoente.component';

describe('BorrarCompoenteComponent', () => {
  let component: BorrarCompoenteComponent;
  let fixture: ComponentFixture<BorrarCompoenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarCompoenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCompoenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
