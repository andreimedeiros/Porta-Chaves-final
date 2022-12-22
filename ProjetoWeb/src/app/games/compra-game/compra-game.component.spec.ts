import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraGameComponent } from './compra-game.component';

describe('CompraGameComponent', () => {
  let component: CompraGameComponent;
  let fixture: ComponentFixture<CompraGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
