import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {MatSliderChange, MatSlideToggleChange} from '@angular/material';
import {CryptoCurrency} from '../model/cryptocurrency';

@Component({
  selector: 'cr-cryptos-today',
  templateUrl: './cryptos-today.component.html',
  styleUrls: ['./cryptos-today.component.css']
})
export class CryptosTodayComponent implements OnInit {

  currencies: CryptoCurrency[] = [];

  positiveCurrencies: CryptoCurrency[] = [];
  negativeCurrencies: CryptoCurrency[] = [];

  sliderValue: number = 5;
  major: boolean = true;


  constructor(private apiService: ApiService) {
    this.apiService.getCurrencies().subscribe(tickers => {
      this.currencies = tickers;
      this.loadCurrencies();
    });
  }

  onSliderChange(change: MatSliderChange) {
    this.sliderValue = change.value;
    this.loadCurrencies();
  }

  onMinorChange(change: MatSlideToggleChange) {
    this.major = !this.major;
    this.loadCurrencies();
  }

  ngOnInit() {
  }

  loadCurrencies() {
    this.positiveCurrencies = this.currencies
      .filter(t => (this.major ? t.rank <= 20 : t.rank >= 50 && t.rank < 100) && t.percent_change_24h > 0)
      .sort((a, b) => b.percent_change_24h - a.percent_change_24h)
      .slice(0, this.sliderValue);
    this.negativeCurrencies = this.currencies
      .filter(t => (this.major ? t.rank <= 20 : t.rank >= 50 && t.rank < 100) && t.percent_change_24h < 0)
      .sort((a, b) => b.percent_change_24h - a.percent_change_24h)
      .slice(0, this.sliderValue);
  }

}
