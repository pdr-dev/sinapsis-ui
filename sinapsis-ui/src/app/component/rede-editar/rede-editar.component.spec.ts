import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeEditarComponent } from './rede-editar.component';

describe('RedeEditarComponent', () => {
  let component: RedeEditarComponent;
  let fixture: ComponentFixture<RedeEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
