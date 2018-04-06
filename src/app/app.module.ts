import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CryptosTodayComponent} from './cryptos-today/cryptos-today.component';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {HomeComponent} from './home/home.component';
import {WalletComponent} from './wallet/wallet.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {BuyCurrencyComponent} from './buy-currency/buy-currency.component';
import {SellCurrencyComponent} from './sell-currency/sell-currency.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyService} from './services/currency.service';


@NgModule({
  declarations: [
    AppComponent,
    CryptosTodayComponent,
    HomeComponent,
    WalletComponent,
    BuyCurrencyComponent,
    SellCurrencyComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ApiService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
