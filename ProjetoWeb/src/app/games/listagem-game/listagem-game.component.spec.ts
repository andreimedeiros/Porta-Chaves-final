import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemGameComponent } from './listagem-game.component';

describe('ListagemGameComponent', () => {
  let component: ListagemGameComponent;
  let fixture: ComponentFixture<ListagemGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
