import { Injectable } from '@angular/core';
import Dogs from './dogdata.json'
//import { all } from 'q';
@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private dogData = Dogs;
  
  get(dogId) {

  }
  getDogs() {
  return this.dogData;  
  }



  constructor() { }
}

