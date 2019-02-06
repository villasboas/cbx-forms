import { FormControl } from '@angular/forms';
import Rule from "../interfaces/rule.interface";
import validator from 'validator';

/*-----------------------------
 | Cpf Rule
 |-----------------------------
 | Regra de validacao de cpfs
 *----------------------------*/
const CpfRule: Rule = {
    ref: 'cpf',
    message: 'O CPF digitado é invalido',
    callback: (control: FormControl) => {
        
        if ( control.value ) {

            // declara as variaveis
            const strCPF = control.value.replace( '-', '' ).replace( '.', '' ).replace( '.', '' );
            let Soma = 0;
            let Resto;
    
            // verifica se o valor é zero
            if (strCPF == "00000000000") {
            return null;
            }
    
            // faz a soma das partes
            for ( let i=1; i<=9; i++) {
            Soma = Soma + Number.parseInt( strCPF.substring( i-1, i ) ) * ( 11 - i );
            }
    
            // calcula o resto
            Resto = (Soma * 10) % 11;
    
            // verifica se o resto é 11 ou 10
            if ( ( Resto == 10 ) || ( Resto == 11 ) ) {
            Resto = 0;
            }
    
            // verifica se o resto é igual ao cpf
            if ( Resto != Number.parseInt( strCPF.substring( 9, 10 ) ) ) {
            return { valid_cpf: true };
            }
    
            // reseta a soma
            Soma = 0;
    
            // soma os numeros novamente
            for ( let i = 1; i <= 10; i++ ) {
            Soma = Soma + Number.parseInt( strCPF.substring( i-1, i ) ) * ( 12 - i );
            }
    
            // calcula o resto
            Resto = ( Soma * 10 ) % 11;
    
            // verifica o resto
            Resto = ( Resto == 10 ) || ( Resto == 11 ) ? 0 : Resto;
            if ( Resto != Number.parseInt( strCPF.substring( 10, 11 ) ) ) {
                return { cpf: true };
            } else return null;
        } else return null;
    }
}

export default CpfRule;

// End of file