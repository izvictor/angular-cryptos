import {Component, Input, OnInit} from '@angular/core';
import {CryptoCurrency} from '../model/cryptocurrency';
import {CurrencyService} from '../services/currency.service';

@Component({
  selector: 'cr-buy-currency',
  templateUrl: './buy-currency.component.html',
  styleUrls: ['./buy-currency.component.css']
})
export class BuyCurrencyComponent implements OnInit {


  currencies: CryptoCurrency[] = [];

  constructor(private currencyService: CurrencyService) {
    this.currencies = this.currencyService.wallet.availableCurrencies;
  }

  ngOnInit() {
  }

}
