import { FormGroup } from '@angular/forms';
export default class CbxForm {

    /**
     * FormGroup de origem
     */
    private fGroup: FormGroup;

    /**
     * Retorna o grupo do formulario
     */
    get group() {
        return this.fGroup;
    }

    /**
     * Indica se o formulario é valido ou nao
     */
    get valid() {
        return this.fGroup.valid;
    }

    /**
     * Indica se o formulario é invalido ou nao
     *
     */
    get invalid() {
        return !this.fGroup.valid;
    }

    /**
     * Obtem os controles
     */
    get controls() {
        return this.fGroup.controls;
    }

    /**
     * Possiveis regras do formulario
     *
     */
    public rules = [];

    /**
     * Método construtor
     *
     * @param fGroup
     */
    constructor(fGroup: FormGroup, rules = []) {
        this.fGroup = fGroup;
        this.rules  = rules;
    }

    /**
     * Obtem o controlador
     */
    getControl(control: string) {
        const controls = this.fGroup.controls;
        return controls[control] ? controls[control] : null;
    }

    /**
     * Volta uma classe se o controlador for invalido
     */
    invalidClass(control: string, className: string = 'invalid'): string {
        const fControl = this.getControl(control);
        if (fControl) {
            if ( fControl.errors && fControl.invalid && fControl.dirty && fControl.touched ) {
                return className;
            } return '';
        } else return '';
    }
}

// End of file
