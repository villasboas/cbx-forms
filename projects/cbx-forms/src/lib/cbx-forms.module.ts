import { CbxFormsService } from './cbx-forms.service';
import { NgModule } from '@angular/core';
import { CbxFormsComponent } from './cbx-forms.component';

@NgModule({
  declarations: [CbxFormsComponent],
  imports: [
  ],
  exports: [CbxFormsComponent],
  providers: [CbxFormsService]
})
export class CbxFormsModule { }
