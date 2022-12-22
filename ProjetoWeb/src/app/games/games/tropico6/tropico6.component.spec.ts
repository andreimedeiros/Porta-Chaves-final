import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tropico6Component } from './tropico6.component';

describe('Tropico6Component', () => {
  let component: Tropico6Component;
  let fixture: ComponentFixture<Tropico6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tropico6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tropico6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
