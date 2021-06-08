import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExpendituresComponent } from './total-expenditures.component';

describe('TotalExpendituresComponent', () => {
  let component: TotalExpendituresComponent;
  let fixture: ComponentFixture<TotalExpendituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalExpendituresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalExpendituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
