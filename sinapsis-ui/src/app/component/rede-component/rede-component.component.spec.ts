import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeComponentComponent } from './rede-component.component';

describe('RedeComponentComponent', () => {
  let component: RedeComponentComponent;
  let fixture: ComponentFixture<RedeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
