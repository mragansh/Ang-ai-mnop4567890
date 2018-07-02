import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { DilogBoxComponent } from './popup/dilog-box/dilog-box.component'

@NgModule({
  declarations: [
    AppComponent,
    DilogBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule, MatToolbarModule, MatInputModule, MatTableModule, BrowserAnimationsModule, MatDialogModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents:[DilogBoxComponent]
})
export class AppModule { }
