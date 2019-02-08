import EmailRule from './email.rule';
import CpfRule from './cpf.rule';
import NotEmptyRule from './not-empty';
import CnpjRule from './cnpj.rule';

export const DefaultRules = [
    EmailRule,
    NotEmptyRule,
    CpfRule,
    CnpjRule
];

// End of file
