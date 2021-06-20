import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRate } from './IRate';

import { ISupportCurrency } from './ISupportCurrency';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  private readonly supportCurrencyApi =
    'https://api.currencyfreaks.com/supported-currencies';

  private readonly currentRateApi =
    'https://api.currencyfreaks.com/latest?apikey=API_KEY';

  constructor(private http: HttpClient) {}

  getSupportCurrency(): Observable<ISupportCurrency[]> {
    return this.http
      .get(this.supportCurrencyApi)
      .pipe(map((response: any) => response as ISupportCurrency[]));
  }

  getCurrentRates(): Observable<IRate> {
    return this.http
      .get(this.currentRateApi)
      .pipe(map((response: any) => response as IRate));
  }
}
