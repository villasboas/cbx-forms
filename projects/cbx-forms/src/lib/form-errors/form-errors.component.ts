import { message } from './../default-errors';
import CbxForm from 'projects/cbx-forms/src/lib/cbx-form.class';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cbx-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent {

  /**
   * Seta o formulario
   */
  @Input() set cbxForm(form) {
    this.form = form;
  }

  /**
   * Seta o controler com os erros
   */
  @Input() set cbxControl(control) {
    this.control = this.form.controls[control];
  }

  /**
   * Obtem os erros do formulario
   */
  get errors(): string[] {
    const errorsArr = [];
    for ( let error in this.control.errors ) {
      const rules = this.form.rules.filter( r => r.ref == error);
      if ( rules.length > 0 && (this.control && this.control.errors && this.control.invalid && this.control.dirty && this.control.touched)) {
        errorsArr.push(rules[0].message);
      }
    }
    return errorsArr;
  }

  /**
   * Instancia do control
   */
  public control;

  /**
   * Instancia do formulario
   */
  public form: CbxForm;

  /**
   * Método construtor
   */
  constructor() {}
}

// End of file
