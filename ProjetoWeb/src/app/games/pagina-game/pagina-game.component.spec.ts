import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGameComponent } from './pagina-game.component';

describe('PaginaGameComponent', () => {
  let component: PaginaGameComponent;
  let fixture: ComponentFixture<PaginaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
