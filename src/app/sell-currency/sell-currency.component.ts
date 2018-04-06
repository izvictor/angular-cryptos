import {Component, Input, OnInit} from '@angular/core';
import {CryptoCurrency} from '../model/cryptocurrency';
import {CurrencyService} from '../services/currency.service';

@Component({
  selector: 'cr-sell-currency',
  templateUrl: './sell-currency.component.html',
  styleUrls: ['./sell-currency.component.css']
})
export class SellCurrencyComponent implements OnInit {

  currencies: CryptoCurrency[];

  constructor(private currencyService: CurrencyService) {
    this.currencies = this.currencyService.wallet.availableCurrencies;
  }

  ngOnInit() {
  }

}
