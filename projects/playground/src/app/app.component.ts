import { CbxFormsService } from './../../../cbx-forms/src/lib/cbx-forms.service';
import { Component } from '@angular/core';
import CbxForm from 'projects/cbx-forms/src/lib/cbx-form.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';

  loginForm: CbxForm;

  constructor(cbxForm: CbxFormsService) {
    this.loginForm = cbxForm.setup([
      ['email', 'email|not_empty'],
      ['cpf', 'cpf|not_empty'],
      ['cnpj', 'cnpj'],
      ['tel', 'minLength[10]|maxLength[11]']
    ]);
  }

  submit() {
    console.log(this.loginForm.group.controls);
  }
}
