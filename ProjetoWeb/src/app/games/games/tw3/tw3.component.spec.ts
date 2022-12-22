import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tw3Component } from './tw3.component';

describe('Tw3Component', () => {
  let component: Tw3Component;
  let fixture: ComponentFixture<Tw3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tw3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
