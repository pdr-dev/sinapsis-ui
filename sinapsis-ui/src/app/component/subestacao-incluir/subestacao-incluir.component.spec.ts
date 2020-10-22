import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubestacaoIncluirComponent } from './subestacao-incluir.component';

describe('SubestacaoIncluirComponent', () => {
  let component: SubestacaoIncluirComponent;
  let fixture: ComponentFixture<SubestacaoIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubestacaoIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubestacaoIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
