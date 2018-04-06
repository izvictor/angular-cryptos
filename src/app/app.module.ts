import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CryptosTodayComponent} from './cryptos-today/cryptos-today.component';
import {MatCardModule, MatListModule, MatSliderModule, MatSlideToggleModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    CryptosTodayComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
