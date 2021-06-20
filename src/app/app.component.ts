import { Component, OnInit } from '@angular/core';

import { ISupportCurrency } from './ISupportCurrency';
import { IRate } from './IRate';
import { RateService } from './rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  supportCurrencies!: ISupportCurrency[];
  currentRates!: IRate;

  givenAmount: number = 1.0;

  constructor(private rateService: RateService) {}
  ngOnInit(): void {
    this.getSupportedCurrencies();
    this.getCurrentRates();
  }

  calculateCurrency(currencyCode: string): number {
    return (this.currentRates.rates[currencyCode] * this.givenAmount) as number;
  }

  private getSupportedCurrencies(): void {
    this.rateService.getSupportCurrency().subscribe((response) => {
      this.supportCurrencies = response;
      console.log(response);
    });
  }

  private getCurrentRates(): void {
    this.rateService.getCurrentRates().subscribe((response) => {
      this.currentRates = response;
      console.log(response);
    });
  }
}
