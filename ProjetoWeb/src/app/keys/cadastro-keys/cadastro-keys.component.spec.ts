import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroKeysComponent } from './cadastro-keys.component';

describe('CadastroKeysComponent', () => {
  let component: CadastroKeysComponent;
  let fixture: ComponentFixture<CadastroKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroKeysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
