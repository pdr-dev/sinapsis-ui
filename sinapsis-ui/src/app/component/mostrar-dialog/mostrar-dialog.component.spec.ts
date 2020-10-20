import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDialogComponent } from './mostrar-dialog.component';

describe('MostrarDialogComponent', () => {
  let component: MostrarDialogComponent;
  let fixture: ComponentFixture<MostrarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
