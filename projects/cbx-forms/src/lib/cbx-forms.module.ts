import { CbxFormsService } from './cbx-forms.service';
import { NgModule } from '@angular/core';
import { CbxFormsComponent } from './cbx-forms.component';
import { StatusDirective } from './status.directive';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CbxFormsComponent, 
    StatusDirective, 
    FormErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    CbxFormsComponent, 
    StatusDirective, 
    FormErrorsComponent
  ],
  providers: [
    CbxFormsService
  ]
})
export class CbxFormsModule { }
