import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DoglistComponent } from './doglist/doglist.component';
import { DogsService } from './dogs.service' ;

@NgModule({
  declarations: [
    AppComponent,
    DoglistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
