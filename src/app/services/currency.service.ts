import {Injectable} from '@angular/core';
import {CryptoCurrency} from '../model/cryptocurrency';
import {Wallet} from '../model/wallet';

@Injectable()
export class CurrencyService {

  wallet: Wallet;

  constructor() {
  }

}
