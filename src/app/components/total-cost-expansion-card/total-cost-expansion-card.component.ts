import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-cost-expansion-card',
  templateUrl: './total-cost-expansion-card.component.html',
  styleUrls: ['./total-cost-expansion-card.component.scss'],
})
export class TotalCostExpansionCardComponent implements OnInit {
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}

  returnCost() {
    return 50;
  }
}
