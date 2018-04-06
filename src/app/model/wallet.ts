import {CryptoCurrency} from './cryptocurrency';

export interface IWallet {
  total: number;
  availableCurrencies: CryptoCurrency[];
  boughtCurrencies: CryptoCurrency[];
}

export class Wallet implements IWallet{

  availableCurrencies: CryptoCurrency[];
  boughtCurrencies: CryptoCurrency[];
  total: number;

  constructor (){
    this.total = 7500;
    this.availableCurrencies = [];
    this.boughtCurrencies = [];
  }


}
