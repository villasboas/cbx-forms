/*-----------------------------
 | Rule Interface
 |-----------------------------
 | Interface para as regras de 
 | validacao
 *----------------------------*/
export default interface Rule {
    ref: string;
    message?: string;
    callback: (params: any) => any
}

// End of file
