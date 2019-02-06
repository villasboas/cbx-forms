import { FormControl } from '@angular/forms';
import Rule from "../interfaces/rule.interface";
import validator from 'validator';

/*-----------------------------
 | Required Rule
 |-----------------------------
 | Regra de validacao de campos obrigatorios
 *----------------------------*/
const NotEmptyRule: Rule = {
    ref: 'not_empty',
    message: 'Esse campo é obrigatório',
    callback: (control: FormControl) => {
        if (control.value) {
            if (validator.isEmpty(control.value, {ignore_whitespace: true}) || control.value.length == 0 ) {
                return { not_empty: true }
            } else return null;
        } else return { not_empty: true };
    }
}

export default NotEmptyRule;

// End of file