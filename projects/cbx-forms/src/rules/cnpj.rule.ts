import { FormControl } from '@angular/forms';
import Rule from "../interfaces/rule.interface";
import validator from 'validator';

/*-----------------------------
 | Cnpj Rule
 |-----------------------------
 | Regra de validacao de cnpjs
 *----------------------------*/
const CnpjRule: Rule = {
    ref: 'cnpj',
    message: 'O Cnpj digitado é invalido',
    callback: (control: FormControl) => {
        
        if ( control.value ) {

            // retira a mascara do cnpj
            const cnpj = control.value.replace(/[^\d]+/g,'');
 
            // verifica se a string ta vazia
            if(cnpj == '') {
                return { cnpj: true };
            }
             
            // verifica o tamanho da string
            if (cnpj.length != 14) {
                return { cnpj: true };
            }
         
            // Elimina CNPJs invalidos conhecidos
            if (cnpj == "00000000000000" || 
                cnpj == "11111111111111" || 
                cnpj == "22222222222222" || 
                cnpj == "33333333333333" || 
                cnpj == "44444444444444" || 
                cnpj == "55555555555555" || 
                cnpj == "66666666666666" || 
                cnpj == "77777777777777" || 
                cnpj == "88888888888888" || 
                cnpj == "99999999999999") {
                return { cnpj: true };
            }
                 
            // Valida o primeiro digito verificador
            let tamanho = cnpj.length - 2

            // pega o cnpj sem o primeiro digito verificador
            let numeros = cnpj.substring(0,tamanho);

            // pega só os digitos
            const digitos = cnpj.substring(tamanho);
            let soma = 0;
            let pos = tamanho - 7;
            for ( let i = tamanho; i >= 1; i--) {
              soma += numeros.charAt(tamanho - i) * pos--;
              if (pos < 2) {
                pos = 9;
              }
            }

            // pega o resultado da soma com o resto
            let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))  {
                return { cnpj: true };
            }

            // Valida o segundo digito verificador
            tamanho = tamanho + 1;

            // pega o cnpj sem o segundo digito verificador
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            pos = tamanho - 7;
            for ( let i = tamanho; i >= 1; i--) {
              soma += numeros.charAt(tamanho - i) * pos--;
              if (pos < 2)
                    pos = 9;
            }
            
            // pega o resultado da soma com o resto
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1)) {
                return { cnpj: true };
            }                   
            return null;
         
        } else return null;
    }
}

export default CnpjRule;

// End of file