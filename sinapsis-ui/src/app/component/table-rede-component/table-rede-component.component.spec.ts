import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRedeComponentComponent } from './table-rede-component.component';

describe('TableRedeComponentComponent', () => {
  let component: TableRedeComponentComponent;
  let fixture: ComponentFixture<TableRedeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRedeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRedeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
