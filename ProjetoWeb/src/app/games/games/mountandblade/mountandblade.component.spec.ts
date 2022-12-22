import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountandbladeComponent } from './mountandblade.component';

describe('MountandbladeComponent', () => {
  let component: MountandbladeComponent;
  let fixture: ComponentFixture<MountandbladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountandbladeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountandbladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
