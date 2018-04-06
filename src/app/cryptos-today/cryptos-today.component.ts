import {Component, OnInit} from '@angular/core';
import {Ticker} from '../model/ticker';
import {ApiService} from '../services/api.service';
import {MatSliderChange, MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'cr-cryptos-today',
  templateUrl: './cryptos-today.component.html',
  styleUrls: ['./cryptos-today.component.css']
})
export class CryptosTodayComponent implements OnInit {

  positiveTickers: Ticker[] = [];
  negativeTickers: Ticker[] = [];

  sliderValue: number = 3;
  major: boolean = true;


  constructor(private apiService: ApiService) {
    this.loadTickers();
  }

  onSliderChange(change: MatSliderChange) {
    this.sliderValue = change.value;
    this.loadTickers();
  }

  onMinorChange(change: MatSlideToggleChange) {
    this.major = !this.major;
    this.loadTickers();
  }

  onMajorChange(change: MatSlideToggleChange) {
    this.major = !this.major;
    this.loadTickers();
  }


  ngOnInit() {
  }

  loadTickers() {
    if (this.major) {
      this.apiService.getTickers().subscribe(tickers => this.positiveTickers
        = tickers.filter(t => t.rank <= 20 && t.percent_change_24h > 0).slice(0, this.sliderValue));
      this.apiService.getTickers().subscribe(tickers => this.negativeTickers
        = tickers.filter(t => t.rank <= 20 && t.percent_change_24h < 0).slice(0, this.sliderValue));
    }
    else {
      this.apiService.getTickers().subscribe(tickers => this.positiveTickers
        = tickers.filter(t => t.rank >= 50 && t.rank < 100 && t.percent_change_24h > 0).slice(0, this.sliderValue));
      this.apiService.getTickers().subscribe(tickers => this.negativeTickers
        = tickers.filter(t => t.rank >= 50 && t.rank < 100 && t.percent_change_24h < 0).slice(0, this.sliderValue));
    }
  }

}
