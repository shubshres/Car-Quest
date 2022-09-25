import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { RateInfoModel } from 'src/app/interfaces/RateInfoModel';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  //rateInformation: RateInfoModel;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  finish(){
    
  }
}
