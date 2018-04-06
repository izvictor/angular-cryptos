import {Injectable} from '@angular/core';
import {Ticker} from '../model/ticker';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  api: string = 'https://api.coinmarketcap.com/v1/ticker/';

  constructor(private http: HttpClient) {
  }

  getTickers(): Observable<Ticker[]> {
    return this.http.get<Ticker[]>(this.api);
  }

}
