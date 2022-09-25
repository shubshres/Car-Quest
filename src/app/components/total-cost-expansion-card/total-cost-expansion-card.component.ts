import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';
import { RateInfoModel } from 'src/app/interfaces/RateInfoModel';

@Component({
  selector: 'app-total-cost-expansion-card',
  templateUrl: './total-cost-expansion-card.component.html',
  styleUrls: ['./total-cost-expansion-card.component.scss'],
})
export class TotalCostExpansionCardComponent implements OnInit {
  panelOpenState = false;
  rateInfo: RateInfoModel; 

  constructor(public _shareData: ShareDataService) {
    this.rateInfo = _shareData.getData();
  }

  ngOnInit(): void {}

  returnCost() {
    if(this.rateInfo.Age){
      this.rateInfo.Age;
    }
  }
}
