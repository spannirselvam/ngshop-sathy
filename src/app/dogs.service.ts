import { Injectable } from '@angular/core';
//import Dogs from './dogdata.json'
//import { all } from 'q';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Dog } from './dog'

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  baseUrl: string = 'https://ngshop-rest-api.herokuapp.com/';
  //private dogData = Dogs;
  dogs : Dog[] =[]
  
  get(dogId) {

  }
  
  getDogs():Observable<Dog[]> {
  return this.http.get(this.baseUrl + 'dogs').pipe(map(arr => {return <Dog[]>arr})
  );  
  }



  constructor(private http: HttpClient) { }
}

