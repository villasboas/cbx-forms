import { CbxFormsService } from './../../../cbx-forms/src/lib/cbx-forms.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';

  constructor(public cbxForms: CbxFormsService) {
    this.cbxForms.doAlert();
  }
}
