import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  
  constructor() {}
  
  public sharedData: any;

  setData(sharedData:any){
    this.sharedData = sharedData
  }

  getData():any{
    return this.sharedData; 
  }
} 