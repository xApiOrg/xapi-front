import {Payee} from '../app/step-1/payee';
import {Account} from '../app/step-2/account';

export const PAYEES: Payee[] = [
  new Payee('Denis Nelle Riccarda', new Account('GBP', 'bank', 'United Kingdom', 'gb', 201, '1111-1111-1111-1111', 'Spare Money')),
  new Payee('Jaime Arleen Duana', new Account('EUR', 'bank', 'Spain', 'es', 1000, '1111-1111-1111-1111', 'Main Account')),
  new Payee('Dexter Silvia Amore', new Account('GBP', 'bank', 'United States', 'us', 201, '1111-1111-1111-1111', 'Spare Money')),
  new Payee('Xavier Rinaldo Petra', new Account('GBP', 'card', 'United States', 'us', 999, '1111-1111-1111-1523', 'Debit Card')),
  new Payee('Augusta Mirella Aline', new Account('EUR', 'bank', 'Spain', 'es', 1000, '1111-1111-1111-1111', 'Main Account'))
];
