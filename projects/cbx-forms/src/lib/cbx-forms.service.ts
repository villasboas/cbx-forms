import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import Rule from '../interfaces/rule.interface';
import CbxForm from './cbx-form.class';
import { DefaultRules } from '../rules';

@Injectable({
  providedIn: 'root'
})
export class CbxFormsService {

  /**
   * Builder do formulario
   */
  private __formBuilder: FormBuilder;

  /**
   * Regras customizadas de validacao
   */
  private __rules: Array<Rule> = DefaultRules;

  /**
   * Método construtor
   *
   */
  constructor() {
    this.__formBuilder = new FormBuilder;
  }

  /**
   * Faz a configuracao do formulario
   *
   * @param rules 
   */
  setup(rules: Array<Array<string>>) {
    return (new CbxForm(this.__formBuilder.group(this.__getRules(rules)), this.__rules));
  }

  /**
   * Obtem uma regra em especifica
   *
   * @param rule
   */
  getRule(rule: string): Rule {
    const founded = this.__rules.filter( r => r.ref == rule );
    return (founded.length == 0 ) ? null : founded[0];
  }

  /**
   * Obtem o array de validadores
   *
   * @param rules
   * @param field 
   */
  private __getValidatorArray(rules: string, field: string) {
      if ( !rules ) return [];

    // Declara as variaveis de controle
    const rulesArray = rules.split('|'); const retorno = [];    

    // percorre todas as regras
    for ( const r in rulesArray ) {

      // Verifica se existem parametros
      if (rulesArray[r].indexOf('[') !== -1 && rulesArray[r].indexOf(']') !== -1) {

        // Separa a regra dos parametros
        const parts = rulesArray[r].split(/[[\]]{1,2}/); parts.length--;

        // Cria a regra
        if (!this.getRule(parts[0])) {
          retorno.push( Validators[parts[0]](parts[1]) );
        } else retorno.push(this.getRule(parts[0]).callback(parts[1]));
      } else {

        // Verifica se é uma regra customizada
        if (this.getRule(rulesArray[r])) {
          retorno.push( this.getRule(rulesArray[r]).callback);
        } else retorno.push(Validators[rulesArray[r]]);
      }
    }

    // Volta o array com as regras de validacao
    return retorno;
  }

  /**
   * Obtem as regras de validacao
   *
   * @param rules
   */
  private __getRules(rules: Array<Array<string>>): any[] {
    const formControl = [];
    rules.map(rule => {
      formControl[rule[0]] = new FormControl(null, this.__getValidatorArray(rule[1], rule[0]));
    });
    return {...formControl};
  }
}

// End of file
