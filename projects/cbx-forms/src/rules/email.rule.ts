import { FormControl } from '@angular/forms';
import Rule from "../interfaces/rule.interface";
import validator from 'validator';

/*-----------------------------
 | Email Rule
 |-----------------------------
 | Regra de validacao de emails
 *----------------------------*/
const EmailRule: Rule = {
    ref: 'email',
    message: 'O e-mail digitado é invalido',
    callback: (control: FormControl) => {
        if ( control.value ) {
            if ( validator.isEmail(control.value)) {
                return null;
            } else return { email: true };
        } else return null;
    }
}

export default EmailRule;

// End of file