import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DoglistComponent } from './doglist/doglist.component';
import { DogsService } from './dogs.service';

@NgModule({
  declarations: [
    AppComponent,
    DoglistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
