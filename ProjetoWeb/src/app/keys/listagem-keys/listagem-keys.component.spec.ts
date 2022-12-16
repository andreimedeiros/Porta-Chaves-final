import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemKeysComponent } from './listagem-keys.component';

describe('ListagemKeysComponent', () => {
  let component: ListagemKeysComponent;
  let fixture: ComponentFixture<ListagemKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemKeysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
