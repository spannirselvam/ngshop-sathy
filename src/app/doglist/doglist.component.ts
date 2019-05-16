import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css']
})
export class DoglistComponent implements OnInit {
  Dogs: Dog[];
  constructor(
    private dogService: DogsService
  ) { }

  ngOnInit() {
    this.getDogs();
  }
  getDogs() {
    this.dogService.getDogs().subscribe((results) => {
      console.log('results: ', results);
      this.Dogs = results;
      return this.Dogs;
    }
    );
  }

}
