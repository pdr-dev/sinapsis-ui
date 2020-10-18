import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubestacaoComponentComponent } from './subestacao-component.component';

describe('SubestacaoComponentComponent', () => {
  let component: SubestacaoComponentComponent;
  let fixture: ComponentFixture<SubestacaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubestacaoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubestacaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
