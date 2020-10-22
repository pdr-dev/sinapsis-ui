import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubestacaoEditarComponent } from './subestacao-editar.component';

describe('SubestacaoEditarComponent', () => {
  let component: SubestacaoEditarComponent;
  let fixture: ComponentFixture<SubestacaoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubestacaoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubestacaoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
