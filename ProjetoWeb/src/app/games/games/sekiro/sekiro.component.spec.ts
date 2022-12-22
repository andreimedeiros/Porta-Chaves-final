import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekiroComponent } from './sekiro.component';

describe('SekiroComponent', () => {
  let component: SekiroComponent;
  let fixture: ComponentFixture<SekiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SekiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SekiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
