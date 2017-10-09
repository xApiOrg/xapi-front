import { Account } from '../models/account';
export const ACCOUNTS: Account[] = [
  new Account('EUR', 'CURRENT', 'es', 1000, '1111-1111-1111-1111', 'Main Account'),
  new Account('GBP', 'CASH', 'gb', 201, '1111-1111-1111-1111', 'Spare Money'),
  new Account('GBP', 'CASH', 'es', 999, '2222-3333-4444-5555', 'Credit Card'),
  new Account('EUR', 'FX', 'gb', 726, '1111-1111-1111-1111', 'FX')
];
