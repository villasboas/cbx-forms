import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CbxFormsModule } from 'projects/cbx-forms/src/public_api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CbxFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
