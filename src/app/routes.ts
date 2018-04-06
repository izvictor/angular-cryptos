import {Routes} from '@angular/router';
import {CryptosTodayComponent} from './cryptos-today/cryptos-today.component';
import {HomeComponent} from './home/home.component';
import {WalletComponent} from './wallet/wallet.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cryptos', component: CryptosTodayComponent},
  {path: 'wallet', component: WalletComponent}
];
