import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RateInfoModel } from 'src/app/interfaces/RateInfoModel';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})

export class StepperComponent implements OnInit {
  rateInfo: any;

  firstFormGroup = this._formBuilder.group({
    Name: ['', Validators.required],
    ZipCode: ['', Validators.required],
    Age: ['', Validators.required],
    Gender: ['', Validators.required],
    MaritalStatus: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    CreditScore: ['', Validators.required],
    DebtOwed: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    VehiclePrice: ['', Validators.required],
    WeeklyDrivingRange: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, public _shareData: ShareDataService) {
    this.rateInfo = {
      Name: '',
      ZipCode: 0,
      Age: 0,
      Gender: '',
      MaritalStatus: '',
      VehiclePrice: '',
      WeeklyDrivingRange: '',
      CreditScore: '',
      DebtOwed: 0,
    };
  }

  ngOnInit(): void {}

  stepOne(){
    this.rateInfo.Name = this.firstFormGroup.controls.Name.value;
    this.rateInfo.ZipCode = this.firstFormGroup.controls.ZipCode.value;
    this.rateInfo.Age = this.firstFormGroup.controls.Age.value;
    this.rateInfo.Gender = this.firstFormGroup.controls.Gender.value;
    this.rateInfo.MaritalStatus = this.firstFormGroup.controls.MaritalStatus.value;
  }

  stepTwo(){
    this.rateInfo.CreditScore = this.secondFormGroup.controls.CreditScore.value;
    this.rateInfo.DebtOwed = this.secondFormGroup.controls.DebtOwed.value;
  }

  stepThree(){
    this.rateInfo.VehiclePrice = this.thirdFormGroup.controls.VehiclePrice.value;
    this.rateInfo.WeeklyDrivingRange = this.thirdFormGroup.controls.WeeklyDrivingRange.value;
  }

  finish() {
    this.rateInfo.Name = this.firstFormGroup.controls.Name.value;
    this.rateInfo.ZipCode = this.firstFormGroup.controls.ZipCode.value;
    this.rateInfo.Age = this.firstFormGroup.controls.Age.value;
    this.rateInfo.Gender = this.firstFormGroup.controls.Gender.value;
    this.rateInfo.MaritalStatus = this.firstFormGroup.controls.MaritalStatus.value;
    this.rateInfo.CreditScore = this.secondFormGroup.controls.CreditScore.value;
    this.rateInfo.DebtOwed = this.secondFormGroup.controls.DebtOwed.value;
    this.rateInfo.VehiclePrice = this.thirdFormGroup.controls.VehiclePrice.value;
    this.rateInfo.WeeklyDrivingRange = this.thirdFormGroup.controls.WeeklyDrivingRange.value;

    this._shareData.setData(this.rateInfo);
  }
}
