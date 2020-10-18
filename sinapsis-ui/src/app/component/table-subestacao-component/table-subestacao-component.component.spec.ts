import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSubestacaoComponentComponent } from './table-subestacao-component.component';

describe('TableSubestacaoComponentComponent', () => {
  let component: TableSubestacaoComponentComponent;
  let fixture: ComponentFixture<TableSubestacaoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSubestacaoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSubestacaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
