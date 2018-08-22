import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute, Router} from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { ExampleModule } from "./example/example.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     BrowserAnimationsModule,
     LayoutModule,
     ExampleModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
