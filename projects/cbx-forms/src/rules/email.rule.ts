import { FormControl } from '@angular/forms';
import Rule from "../interfaces/rule.interface";

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
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if ( control.value.match( regex ) ) {
                return null;
            } else return { email: true };
        } else return null;
    }
}

export default EmailRule;

// End of file