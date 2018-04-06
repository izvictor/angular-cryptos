import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Wallet} from '../model/wallet';
import {CurrencyService} from '../services/currency.service';

@Component({
  selector: 'cr-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallet: Wallet = new Wallet();

  constructor(private apiService: ApiService, private currencyService: CurrencyService) {
    this.apiService.getCurrencies().subscribe(currencies => {
      this.wallet.availableCurrencies = currencies.filter(t => t.rank <= 10);
      currencyService.wallet = this.wallet;
    });
  }

  ngOnInit() {

  }

}
