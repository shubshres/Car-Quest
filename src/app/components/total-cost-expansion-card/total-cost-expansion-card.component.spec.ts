import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCostExpansionCardComponent } from './total-cost-expansion-card.component';

describe('TotalCostExpansionCardComponent', () => {
  let component: TotalCostExpansionCardComponent;
  let fixture: ComponentFixture<TotalCostExpansionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCostExpansionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCostExpansionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
