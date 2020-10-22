import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeIncluirComponent } from './rede-incluir.component';

describe('RedeIncluirComponent', () => {
  let component: RedeIncluirComponent;
  let fixture: ComponentFixture<RedeIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
