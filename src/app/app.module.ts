import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sample01Component } from './sample01/sample01.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Sample02Component } from './sample02/sample02.component';
import { Sample03Component } from './sample03/sample03.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample01Component,
    Sample02Component,
    Sample03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
