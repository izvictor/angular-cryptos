import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CryptoCurrency} from '../model/cryptocurrency';
import {Wallet} from '../model/wallet';

@Injectable()
export class ApiService {

  api: string = 'https://api.coinmarketcap.com/v1/ticker/';

  constructor(private http: HttpClient) {
  }

  getCurrencies(): Observable<CryptoCurrency[]> {
    return this.http.get<CryptoCurrency[]>(this.api);
  }

}
